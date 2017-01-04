<template>
  <div class="ui segments">
      <div class="ui secondary segment head">
        <h2>Demo</h2>
        <i class="icon code" @click="codeOpen = !codeOpen"></i>
      </div>
      <div class="ui segment">
        <slot name="demo"></slot>
      </div>
      <div class="ui secondary segment" v-show="codeOpen">
        <slot name="code"></slot>
      </div>
    </div>
</template>
<script>
  export default {
    name: 'options-table',
    data() {
      return {
        codeOpen: false
      };
    },
    props: {
      options: Array
    }
  };
</script>
<style lang="sass">
  .segment.head {
    display: flex;
    justify-content: space-between;
    h2 {
      margin: 0;
    }
    i.code {
      cursor: pointer;
      margin: 0;
      opacity: 0.5;
      font-size: 20px;
      color: #000000;
      transition: opacity 0.3s ease-out;
      &:hover{
        opacity: 1;
      }
    }
  }
</style>