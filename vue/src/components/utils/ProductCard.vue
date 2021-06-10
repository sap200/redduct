<template>
        <section class="displayCard">
              <div class="section">
                <section class="header"> <span>IPFS Hash</span> </section>
                <section class="value"> <input type="text" :value="ipfsHash" disabled="true"/> </section>
                <button @click="deleteProduct"> Delete </button>
            </div>
             <div class="section">
                <section class="header"> <span>Product Id</span> </section>
                <section class="value"> {{id}} </section>
            </div>
            <div class="section">
                <section class="header"> <span>Name</span> </section>
                <section class="value"> {{name}} </section>
            </div>
            <div class="section">
                <section class="header"> <span>Category</span> </section>
                <section class="value"> {{category}}</section>
            </div>
            <div class="section">
                <section class="header"> <span>Price</span></section>
                <section class = "value">{{price}}</section>
            </div>
            <div class="section">
                <section class="header"> <span>Image</span> </section>
                <section class = "value"> <img :src="image" /> </section>
            </div>
            <div class="section">
                <section class="header"><span> Quantity </span></section>
                <section> <input type="number" class = "value" v-model="equantity" /> </section>
                <button @click="editQuantity"> Edit </button>
            </div>
              <!-- <div class="section">
                <section class="header"><span> SKU </span></section>
                <section class = "value"> {{sku}} </section>
            </div> -->

        </section>
</template>

<script>

export default {

    /* eslint-disable */

    props: {
        id: String,
        name: String,
        category: String,
        price: String,
        image: String, 
        quantity: Number,
        sku: String,
        ipfsHash: String,
        product: Object
    },

    data() {
        return {
            equantity: this.quantity
        };
    },

    emits:['product-deleted', 'product-updated'],

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        deleteProduct() {
            console.log(this.product)
            // To deletea product issue a request for its deletion in message...
            if (this.selectedAccount) {
                this.$swal.fire({
                        title: 'Delete Product',
						text: JSON.stringify(this.product),
						icon: 'question',
						showCancelButton: true,
						confirmButtonColor: 'blueviolet',
						cancelButtonColor: 'orange',
						confirmButtonText: 'Yes, Delete',
						position: 'bottom-end'
					}).then(async (res) => {
                        if (res.isConfirmed) {
                            console.log("Confirmed...")
                            var payload = {creator: this.selectedAccount, id: this.product.id}
                            // confirmed delete
                            let result = await this.$store.dispatch('sap200.redduct.redduct/sendMsgDeleteProduct', {value: payload, fee:[]})
                            await this.$swal.fire({
								title: 'Transaction Log',
								text: result.rawLog,
								icon: 'info',
								position: 'bottom-end'
                            })
                            await this.$emit('product-deleted')

                        } else {
                            console.log("Cancelled...")
                            // do nothing
                        }
                    })
            } else {
                this.$swal.fire({
                    icon: 'error',
					title: 'Wallet Not Connected',
					text: 'Please sign in and connect to your wallet.',
					position: 'bottom-end'
                })
            }
        },

        async editQuantity() {
             this.$swal.fire({
                        text: 'Are you sure you want to change quantity to ' + this.equantity,
						title: "Edit Quantity ?",
						icon: 'question',
						showCancelButton: true,
						confirmButtonColor: 'blueviolet',
						cancelButtonColor: 'orange',
						confirmButtonText: 'Yes, Edit',
						position: 'bottom-end'
					}).then(async (res) => {
                        if (res.isConfirmed) {  
                            console.log("Confirmed...")
                            let edit_payload = {
                                creator: this.selectedAccount,
                                id: this.product.id,
                                ipfshash: this.product.ipfshash,
                                quantity: this.equantity
                            }

                            console.log(edit_payload)
                            let res = await this.$store.dispatch("sap200.redduct.redduct/sendMsgUpdateProduct", {value: edit_payload, fee: []})
                            await this.$swal.fire({
								title: 'Transaction Log',
								text: res.rawLog,
								icon: 'info',
								position: 'bottom-end'
                            })
                            await this.$emit('product-updated')
                        } else {
                            console.log("Cancelled")
                        }
                    });

        }
    }

}
</script>

<style scoped>

    .displayCard {
        width: 40%;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        background-color: white;
        align-items: center;
        justify-content: center;
        margin: 1rem auto;
        margin-bottom: 4rem;
        padding: 1rem;
    }

    .section {
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        border-color: black;
        border-style: solid;
        border-width: 0px 0px 0px 0px;
        margin-right: 2rem;
        
        padding: 1rem;
        width: 100%;
    }
    
    .value {
        font-size: 1.3rem;
        word-wrap:break-word;
    }

    .header {
        font-size: 1.5rem;
        margin-bottom: 1.6rem;
    }

    img {
        width: 200px;
        height: 100px;
    }

    .section:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        cursor: pointer;
    }

    span {
        border-style: solid;
        border-color: black;
        border-width: 0px 0px 1px 0px;
    }

    input {
        width: 70%;
        height: 30px;
        border-width: 0px 0px 1px 0px;
        margin-bottom: 1.3rem;
    }

    button {
        margin-right: 1.2rem;
        background-image: linear-gradient(to right, blueviolet, violet);
        color: white;
        padding: 1rem;
        width: 10rem;
        border-width: 0px;
        border-radius: 2rem;
        font-size: 1.4rem;
        cursor: pointer;
    }

    button:hover {
        background-image: linear-gradient(to right, violet, blueviolet);
        font-size: 1.45rem;
    }



</style>

