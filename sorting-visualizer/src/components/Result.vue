<template>
  <div class="result">
    <p id = "result">result</p>
    <div class="arrayBoxOutput" id="arrayBoxOutput" data-center="true" data-layout="array" data-indexed="true">
       
    </div>
  </div>
</template>

<script>
function beginProcess(arraySize, arrayElements){
    var arr = arrayElements.split(" ");
    var arrNumber = []
    for (var i = 0; i<arraySize; ++i){
        arrNumber.push(parseInt(arr[i]));
    }
    generateArray(arraySize, arrNumber);
    doBubbleSort(arrNumber, arraySize);
}

function generateArray(arrSize, arr){
    const arrayBoxOutput = document.getElementById('arrayBoxOutput');
    arrayBoxOutput.innerHTML = "";
    console.log(arrSize, arr);
    for (var i = 0; i<arrSize; ++i){
        console.log(createTemplate(i,arr[i]));
        arrayBoxOutput.innerHTML += createTemplate(i,arr[i]);
    }
}

function createTemplate(index, value){
    return `<li class="boxElement" 
                style="box-sizing: border-box;
                        text-align: center;
                        padding: 0;
                        cursor: default;
                        display: inline-block;" >
                <span class="value" id="value${index}"
                style="box-sizing: border-box;
                        border: 1px solid black ;
                        border-top-left-radius: 8px;
                        border-bottom-left-radius: 8px;
                        border-top-right-radius: 8px;
                        border-bottom-right-radius: 8px;">
                ${value}</span>
                <br>
                <span class="indexLabel">${index}</span>
            </li>`;
}

function doBubbleSort(arr, arraySize){
    for (var i = 0; i<arraySize-1; ++i){
        for (var j = 0; j<arraySize-i-1; ++j){
            if (arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                // change the html
                var elmt1 = document.getElementById("value"+j.toString());
                var elmt2 = document.getElementById("value"+(j+1).toString());
                elmt1.innerHTML = arr[j];
                elmt2.innerHTML = arr[j+1];
            }
        }
    }
    
}



export default {
    name: 'Result',
    mounted(){
        this.$root.$on('inputData', (arraySize, arrayElements) => {
            console.log(arraySize + arrayElements);
            beginProcess(arraySize, arrayElements);
        })
    }
}

</script>

<style scoped>
.arrayBoxOutput{
    height: 80px;
    width: 401px;
    display: inline-block;
    position: relative;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
}
.boxElement{
    box-sizing: border-box;
    text-align: center;
    padding: 0;
    cursor: default;
    display: inline-block;
    
}
.value{
    box-sizing: border-box;
    border: 1px solid black ;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
}
</style>