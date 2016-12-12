<template>
  <div>
    <div v-if="dimmer" :class="{inverted: dimmer === 'inverted'}" class="ui active dimmer">
      <div :class="{text: hasSlots}" class="ui loader">
        <slot></slot>
      </div>
    </div>
    <div v-else :class="{text: hasSlots}" class="ui active loader">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-loader',
    props: {
      name: [String, Number],
      dimmer: String
    },
    computed: {
      hasSlots() {
        return this.$slots.default.length > 0;
      }
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>
