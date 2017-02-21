<template>
  <div>
    <h1>Dropdown</h1>
    <demo-panel>
      <template slot="demo">
        <ui-dropdown name="car" title="Car" selection>
          <div class="item" data-value="audi">Audi</div>
          <div class="item" data-value="saab">Saab</div>
          <div class="item" data-value="vw">VW</div>
        </ui-dropdown>
      </template>
      <template slot="code"></template>
    </demo-panel>
    <options-table></options-table>
    <p>Pass in all other <a target="_blank" href="http://semantic-ui.com/modules/checkbox.html">options</a> as a class.</p>
  </div>
</template>
<script>
  export default {
    name: 'doc-dropdown',
    data: () => ({})
  };
</script>