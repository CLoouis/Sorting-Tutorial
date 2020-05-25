<template>
  <div class="inputForm">
    <form v-on:submit="submitForm" id="inputArrayForm">
      <label>Number of Elements:</label>
      <input type="text" class="input" name="arraySize"/>
      <br>
      <label>Array Elements:</label>
      <input type="text" class="input" name="arrayElements"/>
      <br>
      <button type="submit">Submit</button>
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'InputForm',
  methods: {
    submitForm(event) {
      event.preventDefault();
      const inputArrayForm = document.getElementById('inputArrayForm');
      const arraySize = inputArrayForm.querySelector('input[name = arraySize]');
      const arrayElements = inputArrayForm.querySelector('input[name = arrayElements]');
      this.$root.$emit('inputData',arraySize.value, arrayElements.value);
    }
  }
}
</script>

