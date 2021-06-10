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
            <span class="details"> Status: <p> {{statusDescription[status]}} </p> </span>
            <span class="details"> Delivery-Address: <p>{{deliveryAddress}}</p> </span>
        </section>

    </div>
    
    
</template>


<script>
export default {
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
            status: this.initStatus
        }
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