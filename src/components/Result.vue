<template>
  <b-container>
  <div>
    <b-table striped hover :items="currentStep" style="white-space:pre-wrap; word-wrap:break-word"></b-table>
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
      currentStep: []
    }
  },
  methods: {
    sorting (choice) {
      if (choice) {
        this.currentStep = BS.bubbleSort(this.charArray)
      } else {
        this.currentStep = MS.MainMergeSort(this.charArray)
      }
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
