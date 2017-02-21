<template>
  <div class="ui dropdown" 
    @click="open = !open" 
    :class="{selection: selection, active: open, visible: open}">
    <input type="hidden" :name="name">
    <i class="dropdown icon"></i>
    <div class="default text">{{title}}</div>
    <div class="menu" :class="{transition: open, visible: open}">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-dropdown',
    props: {
      name: {
        type: [String, Number],
        required: true
      },
      title: String,
      selection: Boolean
    },
    data: () => ({
      open: false
    }),
    mounted() {
      console.log(this.$slots);
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>