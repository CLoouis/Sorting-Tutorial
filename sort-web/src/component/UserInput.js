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
            isSubmit: false
        }
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
            }).then(e => e.json()).then(data => this.setState({ hasil: data.data })).catch((err) => alert("Unvalid numbers :( Please enter the valid one !"))
        } else {
            alert("Your not entering any numbers yet !")
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
    kompBS = () => {
        return <p className="komp-text">O(n^2)</p>;
    }
    kompMS = () => {
        return <p className="komp-text">O(n log n)</p>;
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
        if (this.state.isSubmit) {
            komp = <div className="block-komp"><p className="komp-header">Kompleksitas Waktu Algoritma</p><this.kompleksitas /><br></br></div>;
        } else {
            komp = <div></div>
        }
        return (
            <div>
                {/* masukkan angka-angka untuk diolah */}
                <div>
                    <body className="App-insert">
                        <p className="header-insert-number">Insert Your Numbers</p>
                        <form>
                            <input
                                className="num-block"
                                type="text"
                                placeholder="example :1,2,3,4,5"
                                onChange={this.handleChangeNumber}
                            />
                        </form>
                    </body>
                </div>

                {/* pilih algoritma sorting */}
                <div>

                    <body className="App-choose">
                        <br></br>
                        <p className="header-algo">Choose The Algorithm</p>
                        <form>
                            <label>
                                <select className="select-block" onChange={this.handleChangeAlgo} >
                                    <option value="BS">Bubble Sort</option>
                                    <option value="MS">Merge Sort</option>
                                </select>
                            </label>
                        </form>
                        <br></br>
                        <br></br>
                        <div>
                            <button className="submit-button" onClick={this.handleSubmit}>Get the Result</button>
                        </div>


                        {/* nampilin hasil */}
                        <div>
                            {this.state.hasil.map((hasilSorting) => (
                                <div>
                                    <Hasil hasilSort={hasilSorting} />
                                </div>
                            ))}

                        </div>
                        <br></br>
                        <div>
                            {komp}
                        </div>

                        {/* button try again */}
                        <div>
                            <button className="try-again-button" onClick={this.refreshPage}>Try Again</button>
                        </div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </body>
                </div>

            </div>
        );
    }
}

export default UserInput;
