import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeSingleContent from '../views/Home2.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Profile from '../views/Profile.vue'
import Create from '../views/Create.vue'
import CreateSingle from '../views/CreateSingle.vue'
import Content from '../views/Content.vue'
import Edit from '../views/Edit.vue'
import UserUpdateConfig from '../views/UserUpdateConfig.vue'
import SinglePostByUser from '../views/ProfileSinglePosts.vue'

const routes = [
  {
    path: '/content',
    name: 'Home',
    component: Home
  },
  {
    path: '/singlecontent',
    name: 'Home2',
    component: HomeSingleContent
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
    path: '/profile/:username/settings',
    name: 'UserUpdateConfig',
    component: UserUpdateConfig,
    
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/createsingle',
    name: 'CreateSingle',
    component: CreateSingle
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
  {
    path: '/content/:username/single',
    name: 'SinglePostsByUser',
    component: SinglePostByUser,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
