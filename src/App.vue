<template>
  <div id="app">
    <music></music>
    <router-view></router-view>
  </div>
</template>

<script>
import Music from './components/music'

export default {
  name: 'app',
  components: {
    Music
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
  height:100%;
}
body{
  max-width: 750px;
  margin: 0 auto;
  overflow:hidden;
  position: relative;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
  height:100%;
  overflow:hidden;
  position: relative;
}
</style>
