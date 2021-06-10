<template>
    <div>

		<UtilityBar />

        <p v-if="isLoading" style="text-align: center; font-size: 3rem; margin-top: 5rem">Loading...</p>

         <!-- Product 2-->
         <ul>
             <li v-for="obj in productSKU" :key="obj.productHash.IpfsHash">
                    <BuyCard 
                    :imageSource="obj.data.imageLinks[0].link"
                    :productName="obj.data.productName"
                    :productPrice="obj.data.price"
                    :sellerAddress="obj.productHash.creator"
                    :productObject="obj"
                    :quantity="obj.productHash.quantity"
                    />
            </li>
        </ul>
           
    </div>
</template>

<script>
import BuyCard from '../utils/BuyCard.vue'
import UtilityBar from './UtilityBar.vue'

export default {
    /* eslint-disable */
    components: {
        BuyCard,
		UtilityBar
    },

    data() {
		return {
			productHash: [],
			productSKU: [],
			modulePath: 'sap200.redduct.redduct',
			moduleType: 'Product',
			ipfsPrefix: 'https://ipfs.io/ipfs/',
			isLoading: false
		}
    },
    
    computed: {
		selectedAccount() {
			return this.$store.getters['common/wallet/address']
		}
    },
    
    methods: {
		async getProductHash() {
			this.isLoading = true
			try {
				let res = await this.$store.dispatch(this.modulePath + '/Query' + this.moduleType + 'All', { options: {} })
				let new_res = await res.Product.filter(v => v.creator != this.selectedAccount)
				this.productHash = await new_res

				// Get the Ipfs hash

				for (var i = 0; i < this.productHash.length; i++) {
					await this.getProductSKU(this.productHash[i])
				}

				this.isLoading = await false
			} catch (e) {
				console.log(e)
				this.productHash = []
			}
		},

		async getProductSKU(productHash) {
			if (productHash.ipfshash) {
				var response = await fetch(this.ipfsPrefix + productHash.ipfshash)
				var data

				try {
					data = await response.json()
				} catch (e) {
					// do nothing
				}

				if (data) {
					this.productSKU.push({ productHash: productHash, data: data })
				}
			}
		},

		refreshCards() {
			this.productHash = []
			this.productSKU = []
			this.getProductHash()
		}
	},

	created() {
		this.getProductHash()
	}
   
}

</script>

<style scoped>

ul{
  list-style:none;
}

ul li{
  float:left;
  padding:10px;
}



</style>