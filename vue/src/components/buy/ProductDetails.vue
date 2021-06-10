<template>
    <div id="main">
        <section class="imagecard">
            <ul> 
                <li v-for="(imagesrc, index) in imageLinks" :key="index" @click=setImage(index)>
                    <img class="liImage" :src="imagesrc" />
                </li>
            </ul>
            <img :src="currImag" />
            <section id="details">
                <p style="color: black; font-size:2.5rem;"> {{productName}} </p>
                <p style="color: red; font-size: 2rem;"> {{productPrice}} </p>
                <p style="color: green; font-size: 2rem;"> SKU: {{ipfsHash}} </p>
                <p style="color: green; font-size: 2rem;"> Seller: {{sellerAddress}} </p>
                <p style="color: gray; font-size: 1.5rem;"> Category: {{category}} </p><br>
                <button @click="addToCart"> + Add to Cart </button>
            </section>
        </section> 

        <section class="description">
            <h3> Description </h3><br>
            {{description}}
        </section>
    </div>    
</template>

<script>
export default {

    name: 'ProductDetails',

    props: {
        imageLinks: Array,
        currentImage: String,
        productName: String,
        productPrice: String,
        category: String,
        description: String,
        ipfsHash:String,
        sellerAddress: String
    },

    data() {
        return {
            currImag: this.currentImage,
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Cartitem'
        }
    },

    computed: {
        selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
    },

    methods: {
        setImage(index) {
            this.currImag = this.imageLinks[index]
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

                let buyerAddress = this.selectedAccount;
                let quantity = 1;
                let payload = {
                    creator: this.selectedAccount,
                    producthash: this.ipfsHash,
                    quantity: quantity,
                    seller: this.sellerAddress,
                    price: this.productPrice,
                }
                let result = await this.$store.dispatch(this.modulePath + '/sendMsgCreate' + this.moduleType, { value: payload, fee: [] })
                await this.$swal.fire({
					icon: 'info',
					title: 'Added to cart',
					text: 'Please check cart...',
					position: 'bottom-end'
				})
            }
        }
    }

}
</script>

<style scoped>

    #main {
        font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }


    .imagecard {
        overflow: scroll;
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
        padding: 4rem;
        width: 75%;
        max-width: 100%;
        margin-top: 3rem;
        border-radius: 1rem;
    }

    img {
        padding: 1rem;
        margin-right: 5rem;
        width: 40%;
        height: 60%;
    }

    .liImage {
        width: 100px;
        height: 100px;
        border-width: 1px;
        padding: 1rem;
        border-style: solid;
        border-color: black;
        cursor: pointer;
    }
    .liImage:hover {
        height: 101px;
        width: 101px;
        box-shadow: 0 10px 10px 0 gray;
    }

    ul {
        margin-right: 2rem;
    }

    .description {
        box-shadow: 0 2px 8px gray;
        margin: 1rem auto;
        border-radius: 1px;
        padding: 4rem;
        width: 75%;
        max-width: 100%;
        margin-top: 3rem;
        background-color: white;
        font-size: 2rem;
        border-radius: 1rem;
    }

    #details {
        width: 20%;

    }

    p {
        font-size: 3rem;
    }

    button {
        background-image: linear-gradient(to right, violet, blueviolet);
        cursor: pointer;
        color: white;
        padding: 2rem;
        border-radius: 2rem;
        border-width: 0;
        font-size: 1.7rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }


    button:hover {
        background-image: linear-gradient(to left, violet, blueviolet);
        box-shadow: 0 5px 5px 0 gray;
    }

</style>