<template>
  <!-- App HTML Page -->
  <div id="app">
    <!-- Navigation Bar and Router -->
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
        <b-navbar-brand><router-link to="/"><font color='white'>Sorting Tutorial</font></router-link></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Left aligned nav items -->
          <b-navbar-nav>
            <b-nav-item href="/BubbleSort"><router-link to="/BubbleSort"><font color='white'>Bubble Sort</font></router-link></b-nav-item>
            <b-nav-item href="/MergeSort"><router-link to="/MergeSort"><font color='white'>Merge Sort</font></router-link></b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav>
              <b-nav-item href="https://michaelh-shadow.blogspot.com"><font color='white'>My Blog</font></b-nav-item>
              <b-nav-item href="https://www.youtube.com/channel/UCLicKfZe0FUX5juZV2PFYjw?"><font color='white'>YouTube</font></b-nav-item>
            </b-navbar-nav>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
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

body {
  background-image: url('assets/itb_theme.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100% 100%;
}

</style>
