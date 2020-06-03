<template>
  <div id="app">
    <Header />
    <QuestionBox />
    <Result />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'
import Result from './components/Result.vue'

export default {
  name: 'App',
  components: {
    Header,
    QuestionBox,
    Result
  },
  data() {
    return {
      array: [],
      results: []
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
