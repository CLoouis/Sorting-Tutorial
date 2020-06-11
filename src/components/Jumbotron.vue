<template>
  <div>
  <b-jumbotron>
    <template v-slot:header>{{TitlePage}}</template>
    <template v-slot:lead>
      <slot>
      Sorting Tutorial akan membantu Anda dalam mempelajari algoritma pengurutan.<br>
      Terdapat dua buah tutorial yang akan dijelaskan, yaitu Bubble Sort dan Merge Sort.
      </slot>
    </template>
    <hr class="my-4">
    <p>Untuk melihat visualisasi algoritma ini, Anda dapat menekan tombol di bawah ini.</p>
    <a v-bind:href="this.linkWeb"><b-button variant="primary" style="margin-bottom : 20px;">Lihat Video!</b-button></a>
    <InputArea :algorithmChoice="this.choice"/>
  </b-jumbotron>
  </div>
</template>

<script>
import InputArea from './InputArea.vue'

export default {
  props: {
    TitlePage: String,
    choice: Boolean,
    linkWeb: String
  },
  name: 'QB',
  components: {
    InputArea
  }
}
</script>
