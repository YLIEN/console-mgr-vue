<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Login from './views/User/Login'
import UserLayouts from './views/UserLayouts/UserLayouts'

export default {
  components: {
    Login,
    UserLayouts
  }
}
</script>


<style>
#app {
  height: 100%;
  position: relative;
}
</style>
