<template>
  <div>
    <h1>Flag</h1>
    <demo-panel>
      <template slot="demo">
        <div class="field">
          <ui-radiobutton ui-value="radio1" v-model="group">Radio 1</ui-radiobutton>
        </div>
        <div class="field">
          <ui-radiobutton ui-value="radio2" v-model="group">Radio 2</ui-radiobutton>
        </div>
        <div class="field">
          <ui-radiobutton ui-value="radio3" v-model="group">Radio 3</ui-radiobutton>
        </div>
        Selected: <code>{{group}}</code>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>Pass in all other <a target="_blank" href="http://semantic-ui.com/modules/checkbox.html">options</a> as a class.
  </div>
</template>
<script>
  export default {
    name: 'doc-radiobutton',
    data: () => ({
      options: [{
        name: 'ui-value',
        type: '[String, Number]',
        description: 'Value of the group (name of the selected radiobutton)'
      }, {
        name: 'value (v-model)',
        type: '[String, Number]',
        description: 'Value of the group (name of the selected radiobutton)'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: 'Checkbox disabled attribute'
      }],
      demo: `<div class="field">
  <ui-radiobutton ui-value="radio1" v-model="group">Radio 1</ui-radiobutton>
</div>
<div class="field">
  <ui-radiobutton ui-value="radio2" v-model="group">Radio 2</ui-radiobutton>
</div>
<div class="field">
  <ui-radiobutton ui-value="radio3" v-model="group">Radio 3</ui-radiobutton>
</div>`,
      group: ''
    })
  };
</script>
