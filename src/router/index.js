import Vue from 'vue'
import Router from 'vue-router'
import articles from '@/view/articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'articles',
      component: articles
    }
  ]
})
