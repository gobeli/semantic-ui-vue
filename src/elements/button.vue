<template>
  <button 
    class="ui button" 
    @click="click" 
    :class="{ active: isSelected, icon: (iconBefore || iconAfter) }"
    :disabled="disabled">
    <ui-icon v-if="iconBefore" class="left" :class="[iconBefore]"></ui-icon>
    <slot></slot>
    <ui-icon v-if="iconAfter" class="right" :class="[iconAfter]"></ui-icon>
  </button>
</template>

<script>
import UiIcon from './icon.vue';
import Helper from '../helper.js';

export default {
  name: 'ui-button',
  data() {
    return {
      buttons: null
    };
  },
  props: {
    name: [String, Number],
    disabled: Boolean,
    iconBefore: String,
    iconAfter: String
  },
  mounted() {
    this.buttons = Helper.getParent(this.$parent, 'buttons');
  },
  methods: {
    click() {
      this.$emit('click');
      if (this.buttons) {
        this.buttons.selectButton(this);
      }
    }
  },
  computed: {
    isSelected() {
      return this.buttons && this.buttons.highlightSelected
        && (this.buttons.value === this._uid || this.buttons.value === this.name);
    }
  },
  components: {
    UiIcon
  },
  install(Vue) {
    Vue.component(this.name, Vue.extend(this));
  }
};
</script>