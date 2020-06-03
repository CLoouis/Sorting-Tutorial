import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import Form from './Form.js';
import Visual from './Visual.js';

export default class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      len : 0,
      arr : [],
      sorted : []
    }
    this.setLenArr = this.setLenArr.bind(this)
  }

  setLenArr(length,array) {
    this.setState({
        len : length,
        arr : array
    });
  }

  render(){
    return (
    <div className="App">
        <div>
            <h1>
                SORTING TUTORIALLLLL
            </h1>
        </div>
        <div>
            <Form onSub={this.setLenArr}/>
        </div>
        <div>
            {this.state.len === 0 ? "" : <Visual length={this.state.len} array={this.state.arr}/>}
        </div>
  </div>
  );
  };
}

