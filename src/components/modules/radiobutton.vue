<template>
  <div @click="setValue" :class="{checked: value === uiValue}" class="ui checkbox radio">
    <input
      type="radio" 
      :name="name"
      :value="uiValue"
      :checked="value === uiValue"
      :disabled="disabled">
    <label :for="name">
      <slot></slot>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'ui-radiobutton',
    props: {
      name: [String, Number],
      uiValue: {
        type: [String, Number],
        required: true
      },
      value: {
        type: [String, Number],
        required: true
      },
      disabled: Boolean
    },
    methods: {
      setValue() {
        this.$emit('input', this.uiValue);
        this.$emit('change', this.uiValue);
      }
    }
  };
</script>
<style>
  .ui.checkbox>label{
    cursor: pointer;
  }
</style>