<template>
  <transition name="slide-in">  
    <div v-show="visible" class="ui sidebar inverted vertical menu visible">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'ui-sidebar',
    props: {
      name: [String, Number],
      visible: Boolean
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>
<style lang="scss">
  .ui.sidebar {  
    transition: all .5s ease;
    &.slide-in-enter-active, &.slide-in-leave-active {
      transform: translate(0);
    }
    &.slide-in-enter, &.slide-in-leave-active {
      transform: translateX(-100%) !important;
    }
  }
</style>
