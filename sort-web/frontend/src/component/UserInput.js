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
            }).then(e => e.json()).then(data => this.setState({ hasil: data.data })).catch((err) => { alert("Unvalid numbers :( Please enter the valid one !"); this.setState({ isError: true }) })

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
        return (
            <div>
                <p className="ket">*n adalah jumlah elemen array yang perlu diurutkan*</p>
                <p className="komp-text">Best Case : O(n)</p>
                <div className="desc">
                    <p><i>Best Case</i> dapat terjadi jika array sudah diurutkan,</p>
                    <p>berarti tidak ada pertukaran elemen yang terjadi sehingga hanya ada 1 iterasi elemen n.</p>
                </div>
                <p className="komp-text">Worst Case : O(n<span className="sup">2</span>)</p>
                <div className="desc">
                    <p><i>Worst Case</i> dapat terjadi saat array berada dalam urutan menurun,</p>
                    <p>sehingga terdapat iterasi sebanyak n(n+1)/2.</p>
                </div>
                <p className="komp-text">Average Case : O(n<span className="sup">2</span>)</p>
                <div className="desc">
                    <p><i>Average Case</i> dapat terjadi saat array tidak memenuhi 2 kondisi di atas,</p>
                    <p>iterasi yang terjadi kurang dari <i>Worst Case</i> tapi tentunya lebih dari <i>Best Case</i>.</p>
                </div>
            </div>
        );
    }
    kompMS = () => {
        return (
            <div>
                <p className="ket">*n adalah jumlah elemen array yang perlu diurutkan*</p>
                <p className="komp-text">Best Case : O(n log(n))</p>
                <p className="komp-text">Worst Case : O(n log(n))</p>
                <p className="komp-text">Average Case : O(n log(n))</p>
                <div className="desc">
                    <p>Kompleksitas Waktu di atas diperoleh dari :</p>
                    <p>1. Proses merge memerlukan waktu O(n) untuk menggabungkan hasil merge.</p>
                    <p>2. Proses merge sort membagi array menjadi n buah sub-array dengan data tunggal. Proses ini memerlukan waktu O(log(n)).</p>
                </div>
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
            komp = <div className="block-komp"><p className="komp-header">Kompleksitas Waktu Algoritma</p><this.kompleksitas /><br></br></div>;
        } else {
            komp = <div></div>
        }
        return (
            <div>
                {/* masukkan angka-angka untuk diolah */}

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

                {/* pilih algoritma sorting */}
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
                    {/* submit button */}
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
                    {/* nampilin kompleksitas algoritma */}
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
        );
    }
}

export default UserInput;
