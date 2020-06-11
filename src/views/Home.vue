<template>
  <div class="home">
    <Jumbotron :TitlePage='"Sorting Tutorial"'/>
    <Result />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'Home',
  components: {
    Jumbotron,
    Result
  }
}
</script>
