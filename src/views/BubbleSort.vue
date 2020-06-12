<template>
  <!-- MergeSort HTML Page -->
  <div class="BubbleSort">
    <!-- Passing titlePage, algorithm choice, video link, and slot description into the jumbotron component -->
    <Jumbotron :TitlePage="'Bubble Sort'" :choice="true" :linkWeb="'https://www.youtube.com/watch?v=nmhjrI-aW5o'">
      <p>
      Bubble Sort adalah salah satu algoritma pengurutan array yang memiliki prinsip paling naif dan <i>straightforward</i>.
      Cara kerja dari algoritma Bubble Sort cukup sederhana, yaitu membandingkan satu elemen dengan elemen berikutnya
      mulai dari elemen pertama hingga elemen terakhir. <br><br>
      Perbandingan yang dilakukan tergantung pada keterurutan yang diinginkan. Apabila array yang diinginkan terurut menaik,
       maka pertukaran posisi dilakukan pada perbandingan satu elemen dengan nilai yang lebih besar dari elemen berikutnya.
      Karena setiap elemen akan dibandingkan dengan elemen berikutnya, maka kompleksitas algoritma dari Bubble Sort adalah O(n<sup>2</sup>).
      </p>
    </Jumbotron>
  </div>
</template>

<script>
// BubbleSort.vue
// Represent the page of the Bubble Sort section
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'BubbleSort',
  components: {
    Jumbotron
  }
}
</script>
