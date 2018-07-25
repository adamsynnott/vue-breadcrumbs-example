import Vue from 'vue';
import Router from 'vue-router';
import jacket from '@/router/jacket';
import sale from '@/router/sale';
import HomePage from '@/components/HomePage';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
      meta: {
        breadcrumb: {
          default: [
            { name: 'Home', link: 'HomePage', nonInteractive: true },
          ],
        },
      },
    },
    jacket,
    sale,
  ],
});
