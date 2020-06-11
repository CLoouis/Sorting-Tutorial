<template>
  <div class="MergeSort">
    <Jumbotron :TitlePage="'Merge Sort'" :choice="false" :linkWeb="'https://www.youtube.com/watch?v=JSceec-wEyw'">
      <p>
      Merge Sort adalah salah satu metode pengurutan array dengan memanfaatkan prinsip <i>Divide and Conquer</i>.
      Konsep <i>Divide and Conquer</i> yang dimaksud membagi data S dalam dua kelompok, yaitu S1 dan S2 yang tidak beririsan (disjoint).
      Proses pembagian data dilakukan secara rekursif sampai data tidak dapat dibagi lagi atau dengan kata lain data dalam sub bagian menjadi tunggal.
      <br><br>
      Setelah data tidak dapat dibagi lagi, proses penggabungan (merging) dilakukan antara sub-sub bagian dengan memperhatikan urutan data yang diinginkan (ascending/kecil ke besar atau descending/besar ke kecil).
      Proses penggabungan ini dilakukan sampai semua data tergabung dan terurut sesuai urutan yang diiginkan. Kompleksitas algoritma merge sort adalah O(n log n).
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
  name: 'MergeSort',
  components: {
    Jumbotron,
    Result
  }
}
</script>
