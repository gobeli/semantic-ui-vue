<template>
  <div class="ui input">
    <input 
      v-if="type !== 'multiline'"
      v-model="curValue" 
      :type="type" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <textarea 
      v-else
      v-model="curValue" 
      :type="type" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"></textarea>
  </div>
</template>
<script>
  export default {
    name: 'ui-input',
    data() {
      return {
        curValue: this.value
      };
    },
    props: {
      name: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: {
        type: [Number, String],
        required: true
      },
      maxlength: Number,
      minlength: Number,
      disabled: Boolean,
      readonly: Boolean
    },
    watch: {
      value(val) {
        this.curValue = val;
      },
      curValue(val) {
        this.$emit('input', val);
        this.$emit('change', val);
      }
    },
    install(Vue) {
      Vue.component(this.name, Vue.extend(this));
    }
  };
</script>