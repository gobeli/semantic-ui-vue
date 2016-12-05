<template>
  <div class="ui label" :class="{image: imgSrc}">
    <img v-if="imgSrc" :src="imgSrc" :alt="$slots.default[0].textContent">
    <ui-icon v-if="iconBefore" @click="emit('icon-before-click')" :class="[iconBefore]"></ui-icon>
    <slot></slot>
    <ui-icon v-if="iconAfter" @click="emit('icon-after-click')" :class="[iconAfter]"></ui-icon>
    <div class="detail"><slot name="detail"></slot></div>
  </div>
</template>
<script>
  import UiIcon from './icon.vue';
  export default {
    name: 'ui-label',
    props: {
      name: [String, Number],
      iconBefore: String,
      iconAfter: String,
      imgSrc: String
    },
    methods: {
      emit(event) {
        console.log(event);
        this.$emit(event);
      }
    },
    components: {
      UiIcon
    }
  };
</script>