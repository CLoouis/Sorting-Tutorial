/* eslint-disable */
<template>
  <div>
    <h1>Quicksort : Enter your numbers here (max 10)</h1>
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
            <h4>{{ index + 1 }}. Pivot = {{ step.pivotElmt }}</h4>
            <p > Choose element at index {{ step.low }} ({{ step.pivotElmt }}) as the pivot, then put all elements
              higher than {{ step.pivotElmt }} to the left side, and smaller than {{ step.pivotElmt }} to the right
              side. Then we will split the array for each side, and do the algorithm again if possible<br>
              <p v-if="step.currentArray.slice(step.low, step.pivotIdx)">
              Left Side : {{ step.left }} <br>
              Right Side : {{ step.right }} <br>
              Current Array : {{ step.currentArray }}</p>
        </b-list-group-item>
      <b-list-group-item variant="success">
        <h4>{{ steps.length + 1 }}. Done!</h4>
        <p> The sorted array is {{ sortedNumbers }}</p>
      </b-list-group-item>
      <br>
      </b-list-group>
      <h4>Complexity : 
        Worst : O(n<sup>2</sup>)<br>
        Average : O(n log n)</h4>
      <p>You can hit the 
        <b-button @click="reset" variant="danger">Reset</b-button> 
        button to start the input process again</p>
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
      this.sortedNumbers = [...this.numbers]
      this.quickSort(0, this.totalNumber - 1);
      this.submitted = true
    },
    partition(low, high) {
      let arr = this.sortedNumbers;
      let pivot = arr[low];
      let i = high;
      
      for(let j = high; j >= low + 1 ; j--) {
        if(arr[j] < pivot) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          i--;
        }
      }

      arr[low] = arr[i];
      arr[i] = pivot;
      return i;
    },
    quickSort(low, high) {
      if(low >= high) {
        return;
      }
      
      let pivot = this.partition(low, high)
      this.steps.push({
        pivotElmt: this.sortedNumbers[pivot],
        pivotIdx: pivot,
        low,
        high,
        currentArray: [...this.sortedNumbers],
        get left() { return this.currentArray.slice(this.low, this.pivotIdx) },
        get right() { return this.currentArray.slice(this.pivotIdx + 1, this.high + 1) }
      })
      this.quickSort(low, pivot - 1)
      this.quickSort(pivot + 1, high)
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
