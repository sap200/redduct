<template>
    <section class="buyCard" >
            <img :src="imageSource" />
            <section id="details">
                <p class="link" style="font-size: 2rem; cursor: pointer;" @click="renderDetails"> <strong> {{productName}} </strong> </p>
                <p style="color: red;"> <b> {{productPrice}} ipcp </b> </p>
                
            </section>
            <section id="footer">
                <p style="text-align: left; color: green; font-size: 1.6rem;"> <b>Sold By:</b> </p>
                <p style="color: blueviolet; padding=1rem;">{{sellerAddress}}</p>
            </section>
            <section id="want-q">
            <input type="number" :max="maxQuantity" v-model="wantQuantity" min="1" />
            </section>
            <section>
            <button @click="addToCart"> + Add to Cart </button>
            </section>
     </section>  
</template>

<script>
export default {
    /* eslint-disable */
    props: {
        imageSource: String,
        productName: String,
        productPrice: Number,
        sellerAddress: String,
        quantity: Number,
        productObject: Object
    },

    data() {
        return {
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Cartitem',
            maxQuantity: this.quantity,
            wantQuantity: 1
            
        };
    },

     computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
    },

    methods: {
        renderDetails() {
            console.log("Rendering Details...")

            var links = [];
            for (var i = 0; i < this.productObject.data.imageLinks.length; i++) {
                links.push(this.productObject.data.imageLinks[i].link)
            }


            this.$router.push({name: 'ProductDetails', params: {
                currentImage: this.productObject.data.imageLinks[0].link,
                imageLinks: links,
                productName: this.productName,
                productPrice: this.productPrice,
                category: this.productObject.data.category,
                description: this.productObject.data.description,
                ipfsHash: this.productObject.productHash.ipfshash,
                sellerAddress: this.sellerAddress
            }})
        },

        async addToCart() {

            if (!this.selectedAccount) {
                this.$swal.fire({
					icon: 'error',
					title: 'Wallet Not Connected',
					text: 'Please sign in and connect to your wallet.',
					position: 'bottom-end'
				})
            } else {
                console.log(this.productPrice)
                let ipfsHash = this.productObject.productHash.ipfshash;
                let quantity = this.wantQuantity;
                let payload = {
                    creator: this.selectedAccount,
                    producthash: ipfsHash,
                    quantity: quantity,
                    seller: this.sellerAddress,
                    price: parseInt(this.productPrice, 10),
                }
                let result = await this.$store.dispatch(this.modulePath + '/sendMsgCreate' + this.moduleType, { value: payload, fee: [] })
                await this.$swal.fire({
					icon: 'info',
					title: 'Added to cart',
					text: 'Please check the cart',
					position: 'bottom-end'
				})
            }
        },
    }

}
</script>

<style scoped>
    .buyCard {
        width: 400px;
        padding: 1rem;
        background-color: white;
        box-shadow: 1px 3px 3px 1px gray;
        margin-left: 2rem;
        border-radius: 1rem;
    }

    img {
        width: 100%;
        height: 300px;
        justify-content: center;
        align-items: center;
        display: flex;
        box-shadow: 0 1px 1px 0 gray;
    }

    #details {
        font-size: 1.7rem;
        text-align: left;
        color: gray;
    }

    #footer {
        font-size: 1.5rem;
        text-align:center;
    }

    button{
        margin-top: 1rem;
        background-image: linear-gradient(to right, violet, blueviolet);
        cursor: pointer;
        color: white;
        padding: 1rem;
        border-radius: 2rem;
        border-width: 0;
        font-size: 1.5rem;
    }

    button:hover {
        background-image: linear-gradient(to left, violet, blueviolet);
        box-shadow: 0 5px 5px 0 gray;
    }

    .link:hover {
        color: black;
    }

    .want-q {
        margin-bottom: 2rem;
    }

</style>