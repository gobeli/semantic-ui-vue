<template>
  <i class="flag" :class="[country]"></i>
</template>
<script>
  export default {
    name: 'ui-flag',
    props: {
      name: [String, Number],
      country: String
    }
  };
</script>