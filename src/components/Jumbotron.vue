<template>
  <div id='main'>
  <b-container>
  <b-jumbotron bg-variant="light">
    <template v-slot:header>{{TitlePage}}</template>
    <template v-slot:lead>
      <b-container>
        <slot>
            Sorting Tutorial akan membantu Anda dalam mempelajari algoritma pengurutan.<br>
            Terdapat dua buah tutorial yang akan dijelaskan, yaitu Bubble Sort dan Merge Sort.
        </slot>
      </b-container>
    </template>
    <hr class="my-4">
    <p>Untuk melihat visualisasi algoritma ini, Anda dapat menekan tombol di bawah ini.</p>
    <a v-bind:href="this.linkWeb"><b-button variant="primary" style="margin-bottom : 20px;">Lihat Video!</b-button></a>
    <br>
    <InputArea :algorithmChoice="this.choice"/>
    <p><label id="credits">Created by: Michael Hans / 13518056</label></p>
  </b-jumbotron>
  </b-container>
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

<style scoped>
.btn-primary, .btn-primary:hover, .btn-primary:active, .btn-primary:visited {
  background-color: rgb(66, 3, 214) !important;
}

#credits {
  font-size: 13px;
  font-style: italic;
}

</style>
