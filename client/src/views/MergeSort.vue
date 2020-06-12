<template>
  <!-- MergeSort HTML Page -->
  <div class="MergeSort">
    <!-- Passing titlePage, algorithm choice, video link, and slot description into the jumbotron component -->
    <Jumbotron :TitlePage="'Merge Sort'" :choice="false" :linkWeb="'https://www.youtube.com/watch?v=JSceec-wEyw'">
      <p>
      Merge Sort adalah salah satu metode pengurutan array dengan memanfaatkan prinsip <i>Divide and Conquer</i>.
      Konsep <i>Divide and Conquer</i> yang dimaksud adalah dengan membagi data S dalam dua kelompok, yaitu S1 dan S2 yang tidak beririsan (<i>disjoint</i>).
      Proses pembagian data dilakukan secara rekursif sampai data tidak dapat dibagi lagi atau dengan kata lain data dalam sub bagian menjadi tunggal.
      <br><br>
      Setelah data tidak dapat dibagi lagi, proses penggabungan (<i>merging</i>) dilakukan antara sub-sub bagian dengan memperhatikan urutan data yang diinginkan (<i>ascending</i> / kecil ke besar
       atau <i>descending</i> / besar ke kecil).
      Proses penggabungan ini dilakukan sampai semua data tergabung dan terurut sesuai urutan yang diiginkan. Kompleksitas dari algoritma Merge Sort adalah O(n log n).
      </p>
    </Jumbotron>
  </div>
</template>

<script>
// MergeSort.vue
// Represent the page of the Merge Sort section
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'MergeSort',
  // Contain Jumbotron component
  components: {
    Jumbotron
  }
}
</script>
