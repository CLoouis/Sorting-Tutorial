/* eslint-disable */
<template>
  <div>
    <h1>{{ title }} : Enter your numbers here (max 10)</h1>
    <b-form @submit.prevent="submitNumbers">
      <b-form-group id="input-group-2" :label='getTotalNumberLabel()' label-for="input-2">
        <b-form-input
          id="numberInput"
          v-model="formData.number"
          type="number"
          required
          placeholder="Enter number"
        ></b-form-input>
      </b-form-group>
      <b-button
        variant="primary"
        :disabled="numbers.length >= 10 || submitted || formData.number === null"
        @click="addNumber">
          Add Number
      </b-button>
      <b-button
        type="reset"
        variant="danger"
        @click="reset">
          Reset
      </b-button>
      <b-button
        type="submit"
        variant="success"
        :disabled="numbers.length === 0 || submitted">
          Sort Numbers
      </b-button>
    </b-form>
    <b-container v-if="submitted">
      <p>Quick sort is a kind of divide and conquer algorithm. It sorts array by choosing a pivot, <br>
        that is an element of the array, then make every higher element on the left side of the pivot,
        and the smaller element on the right side of the pivot. Then the function calls itself to sort
        the left part and the right part of the pivot, so the reccursion is done twice, until there are
        only one element, then it returns the element. <br>
        There are a lot of choice for choosing the pivot, and for sorting the left and right side of
        the pivot. At this tutorial, we will choose the pivot as the first element. If there is only one
        element left, the function will stop
      </p>
      <h2>Sorting steps for array : {{ numbers }} : </h2>
      <b-list-group>
        <b-list-group-item
          v-for="(step, index) in steps"
          :key="index">
            <h4>{{ index + 1 }}. step.title</h4>
            <p >step.text</p>
        </b-list-group-item>
      <b-list-group-item variant="success">
        <h4>{{ steps.length + 1 }}. Done!</h4>
        <p> The sorted array is {{ sortedNumbers }}</p>
      </b-list-group-item>
      <br>
      </b-list-group>
      <h4>Complexity : 
        <span v-html="complexity"></span></h4>
      <p>You can hit the 
        <b-button @click="reset" variant="danger">Reset</b-button> 
        button to start the input process again</p>
    </b-container>
  </div>
</template>

<script>
export default {
  props: {
    complexity: String,
    steps: Array,
    title: String,
    sortedNumbers: Array
  },
  watch: {
    sortedNumbers() {
      this.submitted = true;
    }
  },
  data() {
    return {
      numbers: [],
      totalNumber: 0,
      submitted: false,
      formData: {
        number: null
      }
    }
  },
  methods: {
    addNumber() {
      const number = this.formData.number
      this.numbers.push(parseInt(number))
      this.totalNumber++
      this.formData.number = null
    },
    getTotalNumberLabel() {
      let text = 'Insert Number - ' + (this.totalNumber + 1)
      if (this.totalNumber === 10) {
        text = 'Number Array Full'
      }
      return text
    },
    reset() {
      this.numbers = []
      this.totalNumber = 0
      this.formData.number = null
      this.submitted = false
    },
    submitNumbers() {
      this.$emit('numberSubmitted', this.numbers)
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
