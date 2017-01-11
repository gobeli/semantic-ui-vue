<template>
  <div>
    <h1>Button</h1>
    <demo-panel>
      <template slot="demo">
        <ui-button>Follow</ui-button>
        <ui-button class="primary">Primary</ui-button>
        <ui-button class="red" icon-before="alarm">Red with icon before</ui-button>
        <ui-button class="blue" icon-after="save">Blue with icon after</ui-button>
        <ui-button icon-before="play"></ui-button>
      </template>
      <template slot="code">{{buttonDemo}}</template>
    </demo-panel>
    <ui-divider></ui-divider>
    <options-table :options="options"></options-table>
    <p>Pass in all other <a target="_blank" href="http://semantic-ui.com/elements/button.html">options</a> as a class. <br>
    For instance a labeled button: </p>
    <demo-panel>
      <template slot="demo">
        <ui-button class="facebook right labeled" icon-after="facebook">Follow</ui-button>
      </template>
      <template slot="code">&lt;ui-button class=&quot;facebook right labeled&quot; icon-after=&quot;facebook&quot;&gt;Follow&lt;/ui-button&gt;</template>
    </demo-panel>
    
    <ui-divider></ui-divider>
    <h1>Buttons</h1>
    <demo-panel>
      <div slot="demo">
        <ui-buttons v-model="buttons" highlight-selected>
          <ui-button name="button-1" class="primary">1</ui-button>
          <ui-button name="button-2" class="primary">2</ui-button>
          <ui-button name="button-3" class="primary">3</ui-button>
        </ui-buttons>
      </div>
      <template slot="code">{{buttonsDemo}}</template>
    </demo-panel>
    <options-table :options="buttonsOptions"></options-table>
  </div>
</template>
<script>
  export default {
    name: 'doc-button',
    data() {
      return {
        buttons: 0,
        options: [{
          name: 'disabled',
          type: 'Boolean',
          description: 'If set, the button is displayed as disabled'
        }, {
          name: 'icon-before',
          type: 'String',
          description: 'Icon before the text'
        }, {
          name: 'icon-after',
          type: 'String',
          description: 'Icon after the text'
        }],
        buttonsOptions: [{
          name: 'value (v-model)',
          type: '[String, Number]',
          description: 'Value of the button-group (contains name/_uid of the selected button)'
        }, {
          name: 'highlight-selected',
          type: 'Boolean',
          description: 'If set, the selected button will be highlighted'
        }],
        buttonDemo:
`<ui-button>Follow</ui-button>
<ui-button class="primary">Primary</ui-button>
<ui-button class="red" icon-before="alarm">Red with icon before</ui-button>
<ui-button class="blue" icon-after="save">Blue with icon after</ui-button>
<ui-button icon-before="play"></ui-button>`,
        buttonsDemo:
`<ui-buttons v-model="buttons" highlight-selected>
  <ui-button name="button-1" class="primary">1</ui-button>
  <ui-button name="button-2" class="primary">2</ui-button>
  <ui-button name="button-3" class="primary">3</ui-button>
</ui-buttons>`
      };
    }
  };
</script>
