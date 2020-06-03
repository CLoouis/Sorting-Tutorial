import React from 'react'
import * as d3 from 'd3';
import VisualizeArray from './functions/visualize.js'

export default class Visual extends React.Component{
    constructor(props){
        super(props);
        // console.log(props)
        this.state = {
            len : props.length,
            arr : props.array
        }
        // this.drawArr = this.drawArr.bind(this)
        // this.mergeSort = this.mergeSort.bind(this)
        // this.bubbleSort = this.bubbleSort.bind(this)
        // this.drawArr();
        this.slide = this.slide.bind(this)
    }

    slide(){
        console.log(this.state.arr)
        var array = this.state.arr;
        var length = this.state.len;
        var trans = []
        array.map(e => trans[e] = 0)
        function sorted(){
            for(var j = 0; j < length-1;j ++){
                if(array[j] > array[j+1]){
                    return false
                }
            }
            return true
        }
        // for (var i = 0; i < this.state.len; i++){
        //     for (var j = 0; j<this.state.len-1;j++){
                // if (array[j] > array[j+1]){
                //     var temp = array[j];
                //     array[j] = array[j+1];
                //     array[j+1] = temp;

                    // d3.select("#rect"+array[j])
                    //     .transition().duration(100)
                    //     .attr("transform",function(d) {return "translate(-45,0)"})

                    // d3.select("#rect"+array[j+1])
                    //     .transition().duration(100)
                    //     .attr("transform",function(d) {return "translate(45,0)"})
        //         }
        //     }
        // }
        function bubbleSort(i){
            // console.log(i)
            // console.log(array[i])
            // console.log(array[i+1])
            if (i < length-1){
                if (array[i] > array[i+1]){
                    trans[array[i]] = trans[array[i]] + 45;
                    trans[array[i+1]] = trans[array[i+1]] - 45; 
                    console.log(trans)
                    d3.select("#rect"+array[i]) 
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+ (trans[array[i]]) +",0)"})
                    
                    d3.select("#text"+array[i])
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+trans[array[i]] + ",0)"})

                    d3.select("#rect"+array[i+1])
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+trans[array[i+1]]+",0)"})
                    
                    d3.select("#text"+array[i+1])
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+trans[array[i+1]] + ",0)"})

                    var temp = array[i];
                    array[i] = array[i+1];
                    array[i+1] = temp;
                }
                d3.timeout(function(){return bubbleSort(i+1)},100);
            }else if(sorted()){
                return;
            }else{
                bubbleSort(0);
            }
        }

        function concats(array,arr1,arr2,pos,count){
            console.log(arr1)
            console.log(arr2)
                // console.log(arr1)
                // console.log(arr1.length)
                // console.log(arr2)
                // console.log(arr2.length)
                if (arr1.length > 0){
                    if (arr2.length > 0){
                        if (arr1[0] > arr2[0]){
                            d3.select("#rect" + arr2[0])
                                .transition().duration(700)
                                .attr("x",count*45+pos)
                            array.push(arr2.shift())
                        }else{
                            d3.select("#rect" + arr1[0])
                                .transition().duration(700)
                                .attr("x",count*45+pos)
                            array.push(arr1.shift())
                        }
                    }else{
                        d3.select("#rect" + arr1[0])
                            .transition().duration(700)
                            .attr("x",count*45+pos)
                        array.push(arr1.shift())
                    }
                }else{
                    if (arr2.length > 0){
                        d3.select("#rect" + arr2[0])
                            .transition().duration(700)
                            .attr("x",count*45+pos)
                        array.push(arr2.shift())
                    }
                }
            
                if (arr1.length > 0 || arr2.length > 0){
                    d3.timeout(function(){
                        count++;
                        concats(array,arr1,arr2,pos,count)},700);
                    }

                if (count === array.length + arr1.length + arr2.length && arr1.length === 0 && arr2.length ===0){
                    return array
                }

                
            // console.log(array)
        }

        function mergeSort(arrNum){
            // console.log(arrNum);
            var posi = d3.select("#rect"+arrNum[0]).attr("x")
            if (arrNum.length  > 2){
                var mid = arrNum.length/2
                for(var k = 0; k < mid;k++){
                    trans[arrNum[k]] -= 45;
                    d3.select("#rect"+arrNum[k]).transition().duration(1000)
                    .attr("transform", function (d) {return "translate("+trans[arrNum[k]]+",0)"})
                }
                for(var k = mid; k < arrNum.length;k++){
                    trans[arrNum[k]] += 45;
                    d3.select("#rect"+arrNum[k]).transition().duration(1000)
                    .attr("transform", function (d) {return "translate("+trans[arrNum[k]]+",0)"})
                }
                var sortL, sortR;
                var ret;
                // return d3.timeout(function(){
                    var L = arrNum.slice(0,mid);
                    sortL = mergeSort(L);
                    var R = arrNum.slice(mid);
                    sortR = mergeSort(R);             
                    var array = [];
                    return concats(array,sortL,sortR,posi,0);
                //     ret = concats(sortL,sortR,45*length/arrNum.length);
                //     return ret
                // },1000)
                // console.log(ret)
                // return ret;
                // var ret;
                // d3.timeout(function() {ret = concats(sortL,sortR,mid)},200*arrNum.length) 
            }else if(arrNum.length === 2){
                if (arrNum[0] > arrNum[1]){
                    trans[arrNum[0]] = trans[arrNum[0]] + 45;
                    trans[arrNum[0+1]] = trans[arrNum[0+1]] - 45; 
                    console.log(trans)
                    d3.select("#rect"+arrNum[0]) 
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+ (trans[arrNum[0]]) +",0)"})

                    d3.select("#rect"+arrNum[0+1])
                        .transition().duration(100)
                        .attr("transform",function(d) {return "translate("+trans[arrNum[0+1]]+",0)"})
                
                    var temp = arrNum[0];
                    arrNum[0] = arrNum[1];
                    arrNum[1] = temp;
                }
                return arrNum;
            }else{
                return arrNum;
            }
        }

        bubbleSort(0);
        // else console.log(mergeSort(array));
    }

    render(){
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <div id="space">
                    {/* {this.circle()} */}
                    {/* {this.state.len} */}
                    {/* ,{this.state.arr} */}
                    {/* {this.drawArr()} */}
                    <VisualizeArray width={this.state.len*45 + 95} height={200} data={this.state.arr}/>
                    <button onClick = {this.slide}>Bubble Sort (O(n^2) complexity)</button>
                </div>
                <div>
                    {/* <button onClick={this.addCircle}>Add Circle</button> */}
                </div>
            </div>
        )
    }
}