<template>
  <div class="Title">
    <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Sorting Visualizer</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/BubbleSort">Bubble Sort</b-nav-item>
          <b-nav-item href="/MergeSort">Merge Sort</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
    <br>
    <h1>{{ msg }}</h1>
    
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
