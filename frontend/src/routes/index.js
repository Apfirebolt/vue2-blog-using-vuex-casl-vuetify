import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import EditArticle from '../views/articles/Update.vue'
import ListArticle from '../views/articles/List.vue'
import AddArticle from '../views/articles/Create.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
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
      path: '/articles',
      name: 'ArticleList',
      component: ListArticle
    },
    {
      path: '/articles/:id/edit',
      name: 'editArticle',
      component: EditArticle
    },
    {
      path: '/articles/new',
      name: 'newArticle',
      component: AddArticle
    },
  ]
})
