<template>
  <div id="app">
    <hello></hello>
    <hr>
    <miaov></miaov>
  </div>
</template>

<script>
import hello from './components/index'
import miaov from './components/hello'

export default {
  name: 'app',
  components: {
    Hello:hello,
     miaov
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
