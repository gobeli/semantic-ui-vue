<template>
  <i class="flag" :class="[country]"></i>
</template>
<script>
  export default {
    name: 'ui-flag',
    props: {
      name: [String, Number],
      country: String
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>