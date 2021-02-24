<template>
  <div class="page-title">
    <h3>Home Page. Options API.</h3>
  </div>
  <h4>vue3, vue-router, vuex, vuelidate, css(https://materializecss.com/)</h4>
  <pre>{{ info }}</pre>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      info: ''
    }
  },
  mounted() {
    var json = require('../../package.json')
    this.info = json.dependencies
  }
}
</script>
