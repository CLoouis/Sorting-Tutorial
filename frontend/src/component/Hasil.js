import React, { Component } from 'react';
import './Hasil.css';

class Hasil extends Component {
    constructor(props) {
        super(props)
        this.step = props.hasilSort.step
        this.action = props.hasilSort.action
        this.result = props.hasilSort.result
    }

    render() {
        return (
            <div>
                <body className="hasilWeb">
                    <p>Step {this.step} : {this.action}</p>
                    <div className="hasil">
                        <p className="tampilanHasil">[ {this.result} ]</p>
                    </div>
                </body>
            </div>
        );
    }
}

export default Hasil;