const path = {
  home: '/',
  user: '/user',
  profile: '/user/profile',
  changepassword: '/user/password',
  HistoryPurchase: '/user/purchase',
  login: '/login',
  register: '/register',
  logout: '/logout',
  productDetail: ':nameId',
  cart: '/cart'
} as const
export default path
