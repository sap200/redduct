<template>
    <div id="main">
        <section id="address">
            <h1> Address </h1>
            <textarea v-model="address"/>
        </section>

        <section id="payment-amount">
           <span> payment amount: {{totalPrice}} ipcp</span>
        </section>

        <button @click="takeOrders"> Proceed to pay </button>
    </div>
</template>

<script>
export default {
    name: 'OrderPage',
    
    props: {
        totalPrice: Number,
        allItemString: String
    },

    data() {
        return {
            address: '',
            moduleType: 'Order',
            modulePath: 'sap200.redduct.redduct'
        };
    },

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async takeOrders() {

            if (this.selectedAccount) {
                let allItemJSON = JSON.parse(this.allItemString)

                if (this.address == '') {
                    this.$swal.fire({
                        icon: 'error',
                        title: 'Address cannot be empty',
                        text: 'Please provide a delivery address',
                        position: 'bottom-end'
                    });
                    return;
                }


                for (var i = 0; i < allItemJSON.length; i++) {

                   
                        // set the order
                        console.log(allItemJSON[i])
                        let payload = await {
                            creator: this.selectedAccount,
                            producthash: allItemJSON[i].producthash,
                            seller: allItemJSON[i].seller, // it is actually
                            quantity: allItemJSON[i].quantity,
                            deliveryaddress: this.address,
                            status: 0,
                            paid: 1,
                            totalamount: allItemJSON[i].price
                        }

                        console.log(payload)

                        // issue bc req
                        let res = await this.$store.dispatch(this.modulePath + '/sendMsgCreateOrder', { value: payload, fee: [] })
                        await console.log(res)

                       // delete the items from cart.
                       let del_load = await {
                           creator: this.selectedAccount,
                           id: allItemJSON[i].id,
                       }
                       let del_res = await this.$store.dispatch(this.modulePath + '/sendMsgDeleteCartitem', {value: del_load, fee: []})
                       await console.log(del_res)

                }

              await this.$swal.fire({
                    icon: 'info',
					title: 'All orders created',
					text: 'Check in your orders if it is created. This is a beta version so expect some errors.',
					position: 'bottom-end'
                })

            } else {
                this.$swal.fire({
                    icon: 'error',
					title: 'Wallet Not Connected',
					text: 'Please sign in and connect to your wallet.',
					position: 'bottom-end'
                });

            }
        },
    }

}
</script>

<style scoped>

    #address {
        background-color: white;
        box-shadow: 0 2px 8px 0 gray;
        width: 80%;
        margin: 1rem auto;
        padding: 2rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    textarea {
        width: 90%;
        margin: 1rem auto;
        height: 30rem;
        display: flex;
        justify-content: right;
        font-size: 1.6rem;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
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
        margin: 1rem auto;
        justify-content: right;
        display: flex;
    }


    button:hover {
        background-image: linear-gradient(to left, violet, blueviolet);
        box-shadow: 0 5px 5px 0 gray;
    }

    #payment-amount {
        text-align: right;
        font-size: 2rem;
        width: 85%;
        
        border-style: solid;
        margin: 1rem auto;
        border-bottom-width: 0px;
        border-left-width: 0;
        border-top-width: 0px;
        border-right: 0;
        border-color: gray;
        margin-top: 5rem;
        padding: 2rem;
    }

    span {
        margin-right: 3rem;
        border-width: 1px;
        border-style: solid;
        padding: 1rem;
    }

</style>