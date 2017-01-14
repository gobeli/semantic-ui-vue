<template>
  <div @click="setValue" :class="{checked: value}" class="ui checkbox">
    <input
      type="checkbox" 
      :name="nameOrUid"
      :disabled="disabled"
      :checked="value">
    <label :for="nameOrUid">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  import Helper from '../helper.js';
  export default {
    name: 'ui-checkbox',
    props: {
      name: [String, Number],
      disabled: Boolean,
      value: Boolean
    },
    computed: {
      nameOrUid() {
        return Helper.getNameOrUid(this);
      }
    },
    methods: {
      setValue() {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>
<style>
  .ui.checkbox>label{
    cursor: pointer;
  }
</style>