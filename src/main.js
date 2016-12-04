import Vue from 'vue';
import ui from './components';

new Vue({
  el: '#app',
  components: {
    'ui-button': ui.Button,
    'ui-buttons': ui.Buttons,
    'ui-input': ui.Input,
    'ui-icon': ui.Icon,
    'ui-label': ui.Label,
    'ui-list': ui.List,
    'ui-list-item': ui.ListItem
  },
  data() {
    return {
      text: '',
      selectedButton: '2'
    };
  },
  methods: {
  }
});
