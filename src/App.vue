<template>
  <div id="app">
    <h1>SORTING TUTORIALS</h1>
    <b-tabs card>
      <b-tab title="Bubble Sort" active>
        <BubbleSort />
      </b-tab>
      <b-tab title="Merge Sort">
        <MergeSort />
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import MergeSort from './components/MergeSort.vue'
import BubbleSort from './components/BubbleSort.vue'

export default {
  name: 'App',
  components: {
    BubbleSort,
    MergeSort
  }
}
</script>

<style>

text {
  fill: black;
  font: 20px sans-serif;
  text-anchor: middle;
}

#app {
  width: 100%;
  text-align: center;
  padding-top: 10px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.input {
  margin: 10px auto;
  max-width:20rem;
}

span {
  border: solid 1px;
  margin: 10px;
  padding: 0 10px;
  border-radius: 10px;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>
