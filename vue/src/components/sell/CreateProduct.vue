<template>
	<div id="main">
		<SellNavigation />
		<form @submit.prevent>
			<fieldset>
				<legend>&#10024; &nbsp; Create your product</legend>
				<section class="card">
					<label> Enter the name of product </label>
					<div class="cl-input">
						<input type="text" v-model="productName" />
					</div>
				</section>

				<section class="card">
					<label> Category </label>
					<div class="cl-input">
						<dropdown
							class="my-dropdown-toggle"
							:options="arrayOfObjects"
							:selected="object"
							v-on:updateOption="methodToRunOnSelect"
							:placeholder="'Select an Item'"
							:closeOnOutsideClick="boolean"
						>
						</dropdown>
					</div>
				</section>

				<section class="card">
					<label> What price you wanna sell</label>
					<div class="cl-input">
						<input type="text" v-model="price" />
						<label> ipcp </label>
					</div>
				</section>

				<section class="card">
					<label> Description </label>
					<div class="cl-input-textarea">
						<textarea rows="15" cols="92" v-model="description" />
					</div>
				</section>

				<section class="card">
					<label> Add Links for Images </label>
					<div class="cl-input" v-for="(imageLink, index) in imageLinks" :key="'imageLink.link' + index">
						<input type="text" v-model="imageLink.link" />
					</div>
					<button class="add-link" @click="addALink">&#10133; &nbsp; Add Link</button>
					<button class="add-link" @click="deleteLastLink">&#10134; &nbsp; Remove Link</button>
				</section>

				<section class="card">
					<label> Quantity </label>
					<div class="cl-input">
						<input type="number" v-model="quantity" />
					</div>
				</section>

				<section class="card">
					<label> Attributes </label><br />
					<div class="cl-input" v-for="(attribute, index) in attributes" :key="'attribute.key' + 'attribute.value' + index">
						<label> Key </label> <input type="text" class="cl-input-attribute" v-model="attribute.key" /> <label> Value </label>
						<input type="text" class="cl-input-attribute" v-model="attribute.value" />
					</div>
					<button class="add-link" @click="addAttribute">&#10133; &nbsp; Add Attribute</button>
					<button class="add-link" @click="delAttribute">&#10134; &nbsp; Del Attribute</button>
				</section>

				<button class="submit" @click="submit" :disabled="!address">&#128296; &nbsp; Create Product</button>
			</fieldset>
		</form>
	</div>
</template>

<script>
import dropdown from 'vue-dropdowns'
import SellNavigation from './SellNavigation.vue'
import { uuid } from 'vue-uuid'

