<template>
  <div>
    <h1>Icon</h1>
    <demo-panel>
      <template slot="demo">
        <ui-input v-model="text" type="text" icon-before="search"></ui-input>
        <br>
        {{ text }}
      </template>
      <template slot="code">{{demo}}</template>
    </demo-panel>
    <options-table :options="options"></options-table>
    <p>Pass in all other options as a class <br />
    For a fulll list of icons see the <a target="_blank" href="http://semantic-ui.com/elements/input.html">semantic-ui docs</a></p>
    <p>For custom stuff use the default slot:</p>
    <demo-panel>
      <template slot="demo">
        <ui-input class="right labeled" v-model="text" icon-before="tags" placeholder="Add Tag">
          <ui-label class="tag" @click="addTag()" clickable>Add Tag</ui-label>
        </ui-input>
        <ul>
          <li v-for="tag in tags">{{tag}}</li>
        </ul>
      </template>
      <template slot="code">{{demoOther}}</template>
    </demo-panel>
  </div>
</template>
<script>
  export default {
    name: 'doc-input',
    data: () => ({
      text: '',
      options: [{
        name: 'type',
        type: 'String',
        description: 'Type of the input (text, name, tel, url, email, textarea)'
      }, {
        name: 'placeholder',
        type: 'String',
        description: 'Placeholder'
      }, {
        name: 'value (v-model)',
        type: '[String, Number]',
        description: 'Value of the input'
      }, {
        name: 'maxlength',
        type: 'Number',
        description: 'Input maxlength attribute'
      }, {
        name: 'minlength',
        type: 'Number',
        description: 'Input minlength attribute'
      }, {
        name: 'disabled',
        type: 'Boolean',
        description: 'Input disabled attribute'
      }, {
        name: 'readonly',
        type: 'Boolean',
        description: 'Input readonly attribute'
      }, {
        name: 'icon-before',
        type: 'String',
        description: 'Icon before the text'
      }, {
        name: 'icon-after',
        type: 'String',
        description: 'Icon after the text'
      }],
      demo: `<ui-input v-model="text" type="text" icon-after="search"></ui-input>
<br>
{{ text }}`,
      demoOther: `<ui-input class="right labeled" v-model="text" icon-before="tags">
  <ui-label class="tag" @click="addTag()" clickable>Add Tag</ui-label>
</ui-input>`,
      tags: []
    }),
    methods: {
      addTag() {
        this.tags.push(this.text);
        this.text = '';
      }
    }
  };
</script>