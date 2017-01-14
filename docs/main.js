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
  { path: '/divider', component: Views.DocDivider, name: 'Divider' },
  { path: '/flag', component: Views.DocFlag, name: 'Flag' },
  { path: '/icon', component: Views.DocIcon, name: 'Icon' },
  { path: '/input', component: Views.DocInput, name: 'Input' },
  { path: '/label', component: Views.DocLabel, name: 'Label' }
];

const moduleRoutes = [
  { path: '/checkbox', component: Views.DocCheckbox, name: 'Checkbox' }
];

routes.push(...elementRoutes, ...moduleRoutes);

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
      elementRoutes,
      moduleRoutes
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
