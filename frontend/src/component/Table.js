import React, { Component } from 'react'
import axios from 'axios'

class Table extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             steps:[],
             actions:[],
             results:[],
             errorMsg:'',
             komp:""
        }
    }


    componentDidMount() {
        axios.get(this.props.url)
          .then(response => {
              this.setState({
                  steps: response.data.steps,
                  actions: response.data.actions,
                  results: response.data.results
              })
              console.log(this.props.url)
          })
          .catch(error =>{
                console.log(error)
                this.setState({
                    errorMsg:'Larik berisi lebih dari sepuluh elemen!'
              })
             
          })
      }
    
    
    render() {
        const listStep =  this.state.steps.map((step,index) => <h4 key={index}>{step}</h4>)
        const listAct = this.state.actions.map((action, index) => <h4 key={index}>{action}</h4>)
        const listRes = this.state.results.map((result, index) => <h4 key={index}>{result}</h4>)
        return (
            <div>
                <div className='kompleksitas'>
                    <h4>Kompleksitas waktu algoritma: {this.props.komp}</h4>
                </div>
                <table className='table'> 
                    <thead>
                       <tr>
                       <th className='step'>
                            Step
                        </th>
                        <th className='action'>
                            Action
                        </th>
                        <th className='res'>
                            Result
                        </th>
                       </tr>
                    </thead>
                    <tbody>
                        <tr className='isi'>
                            <td>{listStep}</td>
                            <td>{listAct}</td>
                            <td>{listRes}</td>
                        </tr>
                    </tbody>
                        
                </table>
                {this.state.errorMsg ? <h3>{this.state.errorMsg}</h3> : null}
            </div>
        )
    }
}

export default Table
