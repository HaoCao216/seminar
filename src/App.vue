<template>
  <div id="app">
    <div class="nav-bar">
      <router-link to="/login">Login</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/admin">Admin</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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

.nav-bar{
  position: fixed;
  top:0px;
}
</style>
