<template>
  <div class="section section-tabs">
    <div class="container">
      <div class="title">
        <h4>SORTING ALGORITHMS</h4>
      </div>
      <div class="row">
          <card>
            <tabs
              centered
              slot="raw-content"
              type="neutral"
              tab-nav-wrapper-classes="card-header"
              tab-content-classes="tab-content-padding text-center"
              data-background-color="orange"
            >
              <tab-pane>
                <template slot="label">Bubble Sort
                </template>
                <h4>What is it?</h4>
                <p>
                   Bubble Sort is a simple <b>brute-force</b> sorting algorithm that repeatedly steps 
                   through the list, compares adjacent elements and swaps them if 
                   they are in the wrong order. The pass through the list is repeated 
                   until the list is sorted. The algorithm, which is a comparison sort, 
                   is named for the way smaller or larger elements "bubble" to the top of the list.
                   This simple algorithm performs poorly in real world use and is used 
                   primarily as an educational tool.
                   <br><br>
                   Bubble sort has a worst-case and average complexity of О(n<sup>2</sup>), 
                   where n is the number of items being sorted. Most practical 
                   sorting algorithms have substantially better worst-case or average
                   complexity. Therefore, bubble sort is not a practical sorting algorithm. 
                </p>
                <div class="space-50"></div>

                <h4>Let's Try It Out!</h4>
                    <div class = "mx-auto" style="width: 600px">
                      <fg-input id="form-bubble-sort" v-model="numbers" placeholder="Input numbers here separated by comma (Ex. 10,-1,2)"  :style="{height: '40px'}"></fg-input>
                    </div>
                    <n-button type="primary" round @click="() => submitInput('bubble')">SORT  NOW !</n-button>

              </tab-pane>
              <tab-pane>
                <template slot="label">Merge Sort</template>
                <h4>What is it?</h4>
                <p>
                  Merge sort is an efficient, general-purpose, comparison-based sorting algorithm. 
                  Most implementations produce a stable sort, which means that the order of equal 
                  elements is the same in the input and output. Merge sort is a <b>divide and conquer 
                  algorithm</b> that was invented by John von Neumann in 1945. Merge sort's worst case 
                  complexity is O(n log n)
                  <br>
                  <br>
                  <b>Conceptually, a merge sort works as follows:</b><br>
                  1. Divide the unsorted list into n sublists, each containing one element.<br>
                  2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. 
                  
                </p>
                <div class="space-50"></div>


                <h4>Let's Try It Out!</h4>
                <div class = "mx-auto" style="width: 600px">
                  <fg-input id="form-merge-sort" v-model="numbers" placeholder="Input numbers here separated by comma (Ex. 10,-1,2)"  :style="{height: '40px'}"></fg-input>
                </div>
                <n-button type="primary" @click.native="() => submitInput('merge')"  round>SORT  NOW !</n-button>
              </tab-pane>
            </tabs>
          </card>
        </div>
      </div>
    </div>
</template>
<script>
import { Card, Tabs, TabPane, FormGroupInput, Button } from '@/components'
import axios from 'axios'

export default {
  components: {
    Card,
    Tabs,
    TabPane,
    [FormGroupInput.name]: FormGroupInput,
    [Button.name]: Button
  },
  data(){
    return{
      numbers: '',
    }
  },
  methods: {
    submitInput(method){
        let filtered = this.numbers.split(',').map(e => parseInt(e))
        let data = {
          'array': filtered,
          'asc': true,
          'method': method
        }
        axios
        .post('/sort', {
          ...data
        })
        .then(res => {
          this.$store.commit("changeResult", res.data.res)
        })
      
    }
  }
};
</script>
<style>
.tab-content.tab-content-padding {
  padding: 20px;
}
</style>
