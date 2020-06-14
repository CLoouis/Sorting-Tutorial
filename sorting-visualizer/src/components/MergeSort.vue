<template>
  <div class="MergeSort">
    <Title />
    <br> <br>
    <div class="appTitle">
        <h1>Merge Sort</h1>
        <p>Time complexity: O(n log n)</p>
    </div>
    <br>
    <div>
      <input 
        v-model="value" 
        class="inputForm" 
        placeholder="List number, split by space e.g. 1 4 2 5"
      > <br> <br>
      <h3>
        <button @click="startProses()" variant="success">SORT!</button>
      </h3>
      <br>
    </div>
    <h3 v-if="isStart" id = "result">result</h3><br>
    <div :key="stateIdx" v-for="(state, stateIdx) in this.listState" class="listState">
      <div v-if="stateIdx == currIdxListState">
        <div v-if="state.isSplit">
            <div :key="idx + '1'" v-for="(el, idx) in state.arr1" class="boxOut">
                <div class="elOut">
                    <span class="normalEl">
                        {{ el  }}
                    </span>
                </div>
                {{ idx }}
            </div>
            <br>
            <h3>----------------------------</h3>
            <br>
            <div :key="idx + '2'" v-for="(el, idx) in state.arr2" class="boxOut">
                <div class="elOut">
                    <span class="normalEl">
                        {{ el  }}
                    </span>
                </div>
                {{ idx }}
            </div>
        </div>
        <div v-else>
            <div :key="idx" v-for="(el, idx) in state.arr1" class="boxOut">
                <div class="elOut">
                    <span class="normalEl">
                        {{ el  }}
                    </span>
                </div>
                {{ idx }}
            </div>
        </div>
        <br>
        <div class="message">
            <p v-if="state.isSplit">
                Proses membagi array jadi 2 bagian
            </p>
            <p v-else>
                Sort array
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

const State = function(arr1,arr2, isSplit){
    this.arr1 = arr1;
    this.arr2 = arr2;
    this.isSplit = isSplit;
}


export default {
    name: 'MergeSort',
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
            this.mergeSort(0,this.arrIn.length-1);
            console.log(this.listState);
            this.isStart = true;
        },

        initArray(arrayElements){
            var arr = arrayElements.split(" ");
            for (var i = 0; i<arr.length; ++i){
                this.arrIn.push(parseInt(arr[i]));
            }
        },

        merge(l, m, r) {
            var nl = m-l+1; 
            var nr = r-m;
            var arrL = new Array(nl);
            var arrR = new Array(nr);

            for(i = 0; i<nl; i++){
                arrL[i] = this.arrIn[l+i];
            }
            for(j = 0; j<nr; j++)
                arrR[j] = this.arrIn[m+1+j];

            var i = 0; 
            var j = 0; 
            var k = l;
          
            while(i < nl && j<nr) {
                if(arrL[i] <= arrR[j]) {
                    this.arrIn[k] = arrL[i];
                    i++;
                }else{
                    this.arrIn[k] = arrR[j];
                    j++;
                }
                k++;
            }

            while(i<nl) {      
                this.arrIn[k] = arrL[i];
                i++; k++;
            }
            while(j<nr) {     
                this.arrIn[k] = arrR[j];
                j++; k++;
            }
            
            this.listState.push(new State(
                this.arrIn.slice(l,r+1),
                null,
                false
            ));
        },

        mergeSort(l, r){
            console.log(this.listState);
            if (l<r){
                var m = Math.floor(l+(r-l)/2);
                var arrL = this.arrIn.slice(l,m+1);
                var arrR = this.arrIn.slice(m+1,r+1);
                this.listState.push(new State(
                    arrL,
                    arrR,
                    true
                ));

                // Sort left and right array
                this.mergeSort(l, m);
                this.mergeSort(m+1, r);
                this.merge(l, m, r);
            }
            
        }
    }
}

</script>

<style scoped>
.MergeSort{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
.boxOut{
    display: inline-block;
}
.elOut{
    position: relative;
}
.firstEl{
    background-color: black;
    color: white;
    padding: 20px 30px;
    border-style: groove; 
    margin: 0 10px;
}
.secondEl{
    background-color: blue;
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

.inputForm{
    width:500px;
}
</style>