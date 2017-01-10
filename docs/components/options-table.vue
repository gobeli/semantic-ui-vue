<template>
  <div>
    <h2>Options</h2>
    <table class="ui celled striped table">
      <thead>
        <tr>
          <th>Option</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="option in options">
          <td>{{option.name}}</td>
          <td>{{option.type}}</td>
          <td>{{option.description}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  export default {
    name: 'options-table',
    props: {
      options: Array
    }
  };
</script>