import React from 'react';
import './Sorting.css'

export default class BubbleSort extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props.numbers);
        this.state = {
            current: 0,
            history: [{
                details: 'Initial',
                numbers: props.numbers,
                highlight: [],
            }],
        }
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    componentDidMount() {
        let swap = true;
        let history = [...this.state.history];
        let numbers = [...history.slice(-1)[0].numbers];
        let highlight, details;
        while (swap) {
            swap = false;
            for (let i = 0; i < numbers.length - 1; i++) {
                highlight = [i, i + 1];;
                if (numbers[i] > numbers[i + 1]) {
                    details = `${numbers[i]} is more than ${numbers[i + 1]}`;
                    history = history.concat({
                        details: details,
                        numbers: numbers,
                        highlight: [...highlight],
                    });
                    numbers = [...numbers];
                    [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                    swap = true;
                } else {
                    details = `${numbers[i]} is not more than ${numbers[i + 1]}`;
                    history = history.concat({
                        details: details,
                        numbers: numbers,
                        highlight: [...highlight],
                    });
                }
            }
        }

        this.setState({
            history: history.concat({
                details: 'Finished',
                numbers: numbers,
                highlight: [],
            }),
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

    render() {
        const currentHistory = this.state.history[this.state.current]
        const details = currentHistory.details;
        const numbers = currentHistory.numbers.map((num, idx) => {
            const numClass = (currentHistory.highlight.includes(idx)) ?
                'number highlight': 'number';
            return (
                <div className={numClass} key={idx}>{num}</div>
            )
        })
        return (
            <div className="bubble-sort sorting">
                <h2>This is <span className="secondary-color">Bubble Sort!</span></h2>
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