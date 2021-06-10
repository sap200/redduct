/* eslint-disable */
<template>
	<div id="main">
		<SellNavigation />
		<p v-if="isLoading" style="text-align: center; font-size: 3rem; margin-top: 5rem">Loading...</p>
		<div class="block" style="margin-top: 5rem">
			<ul> 
				<li v-for="obj in this.productSKU" :key="obj.productHash.IpfsHash">
					<ProductCard
						:id="obj.data.productId"
						:name="obj.data.productName"
						:category="obj.data.category"
						:price="obj.data.price + ' ' + obj.data.currency"
						:image="obj.data.imageLinks[0].link"
						:quantity="obj.productHash.quantity"
						:sku="obj.data"
						:ipfsHash="obj.productHash.ipfshash"
						:product="obj.productHash"
						@product-deleted="refreshCards"
                        @product-updated="refreshCards"
					/>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
/* eslint-disable */
import SellNavigation from './SellNavigation.vue'
import ProductCard from '../utils/ProductCard.vue'

export default {
	components: {
		SellNavigation,
		ProductCard
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
				let new_res = await res.Product.filter((v) => v.creator == this.selectedAccount)
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
                    console.log(data)
				} catch (e) {
					// do nothing
				}

				if (data) {
					this.productSKU.push({ productHash: productHash, data: data })
                }
                await console.log(this.productSKU)
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