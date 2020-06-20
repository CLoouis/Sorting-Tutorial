import React from 'react';
import MergeSort from './MergeSort';
import BubbleSort from './BubbleSort';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            method: null,
            warning: '',
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        let inputField = document.querySelector('input');
        // Check for delimiter input
        let inputCheck = new RegExp(/^\d+(,\d+)*$/);
        console.log(inputCheck.test(inputField.value));
        if (!inputCheck.test(inputField.value)) {
            this.handleReset();
            this.setState({
                warning: '* Please enter a comma delimited integers!',
            })

            return;
        }
        const numbers = inputField.value
            .split(',')
            .map(num => parseInt(num));
            
        // Check for amount of numbers
        if (numbers.length > 10) {
            this.handleReset();
            this.setState({
                warning: '* Please enter less than 10 number!',
            })

            return;
        }
        
        inputField.disabled = true;
        const method = e.target.textContent;
        this.setState({
            numbers: numbers,
            method: method,
            warning: '',
        })
    }

    handleReset() {
        let inputField = document.querySelector('input');
        inputField.disabled = false;
        inputField.value = '';
        this.setState({
            numbers: [],
            method: null,
            warning: '',
        })
    }

    getDesc() {
        let title, p1, p2;
        if (this.state.method === "Bubble Sort") {
            title = 'Bubble Sort?';
            p1 = <p><span class="secondary-color bold">Bubble Sort</span> is a simple sorting algorithm. Bubble sort algorithm compares each pair of adjacent element and if they are not in the desired order, they will be swapped. Bubble sort implements the <span class="secondary-color bold">Brute Force Algorithm.</span></p>;
            p2 = <p>Time Complexity: <span class="secondary-color bold">O(n<sup>2</sup>)</span></p>
        } else if (this.state.method === "Merge Sort") {
            title = 'Merge Sort?';
            p1 = <p><span class="secondary-color bold">Merge sort</span> divides the array of numbers in halves, calls itself on the two halves recursively, and merges the sorted halves using a merge function. Merge sort implements the <span class="secondary-color bold">Divide and Conquer Algorithm.</span></p>;
            p2 = <p>Time Complexity: <span class="secondary-color bold">O(n log n)</span></p>;
        } else {
            title = 'Sorting?';
            p1 = <p><span class="secondary-color bold">Sorting</span> is a process to arrange a given list of items in an ascending or descending order. To ease sorting, there exist many multiple sorting algorithms. Different sorting algorithm has different methods and different complexity.</p>;
            p2 = <p>In this website, you will see visualizations of a few sorting algorithms. In the moment, the available sorting alrogithms are Bubble Sort and Merge Sort.</p>;
        }

        return (
            <div class="description">
                <h2>What is <span class="secondary-color">{title}</span></h2>
                {p1}
                {p2}
            </div>
        )
    }

    render() {
        let sortMethod;
        if (this.state.method) {
            sortMethod = this.state.method === "Bubble Sort" ?
            <BubbleSort numbers={this.state.numbers} /> :
            <MergeSort numbers={this.state.numbers} />
        }
        return (
            <div className="Home">
                
                <div className="input-bar">
                    <h2>Input <span class="secondary-color">Here!</span></h2>
                    <input type="text" placeholder="Enter numbers to sort (e.g. 3,2,9,1)"></input>
                    <div className="sort-choice">
                        <button type="button" onClick={this.handleSubmit}>Bubble Sort</button>
                        <button type="button" onClick={this.handleSubmit}>Merge Sort</button>
                        <button type="button" onClick={this.handleReset}>Reset</button>
                    </div>
                    <span className="warning">{this.state.warning}</span>
                </div>
                {this.getDesc()}
                {sortMethod}
            </div>
        )
    }
}