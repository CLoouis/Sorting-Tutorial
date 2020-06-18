import React from 'react';

export default class MergeSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            history: [{
                highlight: [],
                numbers: this.props.numbers,
                details: 'Initial',
            }],
        }

        this.history = [];
        this.next =  this.next.bind(this);
        this.prev =  this.prev.bind(this);
    }

    componentDidMount() {
        this.mergeSort([...this.props.numbers], 0, this.props.numbers.length - 1);
        this.history = this.history.concat([{
            highlight: [],
            numbers: [...this.props.numbers].concat().sort(function(a, b){return a-b}),
            details: 'Finished',
        }])
        this.setState({
            current: 0,
            history: this.state.history.concat(this.history),
        })
    }

    prev() {
        if (this.state.current > 0) {
            this.setState({
                current: this.state.current - 1,
            })
        }
    }

    next() {
        if (this.state.current < this.state.history.length - 1) {
            this.setState({
                current: this.state.current + 1,
            })
        }
    }

    mergeArr(numbers, left, center, right) {
        let left1, left2, sorted = [];
        left1 = left;
        left2 = center + 1;
        let tempNumbers = [...numbers];
        let details = `Merge ${numbers.slice(left1, center + 1)} and ${numbers.slice(left2, right + 1)}`;
        while (left1 <= center && left2 <= right) {
            if (numbers[left1] < numbers[left2]) {
                sorted.push(numbers[left1]);
                left1 += 1;
            } else {
                sorted.push(numbers[left2]);
                left2 += 1;
            }
        }
    
        while (left1 <= center) {
            sorted.push(numbers[left1]);
            left1 += 1;
        }
    
        while (left2 <= right) {
            sorted.push(numbers[left2]);
            left2 += 1;
        }
    
        let i = left;
        let highlight = [];
        sorted.forEach(num => {
            numbers[i] = num;
            highlight.push(i);
            i++;
        })
    
        this.history.push({
            highlight: highlight,
            numbers: tempNumbers,
            details: details,
        })
    }
    
    mergeSort(numbers, i, j) {
        if (i < j){
            const k = Math.floor((i + j) / 2);
            this.history.push({
                highlight: Array(k - i + 1).fill().map((_, idx) => i + idx),
                numbers: [...numbers],
                details: i === k? `Cannot be divided anymore` : `Divide from index ${i} to ${k}`,
            })
            this.mergeSort(numbers, i , k);
            this.history.push({
                highlight: Array(j - (k + 1) + 1).fill().map((_, idx) => (k + 1) + idx),
                numbers: [...numbers],
                details: (k+1) === j? `Cannot be divided anymore` : `Divide from index ${k + 1} to ${j}`,
            })
            this.mergeSort(numbers, k + 1, j);
            this.mergeArr(numbers, i, k, j);
        }
    }

    render () {
        const currentHistory = this.state.history[this.state.current];
        const numbers = currentHistory.numbers.map((num, idx) => {
            const numClass = (currentHistory.highlight.includes(idx)) ?
                'number highlight': 'number';
            return (
                <div className={numClass} key={idx}>{num}</div>
            )
        })
        const details = currentHistory.details;

        return (
            <div className="Merge-sort sorting">
                <h2>This is <span className="secondary-color">Merge Sort!</span></h2>
                <div className="number-container">
                    {numbers}
                </div>
                <p>{this.state.current} <span className="secondary-color">/</span> {this.state.history.length - 1}</p>
                <p>{details}</p>
                <button type="button" onClick={this.prev}>Previous</button>
                <button type="button" onClick={this.next}>Next</button>
            </div>
        )
    }
}
