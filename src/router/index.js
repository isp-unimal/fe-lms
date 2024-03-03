import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/auth/daftar',
      name: 'auth.register',
      component: () => import('@/views/auth/Register.vue')
    },
    {
      path: '/auth/masuk',
      name: 'auth.login',
      component: () => import('@/views/auth/Login.vue')
    },
    {
      path: '/auth/lupa-password',
      name: 'auth.forget',
      component: () => import('@/views/auth/Forget.vue')
    },
    {
      path: '/tim/:id/diskusi',
      name: 'tim.diskusi',
      component: () => import('@/views/team/Discussion.vue')
    },
    {
      path: '/tim/:id/tugas',
      name: 'tim.tugas',
      component: () => import('@/views/team/Assignment.vue')
    },
    {
      path: '/profil/pengaturan',
      name: 'profil.pengaturan',
      component: () => import('@/views/profile/Setting.vue')
    },
    {
      path: '/home/homepage',
      name: 'home.homepage',
      component: () => import('@/views/home/homepage.vue')
    },
    // {
    //   path: '/create',
    //   name: 'user.create',
    //   component: () => import('@/views/user/Create.vue')
    // },
    // {
    //   path: '/edit/:id',
    //   name: 'user.edit',
    //   component: () => import('@/views/user/Edit.vue')
    // },
  ]
})

export default router
