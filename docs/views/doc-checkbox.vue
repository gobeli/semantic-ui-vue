<template>
  <div>
    <h1>Flag</h1>
    <demo-panel>
      <template slot="demo">
        <ui-checkbox v-model="visible">Make my profile visible</ui-checkbox>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>Pass in all other <a target="_blank" href="http://semantic-ui.com/modules/checkbox.html">options</a> as a class.</p>
  </div>
</template>
<script>
  export default {
    name: 'doc-checkbox',
    data: () => ({
      options: [{
        name: 'value (v-model)',
        type: 'Boolean',
        description: 'Value of the checkbox'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: 'Checkbox disabled attribute'
      }],
      demo: '<ui-checkbox v-model="visible">Make my profile visible</ui-checkbox>',
      visible: false
    })
  };
</script>
