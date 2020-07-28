import React from 'react'

export default class Step extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            arr : this.props.item
        }
    }

    render(){
        let displayArr = ""
        for (var i = 0; i < this.state.arr.length - 1; i++){
            displayArr = displayArr + this.state.arr[i].toString() + ", "
        }
        displayArr = displayArr + this.state.arr[this.state.arr.length - 1]
        return(
            <div className="box">
                <p>[ {displayArr} ]</p>
            </div>
        )
    }
}