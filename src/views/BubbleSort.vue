/* eslint-disable */
<template>
  <div>
    <SortingPage 
      :algorithmDescription="algorithmDescription"
      :complexity="complexity"
      :steps="steps"
      title="BubbleSort"
      :sortedNumbers="sortedNumbers"
      v-on:numberSubmitted="sortNumbersAndGetSteps"
    />
  </div>
</template>

<script>
import SortingPage from '@/components/SortingPage.vue'

export default {
  components: {
    SortingPage
  },
  data() {
    return {
      sortedNumbers: [],
      steps: [],
      algorithmDescription: "Bubble sort is a kind of brute force algorithm. It sorts array from \
      the beginning to the end for each iteration.<br> There will be double loop and at the first \
      loop, it will iterate (n - 1) times no matter what. n = the array length. At each iteration,\
      the algorithm will scan the whole array from the beginning to the end, if element &lt; element\
      at the next index, then swap them. Each iteration will also chek n - 1 times. At the &quot;optimized&quot;\
      version, each iteration will only loop (n - i - 1) times, because each iteration will make the element at\
      (n - i - 1) the smallest element",
      complexity: "O(n<sup>2</sup>)"
    }
  },
  methods: {
    sortNumbersAndGetSteps(numbers) {
      let totalNumber = numbers.length
      this.sortedNumbers = [...numbers];
      for (let i = 0 ; i < totalNumber - 1 ; i++) {
        for (let j = 0 ; j < totalNumber - i - 1 ; j++) {
          if (this.sortedNumbers[j] < this.sortedNumbers[j+1]) {
            let temp = this.sortedNumbers[j]
            this.sortedNumbers[j] = this.sortedNumbers[j + 1]
            this.sortedNumbers[j + 1] = temp
            this.steps.push({
              title: `Swap (${ this.sortedNumbers[j + 1] } , ${ this.sortedNumbers[j] }).`,
              description: `At iteration - ${ i + 1 }, swap them because ${ this.sortedNumbers[j + 1] } &lt; ${ this.sortedNumbers[j] } <br>
              Current Array : [${ [...this.sortedNumbers] }]`
            })
            /*<h4>{{ index + 1 }}. Swap ({{ step.first }} , {{ step.second }}).</h4>
            <p > At iteration - {{ step.iteration + 1 }}, swap them because {{ step.first }} &lt; {{ step.second }} <br>
              Current Array : {{ step.currentArray }}</p>*/
          }
        }
      }
    }
  }
}
</script>
