<template>
  <div class="ui buttons">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-buttons',
    props: {
      name: [String, Number],
      value: [String, Number],
      'highlight-selected': Boolean
    },
    methods: {
      selectButton(button) {
        const children = this.$children.filter(c => c.$el.classList.contains('button'));
        let value;
        if (children.every(c => c.name)) {
          value = button.name;
        } else {
          value = button._uid;
        }
        this.$emit('input', value);
        this.$emit('change', value);
      }
    }
  };
</script>
