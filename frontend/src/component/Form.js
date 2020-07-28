import React, { Component } from 'react'
import Table from './Table'

export class Form extends Component {
    constructor(props) {
        super(props)
        
        // const baseUrl = 'http://localhost:5000';
        const baseUrl = 'api';
        this.state = {
             array: '',
             metode: 'Bubble',
             url: `${baseUrl}/src/process?`,
             rendernow: false,
             komp:''
        }
    }
    
    inputHandler = (props) => {
        this.setState({
            array: props.target.value
        })
    }

    metodeHandler = (props) => {
        this.setState({
            metode: props.target.value
        })
    }

    submit = (event) =>{
        this.setState((prev) => ({
            url: prev.url + 'input=' + this.state.array + '&method=' + this.state.metode,
            rendernow: true
        }))
        if (document.getElementById('method').value === 'Bubble'){
            this.setState({
                komp:'O(n\xB2)'  
            })
        }else if(document.getElementById('method').value === 'Merge'){
            this.setState({
                komp:'O(n.log(n))'  
            })
        }
        event.preventDefault()
    }

    render() {
        return (
            <div className="form">
                <label><b>Masukkan larikmu!</b></label><br/>
                <input id='input' className="input-box" value={this.state.array} type='text' onChange={this.inputHandler}></input><br/>
                <select id='method' className='select' value={this.state.metode} onChange={this.metodeHandler}>
                    <option value='Bubble'>Bubble Sort</option>
                    <option value='Merge'>Merge Sort</option>    
                </select><br/>        
                <button className="submit" type="button" onClick={this.submit}>Urutkan!</button>
                {this.state.rendernow ? <Table render={this.state.rendernow} komp={this.state.komp} url={this.state.url}></Table> : null}  
            </div>
        )
    }
}

export default Form
