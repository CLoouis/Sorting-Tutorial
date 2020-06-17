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
            }],
        }
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
    }

    componentDidMount() {
        let swap = true;
        let history = [...this.state.history];
        let numbers = [...history.slice(-1)[0].numbers];
        while (swap) {
            swap = false;
            for (let i = 0; i < numbers.length - 1; i++) {
                let details;
                if (numbers[i] > numbers[i + 1]) {
                    details = `${numbers[i]} is more than ${numbers[i + 1]}`;
                    history = history.concat({
                        details: details,
                        numbers: numbers,
                    });
                    numbers = [...numbers];
                    [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                    swap = true;
                } else {
                    details = `${numbers[i]} is not more than ${numbers[i + 1]}`;
                    history = history.concat({
                        details: details,
                        numbers: numbers,
                    });
                }
            }
        }

        this.setState({
            history: history.concat({
                details: 'Finished Sorting',
                numbers: numbers,
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

    isInitial() {
        return this.state.current === 0;
    }

    isFinished() {
        return this.state.current === this.state.history.length - 1;
    }

    render() {
        
        
        const currentHistory = this.state.history[this.state.current]
        const leftIdx = (this.state.current - 1) % (currentHistory.numbers.length - 1);
        const details = currentHistory.details;
        const numbers = currentHistory.numbers.map((num, idx) => {
            const numClass = (idx === leftIdx || idx === leftIdx + 1) && !(this.isInitial() || this.isFinished()) ?
                'number highlight': 'number';
            return (
                <div className={numClass} key={idx}>{num}</div>
            )
        })
        return (
            <div className="bubble-sort sorting">
                <h1>This is <span className="secondary-color">Bubble Sort!</span></h1>
                <div className="number-container">
                    {numbers}
                </div>
                <p>{this.state.current} <span class="secondary-color">/</span> {this.state.history.length - 1}</p>
                <p>{details}</p>
                <button type="button" onClick={this.prev}>Previous</button>
                <button type="button" onClick={this.next}>Next</button>
            </div>
        )
    }
}