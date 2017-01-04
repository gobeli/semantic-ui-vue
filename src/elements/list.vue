<template>
  <div class="ui list">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-list',
    props: {
      name: [String, Number]
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>