<template>
  <div @click="setValue" :class="{checked: value}" class="ui checkbox">
    <input
      type="checkbox" 
      :name="name"
      :disabled="disabled"
      :checked="value">
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'ui-checkbox',
    props: {
      name: [String, Number],
      disabled: Boolean,
      value: Boolean
    },
    methods: {
      setValue() {
        this.$emit('input', !this.value);
        this.$emit('change', !this.value);
      }
    }
  };
</script>
<style>
  .ui.checkbox>label{
    cursor: pointer;
  }
</style>