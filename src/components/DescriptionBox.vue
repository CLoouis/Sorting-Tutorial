<template>
  <div>
    <b-list-group>
      <b-list-group-item
        v-for="(step, index) in steps"
        :key="index">
          <h4>{{ index + 1 }}. {{ step.title }}</h4>
          <p v-html="step.description"></p>
      </b-list-group-item>
    <b-list-group-item variant="success">
      <h4>{{ steps.length + 1 }}. Done!</h4>
      <p> The sorted array is {{ sortedNumbers }}</p>
    </b-list-group-item>
    <br>
    </b-list-group>
  </div>
</template>


<script>
export default {
  props: {
    steps: Array,
    sortedNumbers: Array,
  },
  methods: {
    reset() {
      this.$emit('reset')
    }
  }
}
</script>
