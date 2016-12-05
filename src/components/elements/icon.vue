<template>
  <i class="icon" :class="[icon]" @click="click"></i>
</template>
<script>
  export default {
    name: 'ui-icon',
    props: {
      name: [String, Number],
      icon: String
    },
    methods: {
      click() {
        this.$emit('click');
      }
    }
  };
</script>