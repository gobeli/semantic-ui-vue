import Button from './elements/button.vue';
import Buttons from './elements/buttons.vue';
import Divider from './elements/divider.vue';
import Flag from './elements/flag.vue';
import Icon from './elements/icon.vue';
import Input from './elements/input.vue';
import Label from './elements/label.vue';
import List from './elements/list.vue';
import ListItem from './elements/list-item.vue';

import Checkbox from './modules/checkbox.vue';
import Radiobutton from './modules/radiobutton.vue';

const components = {
  Buttons,
  Button,
  Input,
  Flag,
  Divider,
  Icon,
  Label,
  List,
  ListItem,

  Checkbox,
  Radiobutton
};

components.install = (Vue) => {
  for (const c in components) {
    if (c && c !== 'install') {
      Vue.use(components[c]);
    }
  }
};

export default components;