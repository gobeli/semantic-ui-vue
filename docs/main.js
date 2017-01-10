import Vue from 'vue';
import VueRouter from 'vue-router';
import Components from './components';
import Views from './views';

import SemanticUi from '../src';

Vue.use(SemanticUi);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Views.DocHome }
];

const elementRoutes = [
  { path: '/button', component: Views.DocButton, name: 'Button' },
  { path: '/divider', component: Views.DocDivider, name: 'Divider' }
];

routes.push(...elementRoutes);

const router = new VueRouter({
  routes
});

Vue.component('options-table', Components.OptionsTable);
Vue.component('demo-panel', Components.DemoPanel);

new Vue({
  router,
  data() {
    return {
      sidebarVisible: false,
      elementRoutes
    };
  },
  methods: {
    toggleMenu($event) {
      if ($event.target.className === 'icon content' || $event.target.className === 'item') {
        this.sidebarVisible = true;
      } else if (!$event.target.className.includes('ui sidebar')) {
        this.sidebarVisible = false;
      }
    }
  }
}).$mount('#app');
