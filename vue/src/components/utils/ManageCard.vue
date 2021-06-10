<template>

    <div id="main">
        <SellNavigation />
        
        <section id="order-bar">
            <span class="tick" v-if="initStatus==2"> &#9989; </span>
            <span> <img :src="imgsrc" /> </span>
            <span class="details"> Order ID: <p>{{orderId}}</p> </span>
            <span class="details"> productHash: <p>{{productHash}}</p> </span>
            <span class="details"> BuyerAddress: <p>{{buyerAddress}}</p> </span>
            <span class="details"> Quantity: <p>{{quantity}}</p> </span>
            <span class="details"> Paid: <p>{{paid}}</p> </span>
            <span class="details"> Status: <p> {{statusDescription[status]}} </p>  </span>
            <span class="details"> 
                <dropdown
							class="my-dropdown-toggle"
							:options="arrayOfObjects"
							:selected="object"
							v-on:updateOption="methodToRunOnSelect"
							:placeholder="'Select an Item'"
							:closeOnOutsideClick="boolean"
				>
				</dropdown>
                <button @click="updateStatus"> Update Status </button>
            </span>
            <span class="details"> Delivery-Address: <p>{{deliveryAddress}}</p> </span>
        </section>

    </div>
    
    
</template>


<script>
import dropdown from 'vue-dropdowns'


export default {

    components: {
        dropdown
    },

    emits: ['order-updated'],

    props: {
        imgsrc: String,
        productHash: String,
        buyerAddress: String,
        quantity: String,
        paid: Number,
        deliveryAddress: String,
        initStatus: Number,
        orderId: Number
    },

    data() {
        return {
            statusDescription: ['to be dispatched', 'dispatched, on the way', 'delivered'],
            statusCode: [0, 1, 2],
            isDisabled: true,
            status: this.initStatus,
            arrayOfObjects: [{ name: 'to be dispatched', code:0}, {name: 'dispatched, on the way', code:1}, {name: 'delivered', code:2}],
			object: {
                name: 'to be dispatched',
                code:0
			},
        }
    },


    computed: {
	    selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async updateStatus(event) {
            if (this.selectedAccount) {
            	this.$swal
					.fire({
						title: 'Update Product status',
						text: 'Are you sure you want to update the product status ?',
						icon: 'question',
						showCancelButton: true,
						confirmButtonColor: 'blueviolet',
						cancelButtonColor: 'orange',
						confirmButtonText: 'Yes, Upadate Status',
						position: 'bottom-end'
					})
					.then(async (result) => {
						if (result.isConfirmed) {
                                this.status = event.target.value;
                                // issue an update request everytime clicked a radio button
                                console.log(this.status)
                                console.log(this.statusDescription[this.status])
                                let payload = {
                                    creator: this.buyerAddress,
                                    id: this.orderId,
                                    producthash: this.productHash,
                                    seller: this.selectedAccount,
                                    quantity: this.quantity,
                                    status: this.object.code,
                                    paid: 1,
                                    deliveryaddress: this.deliveryAddress
                                }

                                console.log(payload)

                                let res = await this.$store.dispatch('sap200.redduct.redduct/sendMsgUpdateOrder', {value: payload, fee:[]})
                                console.log(res)
                                await this.$swal.fire({
								    title: 'Transaction Log',
								    text: JSON.stringify(res),
								    icon: 'info',
							    	position: 'bottom-end'
                            })

                            if (this.object.code == 2) {
                                 await this.$swal.fire({
								    title: 'Transaction Log ! Order Fullfilled',
								    text: JSON.stringify(res),
								    icon: 'info',
							    	position: 'bottom-end'
                                })

                                await this.$emit('order-updated')

                            }

                        } else {
                            this.$swal.fire({
								title: 'Cancelled',
								text: "You don't want update order status",
								icon: 'info',
								position: 'bottom-end'
                            });
                        }
                    });
                } else {
                    this.$swal.fire({
					icon: 'error',
					title: 'Wallet Not Connected',
					text: 'Please sign in and connect to your wallet.',
					position: 'bottom-end'
				})
                } 
        },

        methodToRunOnSelect(payload) {
            this.object = payload
            console.log(this.object)
            console.log(this.deliveryAddress)
        },
    },
}
</script>



<style scoped>

    #order-bar {
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

    img {
        width: 150px;
        height: 150px;
    }

    .details {
        margin-right: 1rem;
        font-size: 1rem;
        padding: 2rem;
    }

    .tick {
        font-size: 2rem;
    }


</style>