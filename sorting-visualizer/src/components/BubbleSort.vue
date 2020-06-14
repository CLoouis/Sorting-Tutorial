<template>
  <div class="BubbleSort">
    <Title />
    <br> <br>
    <div class="appTitle">
        <h1>Bubble Sort</h1>
        <p>Time complexity: O(n^2)</p>
    </div>
    <br>
    <div>
      <input 
        v-model="value" 
        class="inputForm" 
        placeholder="List number, split by space e.g. '1 4 2 5'"
      >
      <br><br>
      <h3>
        <button @click="startProses()" variant="success">SORT!</button>
      </h3>
      <br>
    </div>
    <h3 v-if="isStart" id = "result">result</h3><br>
    <div :key="stateIdx" v-for="(state, stateIdx) in this.listState" class="listState">
      <div v-if="stateIdx == currIdxListState">
        <div :key="idx" v-for="(el, idx) in state.arr" class="boxOut">
            <div class="elOut">
                <span v-if="idx == state.firstEl" class="firstEl">
                    {{ el  }}
                </span>
                <span v-else-if="idx == state.secondEl" class="secondEl">
                    {{ el }}
                </span>
                <span v-else class="normalEl">
                    {{ el }}
                </span>
            </div>
            {{ idx }}
        </div>
        <div class="message">
            <p v-if="state.isSwapping && state.firstEl==-1">
                Proses Selesai
            </p>
            <p v-else-if="state.isSwapping">
                karena tadi elemen index ke {{ state.firstEl }} > elemen index ke {{ state.secondEl }} maka dilakukan swap antara index ke {{ state.firstEl }} dan index ke {{ state.secondEl }}
            </p>
            <p v-else>
                bandingkan antara elemen di index {{ state.firstEl }} dan index ke {{ state.secondEl }}
            </p>
        </div>
      </div>
    </div>
    <br/>
    <button v-if="isStart && currIdxListState < this.listState.length-1" @click="currIdxListState++" id="btnNext">Next</button>
  </div>
</template>

<script>
import Title from './Title.vue'

const State = function(arr, firstEl, secondEl, isSwapping){
    this.arr = arr;
    this.firstEl = firstEl;
    this.secondEl = secondEl;
    this.isSwapping = isSwapping;
}


export default {
    name: 'BubbleSort',
    components: {
      Title,
    },
    data(){
        return {
            value: '',
            listState: [],
            arrIn: [],
            currIdxListState: 0,
            isStart: false
        };
    },
    
    methods: {
        startProses(){
            console.log("start");
            this.listState = [];
            this.currIdxListState = 0;
            this.arrIn = [];
            this.initArray(this.value);
            this.bubbleSort();
            this.isStart = true;
        },

        initArray(arrayElements){
            var arr = arrayElements.split(" ");
            for (var i = 0; i<arr.length; ++i){
                this.arrIn.push(parseInt(arr[i]));
            }
        },

        bubbleSort(){
            console.log("bubble");
            console.log(this.arrIn);
            var arrSize = this.arrIn.length;
            for (var i = 0; i<arrSize-1; ++i){
                for (var j = 0; j<arrSize-i-1; ++j){
                    this.listState.push(
                        new State(
                            this.arrIn.map(e => e),
                            j,
                            j+1,
                            false
                        )
                    )
                    if (this.arrIn[j] > this.arrIn[j+1]){
                        var temp = this.arrIn[j];
                        this.arrIn[j] = this.arrIn[j+1];
                        this.arrIn[j+1] = temp;

                        this.listState.push(
                            new State(
                                this.arrIn.map(e => e),
                                j+1,
                                j,
                                true
                            )
                        )
                    }
                }
            }
            this.listState.push(
                new State(
                    this.arrIn.map(e => e),
                    -1,
                    -1,
                    true
                )
            );
            console.log(this.listState);
        }
    }
}

</script>

<style scoped>
.BubbleSort{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;

}
li {
    display: inline-block;

}
.boxOut{
    display: inline-block;
    
}
.elOut{
    position: relative;
}
.firstEl{
    background-color: #431e88;
    color: white;
    padding: 20px 30px;
    border-style: groove; 
    margin: 0 10px;
}
.secondEl{
    background-color: #383779;
    color: white;
    padding: 20px 30px;
    border-style: groove; 
    margin: 0 10px;
}
.normalEl{
    background-color: white;
    color: black;
    padding: 20px 30px;
    border-style: groove; 
    margin: 0 10px;
}
</style>