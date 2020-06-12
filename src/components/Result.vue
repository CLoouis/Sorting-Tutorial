<template>
  <b-container>
  <div v-if="this.validity === true">
    <b-alert show variant="success"><b>Pengurutan berhasil dilakukan!</b></b-alert>
    <div>
      <b-card-group deck>
        <b-card
          header="Angka yang dimasukkan"
          header-tag="header"
        >
          <b-card-text>{{this.currentStep[0].Array}}</b-card-text>
        </b-card>
        <b-card
          header="Hasil pengurutan"
          header-tag="header"
        >
          <b-card-text>{{this.currentStep[this.currentStep.length - 1].Array}}</b-card-text>
        </b-card>
      </b-card-group>
    </div>
    <b-table striped hover :items="currentStep" style="white-space:pre-wrap; word-wrap:break-word"></b-table>
  </div>
  <div v-else-if="this.charArray.length > 10">
    <b-alert show variant="danger"><b>Banyak angka yang dimasukkan lebih dari 10.</b></b-alert>
  </div>
  <div v-else>
    <b-alert show variant="danger"><b>Input tidak valid, harap masukkan input dengan format yang sesuai</b></b-alert>
  </div>
  </b-container>
</template>

<script>
import BS from '../algorithm/BubbleSort.js'
import MS from '../algorithm/MergeSort.js'

export default {
  props: {
    charArray: Array,
    choice: Boolean
  },
  data: function () {
    return {
      currentStep: [],
      validity: true
    }
  },
  methods: {
    sorting (choice) {
      if (choice) {
        this.currentStep = BS.bubbleSort(this.charArray)
      } else {
        this.currentStep = MS.MainMergeSort(this.charArray)
      }
      this.checkValidity()
    },
    checkValidity () {
      this.validity = (this.currentStep.length !== 0) && (this.charArray.length <= 10)
    }
  },
  mounted () {
    this.sorting(this.choice)
  },
  watch: {
    charArray: function () {
      this.sorting(this.choice)
    }
  }
}
</script>
