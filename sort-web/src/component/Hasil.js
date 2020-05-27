import React, { Component } from 'react';
import './Hasil.css';

class Hasil extends Component {
    constructor(props) {
        super(props)
        this.step = props.hasilSort.step
        this.result = props.hasilSort.result

    }

    render() {
        return (
            <div>

                <body className="App-hasil">
                    <p>Step {this.step} :</p>
                    <div className="hasil-angka">
                        <p className="tampilan-result">[ {this.result} ]</p>
                    </div>
                </body>
            </div>
        );
    }
}

export default Hasil;