export default {
	/* eslint-disable */
	components: {
		dropdown,
		SellNavigation
	},

	data() {
		return {
			arrayOfObjects: [{ name: 'electronics' }, {name: 'utilities'}, {name: 'textiles'}, {name: 'shoes'}, {name: 'miscallenous'}, {name: 'other'}],
			object: {
				name: 'other'
			},
			productName: '',
			price: 0,
			imageLinks: [{ link: '' }],
			quantity: 0,
			attributes: [{ key: '', value: '' }],
			description: ''
		}
	},

	computed: {
		address() {
			return this.$store.getters['common/wallet/address']
		},
	},

	methods: {

		methodToRunOnSelect(payload) {
			this.object = payload
		},

		addALink() {
			this.imageLinks = [...this.imageLinks, { link: '' }]
		},

		deleteLastLink() {
			this.imageLinks.pop()
		},

		addAttribute() {
			this.attributes = [...this.attributes, { key: '', value: '' }]
		},

		delAttribute() {
			this.attributes.pop()
		},

		async submit() {
			var index
			var productId = String(uuid.v4())
			const date = new Date()
			var created = Math.floor(date.getTime() / 1000)
			var ownerAddress = this.address
			var productName = this.productName
			var category = this.object.name
			var price = this.price
			var currency = 'ipcp'
			var imageLinks = this.imageLinks
			var attributes = this.attributes
			var quantity = this.quantity
			var updated = created
			var desc = this.description

			// basic checks
			if (productName == '') {
				this.$swal.fire({
					title: 'Missing Product Name',
					icon: 'error',
					position: 'bottom-end',
					text: 'Product Name cannot be empty'
				})

				return
			}

			if (quantity == 0) {
				this.$swal.fire({
					title: 'Missing Quantity',
					icon: 'error',
					position: 'bottom-end',
					text: 'Quantity cannot be 0'
				})

				return
			}

			if (imageLinks[0].link == '') {
				this.$swal.fire({
					title: 'Missing Image Link',
					icon: 'error',
					position: 'bottom-end',
					text: 'Provide at least one link'
				})

				return
			}

			if (attributes[0].key == '' || attributes[0].value == '') {
				this.$swal.fire({
					title: 'Missing Attributes',
					icon: 'error',
					position: 'bottom-end',
					text: 'Provide at least one Attribute'
				})

				return
			}

			var sku_object = {
				productId: productId,
				created: created,
				ownerAddress: ownerAddress,
				productName: productName,
				category: category,
				price: price,
				currency: currency,
				imageLinks: imageLinks,
				attributes: attributes,
				updated: updated,
				description: desc
			}

			var sku_string = JSON.stringify(sku_object)
			var buffer = new Buffer(sku_string)
			let encoded_sku_string = buffer.toString('hex')
			console.log(encoded_sku_string)

			// send the string to blockchain module for creating product
			if (this.address != '') {
				this.$swal
					.fire({
						title: 'You are about to create a product',
						text: sku_string,
						icon: 'question',
						showCancelButton: true,
						confirmButtonColor: 'blueviolet',
						cancelButtonColor: 'orange',
						confirmButtonText: 'Yes, Make Product',
						position: 'bottom-end'
					})
					.then(async (result) => {
						if (result.isConfirmed) {
							let payload = {
								creator: this.address,
                                ipfshash: encoded_sku_string,
                                quantity: quantity
							}

							console.log(payload)
							// redduct.redduct.redduct/SendMsgCreateProduct
							let result = await this.$store.dispatch('sap200.redduct.redduct/sendMsgCreateProduct', { value: payload, fee: [] })

							console.log(result)

							this.$swal.fire({
								title: 'Transaction Log',
								text: result.rawLog,
								icon: 'info',
								position: 'bottom-end'
							})
						} else {
							this.$swal.fire({
								title: 'Cancelled',
								text: "You don't want to create this product",
								icon: 'info',
								position: 'bottom-end'
							})
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
		}
	}
}
</script>

<style scoped>
form {
	/* box-shadow: 0 2px 8px rgba(0, 0, 0, 1); */
	margin: 1rem auto;
	/* border-radius: 1rem; */
	padding: 3rem;
	text-align: left;
	width: 70%;
	max-width: 100rem;
	/* background-image: linear-gradient(-45deg, rgb(226, 215, 215), white); */
	margin-top: 5rem;
}

fieldset {
	border: 0;
}

.card {
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
	border-radius: 0.1rem;
	padding: 2rem;
	margin-bottom: 1rem;
	background-color: white;
}

textarea {
	margin-top: 1.5rem;
	border-radius: 0.7rem;
	outline: none;
}

input {
	border: 0;
	border-bottom: 1px solid #555;
	background: transparent;
	border-color: lightsalmon;
	width: 80%;
	padding: 1rem;
}

section {
	margin-top: 3rem;
	font-size: 1.7rem;
	margin-bottom: 3rem;
}

legend {
	text-align: center;
	font-size: 3rem;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	background-image: linear-gradient(45deg, blueviolet, violet);
	color: white;
	padding: 1.5rem;
	border-radius: 0.4rem;
}

.cl-input {
	margin-top: 1rem;
	width: 80%;
}

.cl-input-attribute {
	width: 30%;
	margin-right: 1rem;
}

.my-dropdown-toggle {
	border-radius: 5px;
	width: 80%;
	border-color: lightsalmon;
}

label {
	width: 80%;
	padding: 1rem;
}

img {
	width: 40%;
	border-radius: 2rem;
}

button {
	font: inherit;
	cursor: pointer;
	border: 1px solid;
	background-image: linear-gradient(45deg, blueviolet, violet);
	color: white;
	padding: 1.5rem;
	box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
	font-size: 1.6rem;
	border-radius: 2.5rem;
	border-width: 0;
	width: 20rem;
	margin-top: 1rem;
	margin-right: 1rem;
}

button:hover {
	background-image: linear-gradient(-45deg, blueviolet, violet);
}

button:disabled,
button[disabled]{
  border: 1px solid #999999;
  background-image: linear-gradient(to right, gray, darkgrey);
  color: black;
  cursor:auto;
}

.submit {
	float: right;
}

.add-link {
	padding: 0.8rem;
	font-size: 1.5rem;
	width: 15rem;
	margin-top: 1rem;
}
</style>