<template>
  <!-- Main Menu / Home HTML Page -->
  <div class="home">
    <div>
    <b-jumbotron bg-variant="light">
      <template v-slot:header>Sorting Tutorial</template>
      <template v-slot:lead>
        Sorting Tutorial akan membantu Anda dalam mempelajari algoritma pengurutan.<br>
        Terdapat dua buah algoritma pengurutan yang tersedia, yaitu Bubble Sort dan Merge Sort.
      </template>
      <hr class="my-4">
      <p>Pilih salah satu algoritma di bawah ini yang ingin ditutorialkan! </p>
      <b-button size="lg" variant="primary" href="/BubbleSort" style="margin-right : 20px; margin-bottom : 20px;">Bubble Sort</b-button>
      <b-button size="lg" variant="danger" href="/MergeSort" style="margin-left : 20px; margin-bottom : 20px;">Merge Sort</b-button><br><br>
      <p><label id="credits">Created by: Michael Hans / 13518056</label></p>
    </b-jumbotron>
    </div>
  </div>
</template>

<script>
// Home.vue
// Represent the Home HTML Page
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  margin-top: 130px;
}

#credits {
  font-size: 15px;
  font-style: italic;
}
</style>
