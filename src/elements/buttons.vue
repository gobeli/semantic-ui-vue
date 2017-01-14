<template>
  <div class="ui buttons">
    <slot></slot>
  </div>
</template>
<script>
  import Helper from '../helper';
  export default {
    name: 'ui-buttons',
    props: {
      name: [String, Number],
      value: [String, Number],
      'highlight-selected': Boolean
    },
    methods: {
      selectButton(button) {
        const value = Helper.getNameOrUid(button);
        this.$emit('input', value);
        this.$emit('change', value);
      }
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>
