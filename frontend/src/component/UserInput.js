import React, { Component } from 'react';
import './UserInput.css';
import Hasil from '../component/Hasil'

class UserInput extends Component {

    constructor(props) {
        super(props)
        this.state = {
            algo: "BS",
            numbers: "",
            hasil: [],
            isSubmit: false,
            isError: false
        }
    }

    handleChangeAlgo = (event) => {
        event.preventDefault();
        this.setState({
            algo: event.target.value
        });
    }
    
    handleChangeNumber = (event) => {
        event.preventDefault();
        this.setState({
            numbers: event.target.value
        })

    }
    refreshPage = () => {
        this.setState({ isSubmit: false })
        window.location.reload(true);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.numbers !== '') {
            this.setState({ isSubmit: true })
            fetch("http://localhost:5000/sorting-web", {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({
                    'numbers': this.state.numbers,
                    'algo': this.state.algo
                })
            }).then(e => e.json()).then(data => this.setState({ hasil: data.data })).catch((err) => { alert("Invalid Input!"); this.setState({ isError: true }) })
        } else {
            alert("Invalid Input")
        }
    }
    kompBS = () => {
        return (
            <div className="kompleksitas">
                <p className="textKomp">Best Case : O(n)</p>
                <p className="textKomp">Worst Case : O(n<span className="sup">2</span>)</p>
                <p className="textKomp">Average Case : O(n<span className="sup">2</span>)</p>
            </div>
        );
    }
    kompMS = () => {
        return (
            <div className="kompleksitas">
                <p className="textKomp">Best Case : O(n log(n))</p>
                <p className="textKomp">Worst Case : O(n log(n))</p>
                <p className="textKomp">Average Case : O(n log(n))</p>
            </div>

        );
    }
    kompleksitas = () => {
        if (this.state.algo === "BS") {
            return <this.kompBS />
        } else {
            return <this.kompMS />
        }
    }
    render() {
        let komp;
        console.log(this.state.isError)
        if (this.state.isSubmit && !this.state.isError) {
            komp = <div className="kompWeb"><p>Kompleksitas Waktu Algoritma</p><this.kompleksitas /><br></br></div>;
        } else {
            komp = <div></div>
        }
        let tryagain;
        console.log(this.state.isError)
        if (this.state.isSubmit && !this.state.isError) {
            tryagain = <button className="tryagainButton" onClick={this.refreshPage}>Try Again</button>;
        } else {
            tryagain = <div></div>
        }
        let submit;
        console.log(this.state.isError)
        if (!(this.state.isSubmit && !this.state.isError)) {
            submit = <button className="submitButton" onClick={this.handleSubmit}>sort!</button>;
        } else {
            submit = <div></div>
        }
        return (
            <div>
                <body className="webInput">
                    <p className="titleInput">Sort the Array!</p>
                    <form>
                        <input
                            className="numInputbox"
                            type="text"
                            placeholder="example :1,2,3,4,5"
                            onChange={this.handleChangeNumber}
                        />
                    </form>
                    <form>
                        <label>
                            <select className="algoInputbox" onChange={this.handleChangeAlgo} >
                                <option value="BS">Bubble Sort</option>
                                <option value="MS">Merge Sort</option>
                            </select>
                        </label>
                    </form>
                    <br></br>
                    <br></br>
                    <div>
                        {submit}
                    </div>
                    <div>
                        {this.state.hasil.map((hasilSorting) => (
                            <div>
                                <Hasil hasilSort={hasilSorting} />
                            </div>
                        ))}
                    </div>
                    <div>
                        {komp}
                    </div>
                    <br></br>
                    <div>
                        {tryagain}
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                </body>

            </div>
        );
    }
}

export default UserInput;
