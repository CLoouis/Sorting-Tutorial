<template>
  <div id="app">
    <b-navbar  toggleable="lg" type="dark" variant="success" >
      <b-navbar-brand to="/">Sort Tutorial</b-navbar-brand>
      <b-navbar-nav>
        <b-nav-item to="/quicksort">Quicksort</b-nav-item>
        <b-nav-item to="/bubblesort">Bubblesort</b-nav-item>
      </b-navbar-nav>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
