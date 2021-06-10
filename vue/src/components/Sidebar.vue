<template>
	<SpSidebar
		v-on:sidebar-open="sidebarOpen = true"
		v-on:sidebar-close="sidebarOpen = false"
	>
		<template v-slot:default>
			<RouteLink route="/" text="Home" icon="&#127968;" />
			<RouteLink route="/wallet" text="Wallet" icon="&#128179;" />
			<RouteLink route="/sell" text="Sell" icon="&#128176;" />
			<RouteLink route="/relayers" text="Relayers" icon="&#9939;" />
			<RouteLink route="/buy/buyProduct" text="Buy" icon="&#128722;" />
			<RouteLink route="/myorders" text="My Orders" icon="&#9981;" />
			<div class="sp-dash"></div>
			<div class="sp-dash"></div>
			<RouteLink
				route="https://github.com/tendermint/starport"
				target="_blank"
				text="Documentation"
				icon="&#128210;"
				anchor="true"
			/>
		</template>
		<template v-slot:footer>
			<SpStatusAPI :showText="sidebarOpen" />
			<SpStatusRPC :showText="sidebarOpen" />
			<SpStatusWS :showText="sidebarOpen" />
			<div class="sp-text">Build: v0.3.8</div>
		</template>
	</SpSidebar>
</template>

<script>
import RouteLink from './utils/RouteLink.vue'

export default {
	name: 'Sidebar',

	components: {
		RouteLink
	},

	data() {
		return {
			sidebarOpen: true
		}
	},
	computed: {
		hasWallet() {
			return this.$store.hasModule(['common', 'wallet'])
		}
	}
}
</script>
