<template>
  <!-- Result Component HTML for Algorithm Page -->
  <b-container>

  <!-- If the prerequisites attributes meet the requirement -->
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

  <!-- If the length of the charArray exceed 10 -->
  <div v-else-if="this.charArray.length > 10">
    <b-alert show variant="danger"><b>Banyak angka yang dimasukkan lebih dari 10.</b></b-alert>
  </div>

  <!-- Everything else, the input is not valid -->
  <div v-else>
    <b-alert show variant="danger"><b>Input tidak valid, harap masukkan input dengan format yang sesuai</b></b-alert>
  </div>
  </b-container>
</template>

<script>
// Result.vue
// Display Bubble Sort or Merge Sort tutorial into the homepage
// Integrated with backend algorithm: BubbleSort.js and MergeSort.js
import BS from '../algorithm/BubbleSort.js'
import MS from '../algorithm/MergeSort.js'

export default {
  // Require array of numeric characters and algorithm choice
  props: {
    charArray: Array,
    choice: Boolean
  },
  // Store all steps and validity to show the sorting steps
  data: function () {
    return {
      currentStep: [],
      validity: true
    }
  },
  // Contain all methods for sorting the array and display it
  methods: {
    // Process the charArray into sorting steps
    sorting (choice) {
      if (choice) {
        this.currentStep = BS.bubbleSort(this.charArray)
      } else {
        this.currentStep = MS.MainMergeSort(this.charArray)
      }
      this.checkValidity()
    },
    // Check the charArray and currentStep if they against the displaying's rules
    // The displaying's rules is the charArray must have length <= 10 and not contain NaN
    checkValidity () {
      this.validity = (this.currentStep.length !== 0) && (this.charArray.length <= 10)
    }
  },
  // Before displaying the result, process the charArray first based on the choice
  mounted () {
    this.sorting(this.choice)
  },
  // Continous displaying when the user change the value of the charArray from InputArea component
  watch: {
    charArray: function () {
      this.sorting(this.choice)
    }
  }
}
</script>
