<template>
  <div class="BubbleSort">
    <Jumbotron :TitlePage="'Bubble Sort'" :choice="true" :linkWeb="'https://www.youtube.com/watch?v=nmhjrI-aW5o'">
      <p>
      Bubble Sort adalah salah satu algoritma pengurutan array yang memiliki prinsip paling naive.
      Cara kerja dari algoritma Bubble Sort cukup sederhana, yaitu membandingkan elemen satu per satu mulai dari elemen awal
      hingga elemen akhir. <br><br>
      Perbandingan yang dilakukan tergantung pada keterurutan yang diinginkan. Dalam kasus array ingin disusun
      terurut menaik, setiap kali nilai suatu elemen lebih besar dari elemen sebelahnya, maka dilakukan pertukaran.
      Kompleksitas algoritma Bubble Sort adalah O(n^2).
      </p>
    </Jumbotron>
    <Result />
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'
import Result from '@/components/Result.vue'

export default {
  name: 'BubbleSort',
  components: {
    Jumbotron,
    Result
  }
}
</script>
