<template>
  <div class="HomePage">
      <Title />
      <div class="container">
        <div class="wrapper">
          <div class="appTitle">
            <h1>Sorting Visualizer App</h1>
            <br>
            <p>App for visualizing sorting methods</p>
          </div>
          <div class="content">
            <div class=items>
              <a href="/BubbleSort" class="bubbleSort">
                <div class="detail-items">
                  <h3>Bubble Sort</h3>
                  <p></p>
                </div>
              </a>
              <a href="/MergeSort" class="mergeSort">
                <div class="detail-items">
                  <h3>Merge Sort</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Title from './Title.vue'
export default{
  name: "HomePage",
  components:{
    Title,
  }
}
</script>

<style scoped>
.container {
    padding: 20px 100px;
}

* {
    margin: 0;
    padding: 0;
}


.content {
    display: block;
    
}

.items {
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,350px);
    align-items: center;
    justify-content: center;
    grid-gap: 10em;
    
}

a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
}

.bubbleSort{
  border-style: groove; 
    margin: 0 10px;
}

.mergeSort{
  border-style: groove; 
    margin: 0 10px;
}
</style>