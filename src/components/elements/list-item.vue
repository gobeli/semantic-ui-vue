<template>
  <div class="item">
    <ui-icon v-if="icon" :class="[icon]"></ui-icon>
    <div v-if="icon" class="content"><slot></slot></div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script>
  import UiIcon from './icon.vue';
  export default {
    name: 'ui-list-item',
    props: {
      name: String,
      icon: String,
      bulleted: Boolean,
      ordered: Boolean
    },
    components: {
      UiIcon
    }
  };
</script>