import Vue from 'vue'
import Router from 'vue-router'
//路由懒加载
const Home =  () => import('@/views/home/home');
const Login =  () => import('@/views/login/login');
const Register =  () => import('@/views/register/register');
const passwordChange =  () => import('@/views/passwordChange/passwordChange');
const goodDetail =  () => import('@/views/goodDetail/goodDetail');
const Search =  () => import('@/views/search/search');
const SearchRes =  () => import('@/views/searchRes/searchRes');
const User =  () => import('@/views/user/user');
const OrderConfirm =  () => import('@/views/orderConfirm/orderConfirm');
const MyPoint =  () => import('@/views/myPoint/myPoint');
const MyOrder =  () => import('@/views/myOrder/myOrder');
const Address =  () => import('@/views/address/address');
const addressEdit =  () => import('@/views/addressEdit/addressEdit');
const UserAssets =  () => import('@/views/userAssets/userAssets');
const OrderDetail =  () => import('@/views/orderDetail/orderDetail');
const OrderPay =  () => import('@/views/orderPay/orderPay');
const ShopCar =  () => import('@/views/shopCar/shopCar');

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
    path: '/passwordChange',
    name: 'passwordChange',
    component: passwordChange
  },
  {
    path: '/goodDetail/:gdSN',
    name: 'goodDetail',
    component: goodDetail
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
    path: '/addressEdit/',
    name: 'addressEdit',
    component: addressEdit
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
