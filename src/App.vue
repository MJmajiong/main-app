<template>
  <div id="main-app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view>
    </router-view>
    <div id="vue-app"></div>
    <!-- <router-view /> -->
  </div>
</template>

<style lang="less">
#main-app {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  width: 200px;
  background: red;
  height: 100vh;
  // padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#vue-app{
  height: 100vh;
  flex-grow: 1;
  background: blue;
}
</style>
