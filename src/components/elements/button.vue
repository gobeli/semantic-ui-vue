<template>
  <button @click="click" class="ui button" v-bind:class="{ active: isSelected, labeled: labeled, icon: (iconBefore || iconAfter) }">
    <ui-icon v-if="iconBefore" class="left" :class="[iconBefore]"></ui-icon>
    <slot></slot>
    <ui-icon v-if="iconAfter" class="right" :class="[iconAfter]"></ui-icon>
  </button>
</template>

<script>
import UiIcon from './icon.vue';
import Helper from '../../helper.js';
export default {
  name: 'ui-button',
  data() {
    return {
      buttons: null
    };
  },
  props: {
    name: String,
    iconBefore: String,
    iconAfter: String,
    labeled: Boolean
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
  }
};
</script>