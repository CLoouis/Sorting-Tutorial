<template>
  <b-container>
  <div>
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
    <b-button variant="primary" @click="execute" style="margin-bottom : 20px;">Urutkan!</b-button>
    <div v-if="process === true">
      <Result :charArray="charArray" :choice="this.algorithmChoice" />
    </div>
  </div>
  </b-container>
</template>

<script>
import Result from './Result.vue'

export default {
  props: {
    algorithmChoice: Boolean
  },
  components: {
    Result
  },
  data: function () {
    return {
      arrayInput: '',
      process: false,
      charArray: []
    }
  },
  methods: {
    execute () {
      this.process = true
      this.charArray = this.removeSpace()
    },
    clear () {
      this.arrayInput = ''
      this.process = false
    },
    removeSpace () {
      const newstr = this.arrayInput.replace(/\s+/g, '')
      const charArray = newstr.split(',')
      return charArray
    }
  }
}
</script>
