<template>
  <div>
    <h1>Flag</h1>
    <demo-panel>  
      <template slot="demo">
        <ui-flag country="ae"></ui-flag>
        <ui-flag country="france"></ui-flag>
        <ui-flag country="myanmar"></ui-flag>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>For a fulll list of countries see the <a href="http://semantic-ui.com/elements/flag.html">semantic-ui docs</a></p>
  </div>
</template>
<script>
  export default {
    name: 'doc-flag',
    data() {
      return {
        options: [{
          name: 'country',
          type: 'String',
          description: 'ISO code of the country'
        }],
        demo: `<ui-flag country="ae"></ui-flag>
<ui-flag country="france"></ui-flag>
<ui-flag country="myanmar"></ui-flag>`
      };
    }
  };
</script>