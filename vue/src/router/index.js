import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Types from '@/views/Types.vue'
import Relayers from '@/views/Relayers.vue'
import FrontPage from '@/components/utils/FrontPage.vue'
import SellNavigation from '@/components/sell/SellNavigation.vue'
import CreateProduct from '@/components/sell/CreateProduct.vue'
import ManageProduct from '@/components/sell/ManageProduct.vue'
import BuyProduct from '@/components/buy/BuyProduct.vue'
import ProductDetails from '@/components/buy/ProductDetails.vue'
import CartDetails from '@/components/buy/CartDetails.vue'
import OrderPage from '@/components/order/OrderPage.vue'
import MyOrders from '@/components/order/MyOrders.vue'
import ManageOrders from '@/components/sell/ManageOrders.vue'
import DoneOrders from '@/components/sell/DoneOrders.vue'

const routerHistory = createWebHistory()
const routes = [
	{
		path: '/',
		component: FrontPage
	},
	{ path: '/types', component: Types },
	{ path: '/relayers', component: Relayers },
	{ path: '/wallet', component: Index},
	{ path: '/sell', component: SellNavigation},
	{ path: '/sell/CreateProduct', component: CreateProduct},
	{ path: '/sell/manageProduct', component: ManageProduct},
	{ path: '/buy/BuyProduct', component: BuyProduct},
	{ path: '/buy/productDetails', name: "ProductDetails", component: ProductDetails, props: true},
	{ path: '/cart/cartDetails', component: CartDetails},
	{ path: '/order/orderPage', name: "OrderPage", component: OrderPage, props: true},
	{ path: '/myorders', component: MyOrders},
	{ path: '/sell/manageOrders', component: ManageOrders},
	{ path: '/sell/doneOrders', component: DoneOrders}
]

const router = createRouter({
	history: routerHistory,
	routes
})

export default router
