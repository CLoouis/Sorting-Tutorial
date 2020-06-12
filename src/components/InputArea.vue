<template>
  <!-- InputArea component HTML -->
  <b-container>
  <div>
    <!-- Input Box for input all number that want to be sorted -->
    <b-form>
      <b-form-group
        id="input-group-1"
        label="Masukkan kumpulan angka yang ingin diurutkan:"
        label-for="input-1"
        description="Maksimal angka yang diperbolehkan adalah 10 angka"
      >
        <b-form-input
          id="input-1"
          v-model="arrayInput"
          type="text"
          required
          placeholder="Contoh : 1, 2, 3, 4, 5"
          sm="10"
          style="text-align: center;"
        ></b-form-input>
      </b-form-group>
    </b-form>

    <!-- Sorting Button, begin to proceed sorting all number in the input box -->
    <b-button variant="success" @click="execute" style="margin-top : 20px; margin-bottom : 20px;">Urutkan!</b-button>

    <!-- If the button pressed, show the sorting result -->
    <div v-if="process === true">
      <Result :charArray="charArray" :choice="this.algorithmChoice" />
    </div>
  </div>
  </b-container>
</template>

<script>
// InputArea.vue
// Contain all attribute and methods about InputArea component
import Result from './Result.vue'

export default {
  // Passing algorithm choice from Jumbotron component to the result component
  props: {
    algorithmChoice: Boolean
  },
  // Contain result component
  components: {
    Result
  },
  // Container for arrayInput from input box, process boolean, and charArray
  data: function () {
    return {
      arrayInput: '',
      process: false,
      charArray: []
    }
  },
  methods: {
    // Process the value of the input box by removing all space and pass it into the result
    // This method will be called when the "Urutkan!" button has already pressed
    execute () {
      this.charArray = this.removeSpace()
      this.process = true
    },
    // Split input value of the arrayInput by comma and remove all space to return array of numeric character
    // This method will be called on the execute method
    removeSpace () {
      const newstr = this.arrayInput.replace(/\s+/g, '')
      const charArray = newstr.split(',')
      return charArray
    }
  }
}
</script>
