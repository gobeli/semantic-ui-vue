<template>
  <div class="item">
    <template v-if="icon">
      <ui-icon :class="[icon]"></ui-icon>
      <div class="content">
        <div class="header">
          {{header}}
        </div>
        <div class="description">
          {{description}}
        </div>
        <slot></slot>
      </div>
    </template>
    <template v-else>
      <div class="header">
        {{header}}
      </div>
      <div class="description">
        {{description}}
      </div>
      <slot></slot>
    </template>
  </div>
</template>
<script>
  import UiIcon from './icon.vue';
  export default {
    name: 'ui-list-item',
    props: {
      name: [String, Number],
      icon: String,
      header: String, // set the header and description with either the props or custom into the slot
      description: String
    },
    components: {
      UiIcon
    }
  };
</script>