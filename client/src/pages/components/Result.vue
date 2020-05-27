<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-10">
        <h2><br>How Does it Work?</h2>
        <h4 v-if="typeof this.$store.state.result === 'string'">{{this.$store.state.result}} </h4>

        <table class="table table-hover">
          <thead>
            <tr>
              <th scope="col">Step</th>
              <th scope="col">Action</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody v-if="this.$store.state.result instanceof Array">
            <tr v-for="(item, index) in this.$store.state.result" :key="index">
              <td>{{(index+1)}}</td>
              <td>{{item[0]}} <br>
                {{item[2]}}<br>
                {{item[1]}}
              </td>
              <td>{{item[3]}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

</script>