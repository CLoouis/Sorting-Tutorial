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
#home {
  margin-left: 30px;
  margin-bottom: 100px;
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
#title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 20px;
  color: white;
}
</style>
