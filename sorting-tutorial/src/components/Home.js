import React from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import MergeSort from './MergeSort';
import BubbleSort from './BubbleSort';
import './Home.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numbers: [],
            method: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(e) {
        let inputField = document.querySelector('input');
        inputField.disabled = true;
        const numbers = inputField.value
            .split(',')
            .map(num => parseInt(num));
        
        // console.log(numbers);
        const method = e.target.textContent;
        this.setState({
            numbers: numbers,
            method: method,
        })
    }

    handleReset() {
        let inputField = document.querySelector('input');
        inputField.disabled = false;
        inputField.value = '';
        this.setState({
            numbers: [],
            method: null,
        })
    }

    render() {
        console.log('rendering...');
        let sorting;
        if (this.state.method) {
            sorting = this.state.method === "Bubble Sort" ?
            <BubbleSort numbers={this.state.numbers} /> :
            <MergeSort numbers={this.state.numbers} />
        }
        return (
            <div className="Home">
                <h1>Welcome to <span className="secondary-color">Sorting Tutorial!</span></h1>
                <div className="input-bar">
                    <input type="text" placeholder="Enter numbers to sort (e.g. 3,2,9,1)"></input>
                    <div className="sort-choice">
                        <button type="button" onClick={this.handleSubmit}>Bubble Sort</button>
                        <button type="button" onClick={this.handleSubmit}>Merge Sort</button>
                        <button type="button" onClick={this.handleReset}>Reset</button>
                        {/* <Link to="/bubble-sort">Bubble Sort</Link>
                        <Link to="/merge-sort">Merge Sort</Link> */}
                    </div>
                </div>
                {sorting}
                {/* <Switch>
                    <Route path="/bubble-sort">
                        <BubbleSort numbers={this.state.numbers} />
                    </Route>
                    <Route path="/merge-sort">
                        <MergeSort numbers={this.state.numbers} />
                    </Route>
                </Switch> */}
            </div>
        )
    }
}