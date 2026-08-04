import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { useUserStore } from '@/stores/user'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

// 路由守卫，放在pinia注册之后！
router.beforeEach((to, from, next) => {
  const user = useUserStore()
  // 需要登录 && 未登录 → 跳转登录页
  if (to.meta.needLogin && !user.isLogin()) {
    next({
      name: 'user-account-login-index'
    })
  } else {
    // 放行
    next()
  }
})

app.mount('#app')