<template>
  <div class="home">
    <img class="home-image" src="@/assets/images/computer.jpg" alt="Responsive image">
    <div class="header">
      <h1 class="title">Welcome to Sorting Tutorial</h1>

      <h3 class="subtitle">
        Choose what kind of sorting you want to learn, sorting numbers will be done in descending order.<br>
        This application is made using vue.js and some of the algorithm is referenced from geeksforgeeks.com
        , do check them out! Get started by clicking one of those buttons
      </h3>

      <hr class="my-4">
      <b-container horizontal>
        <b-button variant="primary" to="/quicksort">Quick Sort</b-button>
        <b-button variant="success" to="/bubblesort">Bubble Sort</b-button>
      </b-container>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  }
}
</script>
