import Vue from 'vue';
import SemanticUi from './components';

Vue.use(SemanticUi);

new Vue({
  el: '#app',
  data() {
    return {
      text: '',
      selectedButton: 0,
      group1: '',
      checked: false
    };
  },
  methods: {
  }
});
