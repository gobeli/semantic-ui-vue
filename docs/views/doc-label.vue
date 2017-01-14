<template>
  <div>
    <h1>Icon</h1>
    <demo-panel>
      <template slot="demo">
        <ui-label size="massive" icon-before="mail">23</ui-label>
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>Pass in all other options as a class <br />
    For a fulll list of icons see the <a target="_blank" href="http://semantic-ui.com/elements/label.html">semantic-ui docs</a></p>
    <p>Besides the main slot there is also a Detail slot:</p>
    <demo-panel>
      <template slot="demo">
        <ui-label size="large" class="teal">
          Veronika
          <template slot="detail">Student</template>
        </ui-label>
      </template>
      <template slot="code">{{demoOther}}</template>
    </demo-panel>
  </div>
</template>
<script>
  export default {
    name: 'doc-label',
    data: () => ({
      options: [{
        name: 'imgSrc',
        type: 'String',
        description: 'A label can be formatted to emphasize an image, with the source of this parameter'
      }, {
        name: 'icon-before',
        type: 'String',
        description: 'Icon before the text'
      }, {
        name: 'icon-after',
        type: 'String',
        description: 'Icon after the text'
      }, {
        name: 'clickable',
        type: 'Boolean',
        description: 'True if you want the label to be clickable like a button'
      }, {
        name: 'size',
        type: 'string',
        description: 'Size of the icon (mini, tiny, small, large, big, huge or massive)'
      }],
      demo: `<ui-label size="massive" icon-before="mail">23</ui-label>`,
      demoOther:
        `<ui-label size="large" class="teal">
  Veronika
  <template slot="detail">Student</template>
</ui-label>`
    })
  };
</script>