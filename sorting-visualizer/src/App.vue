<template>
  <div id="app">
    <HelloWorld msg="Bubble Sort Visualizer App"/>
    <InputForm />
    <Result />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import InputForm from './components/InputForm.vue'
  import Result from './components/Result.vue'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      InputForm,
      Result
    }
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
