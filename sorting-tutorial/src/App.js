import React from 'react';
import './App.css';
import Form from './Form'
import StepList from './StepList'
import Header from './Header'
import Footer from './Footer';

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      type : "",
      arr : [],
      arrList : []
    }
    this.setSetup = this.setSetup.bind(this)
    this.sort = this.sort.bind(this)
    this.merge = this.merge.bind(this)
    this.mergeSort = this.mergeSort.bind(this)
  }

  setSetup(sortType, array){
    const arrayList = this.sort()
    this.setState({
      type : sortType,
      arr : array,
      arrList : arrayList
    })
  }

  sort(){
    var arr = this.state.arr
    var res = []
    var temp
    
    if(this.state.type === "bubble"){
        for (var i = arr.length - 1; i > 0; i--){
          for (var j = 0; j < i; j++){
            if (arr[j] > arr[j+1]){
              temp = arr[j]
              arr[j] = arr[j+1]
              arr[j+1] = temp

              const newArr = arr.slice()
              res.push(newArr)
            }
          }
        }
    }
    else{
      this.mergeSort(arr, res)
    }

    return res
  }

  mergeSort(arr, arrResult){
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle); 

    const newArr = this.merge(this.mergeSort(left, arrResult), this.mergeSort(right, arrResult)).slice()
    arrResult.push(newArr)

    return newArr
  }

  merge(left, right){
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++; 
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
  }

  sorted(arr){
    for(var i = 0; i < arr.length - 1; i++){
      if (arr[i] > arr[i+1]){
        return false
      }
      return true
    }
  }

  onClick(){
    window.location.reload(true);
  }

  render(){
    let displayArr = ""
    if (this.state.arr.length > 1){
      for (var i = 0; i < this.state.arr.length - 1; i++){
        displayArr = displayArr + this.state.arr[i].toString() + ", "
      }
      displayArr = displayArr + this.state.arr[this.state.arr.length - 1]
    }

    return (
      <div className="App">
          <Header/>
          <div className = "My-content">
            <div>
              <Form onSub={this.setSetup}/>
            </div>
            <div className="box">
              <p>{displayArr === "" ? "" :"[ " + displayArr + " ]"}</p>
            </div>    
            <div>
              <StepList arrayList = {this.state.arrList} type = {this.state.type}/>
            </div>
            <div>
              <button className = "button" onClick = {this.onClick}>Mau Coba Lagi?</button>
            </div>
          </div>
          <Footer/>
      </div>
    )
  };
}
