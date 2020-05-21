<template>
  <div class="home">
    <b-jumbotron bg-variant="info">
      <template v-slot:header>Welcome to Sorting Tutorial</template>

      <template v-slot:lead>
        Choose what kind of sorting you want to do, sorting numbers will be done in descending order
      </template>

      <hr class="my-4">

      <b-button variant="primary" to="/quicksort">Quick Sort</b-button>
      <b-button variant="success" to="/bubblesort">Bubble Sort</b-button>
    </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  }
}
</script>
