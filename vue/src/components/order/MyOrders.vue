<template>

    <div id="main">
        <SellNavigation />

        <section id="cards">
            <OrderCard v-for="order in orderList" :key="order.id"
                :imgsrc="order.image"
                :productHash="order.obj.producthash"
                :buyerAddress="order.obj.creator"
                :quantity="order.obj.quantity"
                :paid="order.obj.paid"
                :deliveryAddress="order.obj.deliveryaddress"
                :initStatus="order.obj.status"
                :orderId="order.obj.id"
            />
        </section>

    </div>
    
    
</template>

<script>
import OrderCard from '../utils/OrderCard.vue';

export default {

    components: {

        OrderCard
    },

    data() {
        return {
            orderList: [],
            orderWithDelivery: [],
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Order',
            ipfsPrefix: 'https://ipfs.io/ipfs/'
        };
    },

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async retrieveOrders() {
            
            // retrieve order
            let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', {options: {}});
            let new_res = await res.Order.filter((v) => v.creator == this.selectedAccount);

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
		}
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
