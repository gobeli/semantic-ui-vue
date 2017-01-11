<template>
  <div>
    <h1>Icon</h1>
    <demo-panel>
      <template slot="demo">
        <ui-icon icon="home" size="big"></ui-icon>
        <ui-icon icon="users" size="huge"></ui-icon>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>Pass in all other options as a class <br />
    For a fulll list of icons see the <a target="_blank" href="http://semantic-ui.com/elements/icon.html">semantic-ui docs</a></p>
  </div>
</template>
<script>
  export default {
    name: 'doc-icon',
    data: () => ({
      options: [{
        name: 'icon',
        type: 'String',
        description: 'Name of the icon'
      }, {
        name: 'size',
        type: 'string',
        description: 'Size of the icon (mini, tiny, small, large, big, huge or massive)'
      }],
      demo: `<ui-icon icon="home" size="big"></ui-icon>
<ui-icon icon="users" size="massive"></ui-icon>`
    })
  };
</script>