import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home =  () => import('@/page/home');
const Login =  () => import('@/page/login');
const Register =  () => import('@/page/register');
const PwdChange =  () => import('@/page/pwdChange');
const GdDetail =  () => import('@/page/gdDetail');
const Search =  () => import('@/page/search');
const SearchRes =  () => import('@/page/searchRes');
const User =  () => import('@/page/user');
const OrderConfirm =  () => import('@/page/orderConfirm');
const MyPoint =  () => import('@/page/myPoint');
const MyOrder =  () => import('@/page/myOrder');
const Address =  () => import('@/page/address');
const AddrEdit =  () => import('@/page/addrEdit');
const UserAssets =  () => import('@/page/userAssets');
const OrderDetail =  () => import('@/page/orderDetail');
const OrderPay =  () => import('@/page/orderPay');
const ShopCar =  () => import('@/page/shopCar');

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'app',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/pwdChange',
    name: 'pwdChange',
    component: PwdChange
  },
  {
    path: '/gdDetail/:gdSN',
    name: 'gdDetail',
    component: GdDetail
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/searchRes',
    name: 'searchRes',
    component: SearchRes
  },
  {
    path: '/address',
    name: 'address',
    component: Address
  },
  {
    path: '/addrEdit/',
    name: 'addrEdit',
    component: AddrEdit
  },
  {
    path: '/orderConfirm',
    name: 'orderConfirm',
    component: OrderConfirm
  },
  {
    path: '/user',
    name: 'user',
    component: User,
    // children: [
    //   {
    //     path: '/payComplete',
    //     name: 'payComplete',
    //     component: PayComplete
    //   }

    // ]
  },
  {
    path: '/myOrder',
    name: 'myOrder',
    component: MyOrder
  },
  {
    path: '/orderDetail',
    name: 'orderDetail',
    component: OrderDetail
  },
  {
    path: '/myPoint',
    name: 'myPoint',
    component: MyPoint
  },
  {
    path: '/userAssets/:module',
    name: 'userAssets',
    component: UserAssets
  },
  {
    path: '/orderPay',
    name: 'orderpay',
    component: OrderPay
  },
  {
    path: '/shopCar',
    name: 'shopCar',
    component: ShopCar
  }
  ]
})
