<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h2><br>How Does it Work?</h2>
       
        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Action</th>
              <th scope="col">Description</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(result, index) in results" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ result.action }}</td>
              <td>{{ result.description}}</td>
              <td>{{ result.array}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props:{
    results: Array
  },
  methods: {
    getBooks() {
      const path = 'http://localhost:5000/';
      axios.get(path)
        .then((res) => {
          this.results = res.data.results;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
        });
    }
  }
};
</script>