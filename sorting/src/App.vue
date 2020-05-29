<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
#about {
  margin-left: 25px;
}
#app {
  font-family: Font Awesome 5 Brands;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  text-align: left;
  background-color: #412dd4;

  a {
    color: white;

    &.router-link-exact-active {
      font-weight: 600;
    }
  }
}
</style>
