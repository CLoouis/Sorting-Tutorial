/* eslint-disable */
<template>
  <div>
    <h1>BubbleSort : Enter your numbers here (max 10)</h1>
    <b-form @submit.prevent="addNumber">
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
        type="submit"
        variant="primary"
        :disabled="numbers.length >= 10 || submitted || formData.number === null"
        >
          Add Number
      </b-button>
      <b-button
        type="reset"
        variant="danger"
        @click="reset">
          Reset
      </b-button>
      <b-button
        variant="success"
        :disabled="numbers.length === 0 || submitted"
        @click="sortNumbersAndGetSteps">
          Sort Numbers
      </b-button>
    </b-form>
    <b-container v-if="submitted">
      <p>Bubble sort is a kind of simple sort. It sorts array from the beginning to the end and each iteration.<br> It will iterate
        (n - 1) times no matter what. n = the array length. At each iteration, the algorithm will scan the whole array from the
        beginning to the end, if element &lt; element at the next index, then swap them. Each iteration will also chek n - 1 times.
        At the "optimized" version, each iteration will only loop (n - i - 1) times, because each iteration will make the element at
        (n - i - 1) the smallest element</p>
      <h2>Sorting steps for array : {{ numbers }} : </h2>
      <b-list-group class="align-items-start">
        <b-list-group-item 
          v-for="(step, index) in steps"
          :key="index">
            <h4>{{ index + 1 }}. Swap ({{ step.first }} , {{ step.second }}).</h4>
            <p> At iteration number {{ step.iteration + 1 }}, swap them because {{ step.first }} &lt; {{ step.second }} <br>
              Current Array : {{ step.currentArray }}</p>
        </b-list-group-item>
      <b-list-group-item variant="success">
        <h4>{{ totalNumber }}. Done! The sorted array is {{ sortedNumbers }}</h4>
      </b-list-group-item>
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numbers: [],
      totalNumber: 0,
      sortedNumbers: [],
      submitted: false,
      steps: [],
      formData: {
        number: null
      }
    }
  },
  methods: {
    capitalizeFirst(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
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
    sortNumbersAndGetSteps() {
      this.sortedNumbers = [...this.numbers];
      for (let i = 0 ; i < this.totalNumber - 1 ; i++) {
        for (let j = 0 ; j < this.totalNumber - i - 1 ; j++) {
          if (this.sortedNumbers[j] < this.sortedNumbers[j+1]) {
            let temp = this.sortedNumbers[j]
            this.sortedNumbers[j] = this.sortedNumbers[j + 1]
            this.sortedNumbers[j + 1] = temp
            this.steps.push({
              first  : this.sortedNumbers[j + 1],
              second : this.sortedNumbers[j],
              currentArray : [...this.sortedNumbers],
              iteration : i
            })
          }
        }
      }
      this.submitted = true;
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
