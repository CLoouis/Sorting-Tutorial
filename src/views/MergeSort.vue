<template>
  <div class="MergeSort">
    <Jumbotron :TitlePage="'Merge Sort'" :choice="false" :linkWeb="'https://www.youtube.com/watch?v=JSceec-wEyw'">
      <p>
      Merge Sort adalah salah satu metode pengurutan array dengan memanfaatkan prinsip <i>Divide and Conquer</i>.
      Konsep <i>Divide and Conquer</i> yang dimaksud adalah dengan membagi data S dalam dua kelompok, yaitu S1 dan S2 yang tidak beririsan (<i>disjoint</i>).
      Proses pembagian data dilakukan secara rekursif sampai data tidak dapat dibagi lagi atau dengan kata lain data dalam sub bagian menjadi tunggal.
      <br><br>
      Setelah data tidak dapat dibagi lagi, proses penggabungan (merging) dilakukan antara sub-sub bagian dengan memperhatikan urutan data yang diinginkan (<i>ascending</i> / kecil ke besar
       atau <i>descending</i> / besar ke kecil).
      Proses penggabungan ini dilakukan sampai semua data tergabung dan terurut sesuai urutan yang diiginkan. Kompleksitas dari algoritma Merge Sort adalah O(n log n).
      </p>
    </Jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import Jumbotron from '@/components/Jumbotron.vue'

export default {
  name: 'MergeSort',
  components: {
    Jumbotron
  }
}
</script>
