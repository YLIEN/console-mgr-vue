<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './views/User/Login'
import Home from './components/Home'

export default {
  components: {
    Login,
    Home
  }
}
</script>

<style>
#app {
  height: 100%;
  position: relative;
}
</style>
