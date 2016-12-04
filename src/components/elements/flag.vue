<template>
  <i class="flag" :class="[country]"></i>
</template>
<script>
  export default {
    name: 'ui-flag',
    props: {
      name: String,
      country: String
    }
  };
</script>