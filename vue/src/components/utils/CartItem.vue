<template>
    <div id="main">
            <p v-if="isLoading"> Loading ... </p>
            <img :src="currImage" />
            <section id="details">
                <span style="color: black; font-size:2rem;"> ID: {{idInCart}} </span>
                <span style="color: green; font-size:2rem;"> prodID: {{productId}} </span>
                <span style="color: blue; font-size:2rem;"> Name: {{productName}} </span>
                <span style="color: blue; font-size:2rem;"> Seller: {{seller}} </span>
                <span style="color: black; font-size:2rem;"> Qt: {{quantity}} </span>
                <span style="color: red; font-size: 2rem;">  Price: {{price}} </span>
                <span style="color: gray; font-size: 2rem;"> Category: {{category}} </span>
                <span class="button" @click="removeItem"> - Delete </span>
            </section>
    </div>
</template>

<script>
export default {

    props: {
        idInCart: Number,
        quantity: Number,
        productHash: String,
        pricetag: Number,
        seller: String
    },

    emits: ['update-cart', 'update-price'],

    data() {
        return {
            currImage: '',
            productId: '',
            price: 0,
            productName: '',
            category: '',
            ipfsPrefix: 'https://ipfs.io/ipfs/',
			isLoading: false
        };
    },

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async updateInitialVariables() {
            this.isLoading = true;
            // fetch the product SKU
            var response = await fetch(this.ipfsPrefix + this.productHash)
			var data
            try {
                data = await response.json()
            } catch (e) {
                // do nothing
            }

            // extract the details
            this.productId = await data.productId
            this.productName = await data.productName
            this.price = await data.price + ' ' + await data.currency
            this.category = await data.category
            this.currImage= await data.imageLinks[0].link

            this.isLoading = await false
        },

        async removeItem() {

            this.$swal.fire({
                        title: 'Remove from cart ?',
						text: this.productId,
						icon: 'question',
						showCancelButton: true,
						confirmButtonColor: 'blueviolet',
						cancelButtonColor: 'orange',
						confirmButtonText: 'Yes, Remove',
						position: 'bottom-end'
					}).then(async (res) => {
                        if (res.isConfirmed) {
                            // remove
                            console.log("confirmed...")
                            var payload = {creator: this.selectedAccount, id: this.idInCart}
                            // confirmed delete
                            let result = await this.$store.dispatch('sap200.redduct.redduct/sendMsgDeleteCartitem', {value: payload, fee:[]})
                            await this.$swal.fire({
								title: 'Transaction Log',
								text: JSON.stringify(result),
								icon: 'info',
								position: 'bottom-end'
                            })

                            await this.$emit('update-cart')
                            await this.$emit('update-price')

                        } else {
                            // do nothing cancelled
                            console.log("cancelled");
                        }
                    });

        }
    },

    created() {
        this.updateInitialVariables()
    }

}
</script>

<style scoped> 

    #main {
        color: blueviolet;
        padding: 1rem;
        font-size: 1rem;
        display: flex;
        justify-content: left;
        align-items: left;
        background-color: white;

        box-shadow: 0 2px 8px 0 gray;
        margin: 1rem auto;
        border-radius: 1px;
        padding: 1rem;
        width: 95%;
        max-width: 100%;
        overflow: scroll;
    }

    #details {
        padding: 1rem;
        font-size: 1rem;
        display: flex;
        justify-content: left;
        align-items: left;
        background-color: white;
    }

    button {
        height: 20px;
        margin-left: 5rem;
    }

    span {
        margin-right: 2rem;
    }

    img {
        width: 150px;
        height: 150px;
    }

    .button {
        background-color: green;
        height: 4rem;
        width: 15rem;
        text-align: center;
        padding: 1rem;
        font-size: 1.5rem;
        background-color: gainsboro;
        color: white;
        border-radius: 0.5rem;
        background-image: linear-gradient(to right, violet, blueviolet);
        cursor: pointer;
    }

    .button:hover {
        border-width: 1px;
        border-style: solid;
        border-color: gray;
        background-image: linear-gradient(to left, violet, blueviolet);
    }

</style>