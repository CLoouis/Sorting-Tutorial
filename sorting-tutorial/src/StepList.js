import React from 'react'
import Step from './Step'

export default class StepList extends React.Component{
    constructor(props) {
        super(props)
        this.state ={
            type : this.props.type,
            arrList : this.props.arrayList
        }
        this.deskripsi = this.deskripsi.bind(this)
        this.deskripsiBubble = this.deskripsiBubble.bind(this)
        this.deskripsiMerge = this.deskripsiMerge.bind(this)
    }

    componentWillReceiveProps(nextProps){
        if((nextProps.arrayList !== this.props.arrList) || (nextProps.type !== this.props.type)){
            this.setState({
                arrList : nextProps.arrayList,
                type : nextProps.type
            })
        }
    }

    deskripsiMerge(){
        return(
            <div>
                <h3>Merge Sort</h3>  
                <p className="desk-text">Best Case : O(n log(n))</p>
                <p className="desk-text">Worst Case : O(n log(n))</p>
                <p className="desk-text">Average Case : O(n log(n))</p> 
            </div>
        )
    }

    deskripsiBubble(){
        return(
            <div>
                <h3>Bubble Sort</h3>
                <p className="desk-text">Best Case : O(n)</p>
                <p className="desk-text">Worst Case : O(n^2)</p>
                <p className="desk-text">Average Case : O(n^2)</p>
            </div>
        )
    }

    deskripsi(){
        if(this.state.type === "bubble"){
            return this.deskripsiBubble()
        }
        else if(this.state.type === "merge"){
            return this.deskripsiMerge()
        }
        else{
            return (
                <div>

                </div>
            )
        }
    }

    render(){
        const stepComponent = this.state.arrList.map(arr => <Step item = {arr}/>)
        return(
            <div>
                {stepComponent}
                <this.deskripsi/>
            </div>
        )
    }
}