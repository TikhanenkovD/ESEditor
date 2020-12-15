import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthPage from '../AuthPage.vue'
import MainPage from '../MainPage.vue'
import CreateStoryPage from '../CreateStoryPage.vue'
import EditStoryPage from '../EditStoryPage.vue'


Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'main', component: MainPage },
  { path: '/auth', name: 'auth', component: AuthPage },
  { path: '/create', name: 'create-story-page', component: CreateStoryPage },
  { path: '/edit/:id', name: 'edit-story-page', component: EditStoryPage, props: true }
]

export default new VueRouter({
  mode: 'history',
  routes
})