<template>

    <div id="main">
        <SellNavigation />

        <section id="cards">
            <ManageCard v-for="order in orderList" :key="order.obj.id"
                :imgsrc="order.image"
                :productHash="order.obj.producthash"
                :buyerAddress="order.obj.creator"
                :quantity="order.obj.quantity"
                :paid="order.obj.paid"
                :deliveryAddress="order.obj.deliveryaddress"
                :initStatus="order.obj.status"
                :orderId="order.obj.id"
                @order-updated="retrieveOrders"
            />
        </section>

    </div>
    
    
</template>

<script>
import ManageCard from '../utils/ManageCard.vue';
import SellNavigation from './SellNavigation.vue'

export default {

    components: {

        ManageCard,
        SellNavigation
    },

    data() {
        return {
            orderList: [],
            orderWithDelivery: [],
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Order',
            ipfsPrefix: 'https://ipfs.io/ipfs/',
        };
    },

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async retrieveOrders() {

            if (! this.selectedAccount) {
                return;
            }
            
            // retrieve order
            let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', {options: {}});
            let new_res = await res.Order.filter((v) => v.seller == this.selectedAccount);
            new_res = await new_res.filter((v) => v.status != 2);

            // retrieve delivery address
            for (var i = 0; i < await new_res.length; i++) {
                // get the imageLink
                let image = await this.getProductImage(new_res[i].producthash)


                await this.orderList.push({obj: new_res[i], image: image});
                await console.log(this.orderList);
            }



            await console.log(this.orderList);
        },

        async getProductImage(productHash) {
                var response = await fetch(this.ipfsPrefix + productHash)
				var data

				try {
                    data = await response.json()
                    console.log(data)
				} catch (e) {
					// do nothing
				}

				if (data) {
					return data.imageLinks[0].link
				} else {
                    return ''
                }
        },
    },

    created() {
        this.retrieveOrders()
    }

}

</script>

<style scoped>
    #cards {
        margin-top: 5rem;
    }
</style>
