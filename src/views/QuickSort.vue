<template>
  <div>
    <SortingPage 
      :algorithmDescription="algorithmDescription"
      :complexity="complexity"
      :steps="steps"
      title="Quicksort"
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
      algorithmDescription: "Quick sort is a kind of divide and conquer algorithm. It \
      sorts array by choosing a pivot, <br>that is an element of the array, then make \
      every higher element on the left side of the pivot,and the smaller element on the\
      right side of the pivot. Then the function calls itself to sort the left part and \
      the right part of the pivot, so the reccursion is done twice, until there are \
      only one element, then it returns the element. <br> There are a lot of choice for \
      choosing the pivot, and for sorting the left and right side of the pivot. At this \
      tutorial, we will choose the pivot as the first element. If there is only one \
      element left, the function will stop",
      complexity: "Worst : O(n<sup>2</sup>)<br> Average : O(n log n)"
    }
  },
  methods: {
    sortNumbersAndGetSteps(numbers) {
      this.steps = []
      this.sortedNumbers = [...numbers]
      this.quickSort(0, numbers.length - 1);
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
      let pivotElmt = this.sortedNumbers[pivot]
      let currentArray = [...this.sortedNumbers]
      this.steps.push({
        title: `Pivot = ${ pivotElmt }`,
        description: `Choose element at index (${ low }) ${ pivotElmt } as the pivot, then put all elements
              higher than ${ pivotElmt } to the left side, and smaller than ${ pivotElmt } to the right
              side. Then we will split the array for each side, and do the algorithm again if possible<br>
              Left Side : [${ currentArray.slice(low, pivot) }] <br>
              Right Side : [${ currentArray.slice(pivot + 1, high + 1) }] <br>
              Current Array : [${ currentArray }]`
      })

      this.quickSort(low, pivot - 1)
      this.quickSort(pivot + 1, high)
    }
  }
}
</script>
