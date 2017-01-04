<template>
  <div>
    <h1>Button</h1>
    <demo-panel>
      <div slot="demo">
        <ui-button>Follow</ui-button>
        <ui-button class="primary">Primary</ui-button>
        <ui-button class="red" icon-before="alarm">Red with icon before</ui-button>
        <ui-button class="blue" icon-after="save">Blue with icon after</ui-button>
        <ui-button icon-before="play"></ui-button>
      </div>
      <pre slot="code">&lt;ui-button&gt;Follow&lt;/ui-button&gt;
&lt;ui-button class=&quot;primary&quot;&gt;Primary&lt;/ui-button&gt;
&lt;ui-button class=&quot;red&quot; icon-before=&quot;alarm&quot;&gt;Red with icon before&lt;/ui-button&gt;
&lt;ui-button class=&quot;blue &quot;icon-after=&quot;save&quot;&gt;Blue with icon after&lt;/ui-button&gt;
&lt;ui-button icon-before=&quot;play&quot;&gt;&lt;/ui-button&gt;</pre>
    </demo-panel>
    <ui-divider></ui-divider>
    <h2>Options</h2>
    <options-table :options="options"></options-table>
    <p>Pass in all other option as a class. <br>
    For instance a labeled button: </p>
    <demo-panel>
      <div slot="demo">
        <ui-button class="facebook right labeled" icon-after="facebook">Follow</ui-button>
      </div>
      <pre slot="code">&lt;ui-button class=&quot;facebook right labeled&quot; icon-after=&quot;facebook&quot;&gt;Follow&lt;/ui-button&gt;</pre>
    </demo-panel>
    
    <ui-divider></ui-divider>
    <h1>Button</h1>
    <h2>Demo</h2>
    
  </div>
</template>
<script>
  export default {
    name: 'doc-button',
    data() {
      return {
        options: [{
          name: 'name',
          type: '[String, Number]',
          description: 'Name of the button'
        }, {
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
        }]
      };
    }
  };
</script>
