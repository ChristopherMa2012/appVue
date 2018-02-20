import Vue from 'vue'
import Router from 'vue-router'
import App from '@/app'
import Home from '@/page/home/home'
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import PwdChange from '@/page/pwdChange/pwdChange'
import GdDetail from '@/page/gdDetail/gdDetail'
import Search from '@/page/search/search'
import SearchRes from '@/page/searchRes/searchRes'
import User from '@/page/user/user'
import OrderConfirm from '@/page/orderConfirm/orderConfirm'
import PayComplete from '@/page/payComplete/payComplete'
import MyPoint from '@/page/myPoint/myPoint'
import MyOrder from '@/page/myOrder/myOrder'
import Address from '@/page/address/address'
import AddrEdit from '@/page/addrEdit/addrEdit'
import UserAssets from '@/page/userAssets/userAssets'
import Discount from '@/page/userAssets/children/discount/discount'
import RedPaper from '@/page/userAssets/children/redPaper/redPaper'
import OrderDetail from '@/page/orderDetail/orderDetail'

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
      path: '/addrEdit',
      name: 'addrEdit',
      component: AddrEdit
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children: [{
          path: '/orderConfirm',
          name: 'orderConfirm',
          component: OrderConfirm
        },
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
      path:'/orderDetail',
      name:'orderDetail',
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
      component: UserAssets,
      children: [{
        path: 'discount',
        name: 'discount',
        component: Discount
      }, {
        path: 'redPaper',
        name: 'redPaper',
        component: RedPaper
      }]
    }
  ]
})
