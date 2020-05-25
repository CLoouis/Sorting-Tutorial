<template>
  <b-container>
    <h1>{{ title }} : Enter your numbers below (max 10) </h1>
    <p>You can click the button &quot;add number&quot; or just press enter for every number
      , also remember to put at least more than 1 element.</p>
    <!-- Note to my future self: DONT CHANGE THE ADD NUMBER TO SUBMITNUMBER, because then if you
      want to submit, it needs the box to be filled, and it does not make sense-->
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
        variant="primary"
        type="submit"
        :disabled="numbers.length >= 10 || submitted || formData.number === null">
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
        @click="submitNumbers">
          Sort Numbers
      </b-button>
    </b-form>
    <div class="mt-3 flex-row d-flex justify-content-start">
      <div class="p-2">
        <b-button
          @click="showNumbers = !showNumbers">
          Toggle Numbers
        </b-button>
      </div>
      <b-list-group horizontal v-if="showNumbers">
        <p v-if="numbers.length === 0">Empty number array</p>
        <b-list-group-item
          v-for="(number, index) in numbers"
          :key="index">
          {{number}}
        </b-list-group-item>
      </b-list-group>
    </div>
    <b-container v-if="submitted">
      <p v-html="algorithmDescription"></p>
      <h2>Sorting steps for array {{ numbers }} : </h2>
      <DescriptionBox
        :steps="steps"
        :sortedNumbers="sortedNumbers"
      />
      <h4>Complexity : 
        <span v-html="complexity"></span></h4>
      <p>You can hit the 
        <b-button @click="reset" variant="danger">Reset</b-button> 
        button to start the input process again</p>
    </b-container>
  </b-container>
</template>

<script>
import DescriptionBox from '@/components/DescriptionBox.vue'

export default {
  components: {
    DescriptionBox
  },
  props: {
    algorithmDescription: String,
    complexity: String,
    title: String,
    steps: Array,
    sortedNumbers: Array
  },
  data() {
    return {
      numbers: [],
      totalNumber: 0,
      submitted: false,
      formData: {
        number: null
      },
      showNumbers: false,
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
      this.submitted = true
    }
  },
  mounted() {
    this.reset()
  }
}
</script>
