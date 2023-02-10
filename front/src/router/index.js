import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'
import Create from '../views/Create.vue'
import Content from '../views/Content.vue'
import Edit from '../views/Edit.vue'

const routes = [
  {
    path: '/content',
    name: 'Home',
    component: Home
  },
  {
    path: '/user/signin',
    name:'SignInForm',
    component: SignIn
  },
  {
    path:'/user/signup',
    name:'SignUpForm',
    component: SignUp
  },
  {
    path: '/profile/:username',
    name: 'Profile',
    component: Profile,
    prop: true
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/content/:id',
    name: 'Content',
    component: Content
  },
  {
    path: '/content/edit/:id',
    name: 'Edit',
    component: Edit
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
