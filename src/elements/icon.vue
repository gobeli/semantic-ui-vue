<template>
  <i class="icon" :class="[icon, size]" @click="click"></i>
</template>
<script>
  export default {
    name: 'ui-icon',
    props: {
      name: [String, Number],
      icon: String,
      size: String
    },
    methods: {
      click() {
        this.$emit('click');
      }
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>