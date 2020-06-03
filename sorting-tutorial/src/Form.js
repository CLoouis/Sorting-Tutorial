import React from 'react';





export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            length : 0,
            arr : [],
            arrText : ""
        }
        this.setFunc = this.setFunc.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    setFunc () {
        this.parseArr();
        this.props.onSub(this.state.length,this.state.arr)
    }

    onChange (e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    parseArr(){
        var arrtext = this.state.arrText;
        // console.log(arrtext)
        var arrnum = arrtext.split(",")
        // console.log(arrnum)
        this.setState({arr : []})
        console.log(this.state.arr)
        console.log(arrnum)
        arrtext.split(",").map( num => this.state.arr.push(parseInt(num)))
    }


    render (){
        return(
            <div>
                <div>
                    <p>Length of array :</p>
                    <input name="length" type="number" value={this.state.length} onChange={this.onChange} />
                </div>
                <div>
                    <p>Numbers here (separated by commas please) :</p>
                    <input name="arrText" type="text" value={this.state.arrText} onChange={this.onChange}/>
                </div>
                <div>
                    <button onClick={this.setFunc}>Generate Array</button>
                </div>
            </div>
        )
    }
}