<template>
    <div id="main">
        <input type="text" name="searchbar"/>
        <button> &#128269; </button>
        <section id="cart" @click="navigateToCart"> <span style="color: red; font-size: 1.5rem;"> {{numberOfItemsInCart}} </span> &#128722;</section>
    </div>
</template>

<script>

export default {

    data() {
        return {
            numberOfItemsInCart: 0,
            modulePath: 'sap200.redduct.redduct',
            moduleType: 'Cartitem',
            cartList: []
        };
    },

    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
	},

    methods: {
        async updateItemCount() {
            let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', { options: {} })
            let new_res = await res.Cartitem.filter((v) => v.creator == this.selectedAccount)
            this.numberOfItemsInCart = await new_res.length;
            this.cartList = await new_res 
        },

        navigateToCart() {
            this.$router.push({
                path: '/cart/cartDetails'
            })
        }
    },

    created() {
        this.updateItemCount()
    },

    updated() {
        this.updateItemCount()
    }

}

</script>

<style scoped>
    #main {
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        padding: 1rem;
        font-size: 1rem;
        display: flex;
        justify-content: right;
        align-items: right;
        background-color: white;

        box-shadow: 0 2px 2px 0 gray;
        margin: 1rem auto;
        border-radius: 1px;
        padding: 1rem;
        width: 99%;
        max-width: 100%;
    }

    #cart {
        margin-left: 10rem;
        margin-right: 5rem;
        font-size: 2rem;
        cursor: pointer;
        padding: 0.6rem;
    }

    #cart:hover {
        font-size: 2.01rem;
        background-color: rgb(220, 220, 220);
    }

    input {
        width: 30%;
        margin-right: 1rem;
    }

    button {
        cursor: pointer;
        border-width: 0;
        font-size: 1.5rem;
    }

    button:hover {
        border-width: 1px;
        border-color: rgb(28, 28, 233);
        border-style: double;
    }

</style>