<template>
  <div class="ui input" :class="{ left: iconBefore, icon: (iconBefore || iconAfter) }">
    <input 
      v-if="type === 'text'"
      v-model="curValue" 
      :name="name"
      type="text" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <input 
      v-else-if="type === 'password'"
      v-model="curValue" 
      :name="name"
      type="password" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <input 
      v-else-if="type === 'tel'"
      v-model="curValue" 
      :name="name"
      type="tel" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <input 
      v-else-if="type === 'url'"
      v-model="curValue" 
      :name="name"
      type="url" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <input 
      v-else-if="type === 'email'"
      v-model="curValue" 
      :name="name"
      type="email" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <input 
      v-else-if="type === 'number'"
      v-model="curValue" 
      :name="name"
      type="number" 
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength">
    <textarea 
      v-else-if="type === 'textarea'"
      v-model="curValue" 
      :name="name"
      :placeholder="placeholder"   
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"></textarea>
      <ui-icon v-if="iconBefore" class="left" :class="[iconBefore]"></ui-icon>
      <ui-icon v-if="iconAfter" class="right" :class="[iconAfter]"></ui-icon>
      <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ui-input',
    data: () => ({
      curValue: ''
    }),
    props: {
      name: [String, Number],
      type: {
        type: String,
        default: 'text'
      },
      placeholder: String,
      value: {
        type: [String, Number],
        required: true
      },
      maxlength: Number,
      minlength: Number,
      disabled: Boolean,
      readonly: Boolean,
      iconBefore: String,
      iconAfter: String
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