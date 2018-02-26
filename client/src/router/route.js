import Vue from 'vue'
import Router from 'vue-router'
import App from '@/app'
import Home from '@/page/home'
import Login from '@/page/login'
import Register from '@/page/register'
import PwdChange from '@/page/pwdChange'
import GdDetail from '@/page/gdDetail'
import Search from '@/page/search'
import SearchRes from '@/page/searchRes'
import User from '@/page/user'
import OrderConfirm from '@/page/orderConfirm'
import PayComplete from '@/page/payComplete'
import MyPoint from '@/page/myPoint'
import MyOrder from '@/page/myOrder'
import Address from '@/page/address'
import AddrEdit from '@/page/addrEdit'
import UserAssets from '@/page/userAssets'
import OrderDetail from '@/page/orderDetail'
import OrderPay from '@/page/orderPay'
import ShopCar from '@/page/shopCar'

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
    path: '/gdDetail',
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
    children: [
      {
        path: '/payComplete',
        name: 'payComplete',
        component: PayComplete
      }

    ]
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
    path: '/userAssets/:id',
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
