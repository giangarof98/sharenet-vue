import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'
import Create from '../views/Create.vue'
import Content from '../views/Content.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signin',
    name:'SignInForm',
    component: SignIn
  },
  {
    path:'/signup',
    name:'SignUpForm',
    component: SignUp
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/new',
    name: 'Create',
    component: Create
  },
  {
    path: '/content/:id',
    name: 'Content',
    component: Content
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
