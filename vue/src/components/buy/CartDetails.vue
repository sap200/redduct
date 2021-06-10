<template>
    
    <div id="main">
        <CartItem 
         v-for="item in cartList" :key="item.ProductHash"
         :idInCart="item.id"
         :quantity="item.quantity"
         :productHash="item.producthash"
         :pricetag="item.price"
         :seller="item.seller"
         @update-cart="getItems"
         @update-price="getTotalPrice"
        />

        <div id="price">
             <span> Total: {{priceTotal}} </span>
             <button @click="navigateToOrders"> Proceed to checkout </button>
        </div>
        
    </div> 



</template>

<script>

import CartItem from '../utils/CartItem.vue'

export default {

    components: {
        CartItem
    },

    data() {
        return {
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Cartitem',
            ipfsPrefix: 'https://ipfs.io/ipfs/',
            priceTotal: 0,
            cartList: []
        };
    },

     computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async getItems() {
            let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', { options: {} })
            let new_res = await res.Cartitem.filter((v) => v.creator == this.selectedAccount)
            this.cartList = await new_res 
            console.log(this.cartList)
        },

        async getTotalPrice() {
            console.log('here')
            let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', { options: {} })
            let new_res = await res.Cartitem.filter((v) => v.creator == this.selectedAccount)

            console.log(new_res)

            var totalPrice = 0
            var data

            for (var i = 0; i < await new_res.length; i++) {
                
                // get the object using fetch
                data = await new_res[i].price * await new_res[i].quantity

                totalPrice += await parseInt(data); 
            }

            this.priceTotal = await totalPrice
        },

        navigateToOrders() {
            this.getTotalPrice()
            this.getItems()

            if (this.cartList.length > 0) {

                this.$router.push({name: 'OrderPage', params: {
                    totalPrice: this.priceTotal,
                    allItemString: JSON.stringify(this.cartList)
                }})
            } else {
                 this.$swal.fire({
                    icon: 'error',
					title: 'No items in cart',
					text: 'Please Add items to checkout',
					position: 'bottom-end'
                });
            }

        }
    },

    refreshPage() {
        this.getItems()
        this.getTotalPrice()
    },

    created() {
        this.getItems()
        this.getTotalPrice()
    },
}
</script>

<style scoped>

    #price {
        text-align: right;
        font-size: 2rem;
        width: 95%;
        
        border-width: 1px  black;
        border-style: solid;
        margin: 1rem auto;
        border-bottom-width: 0px;
        border-left-width: 0;
        border-right: 0;
        border-color: gray;
        margin-top: 5rem;
        padding: 2rem;
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

    span {
        margin-right: 3rem;
        border-width: 1px;
        border-style: solid;
        padding: 1rem;
    }

</style>