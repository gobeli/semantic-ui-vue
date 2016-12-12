<template>
  <div class="ui divider">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-divider',
    props: {
      name: [String, Number]
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>