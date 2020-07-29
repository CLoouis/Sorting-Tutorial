import React from 'react'

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            type: "",
            arr : [],
            arrText : ""
        }
        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
    }

    onClick = async e => {
        e.preventDefault()
        var res = this.parseArr()
        if (res.length > 10 || res.length <= 1){
            alert("Input yang bener ya")
        }
        else{
            this.setState(
                {   type : e.target.name,
                    arr : res
                },
                this.subForm
            )
            
        }
    }

    subForm(){
        this.props.onSub(this.state.type, this.state.arr)
    }

    onChange (e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    parseArr(){
        var text = this.state.arrText
        var res = []
        text.split(",").map(num => res.push(parseInt(num)))
        return res
    }


    render (){
        return(
            <div className="form">
                <p>Masukan List Yang Ingin di Sort</p>
                <div>
                    <input className = "box" name="arrText" type="text" value={this.state.arrText} placeholder="1,2,3,4,5" onChange={this.onChange}/>
                </div>
                <div>
                    <p>Klik satu kali untuk menampilkan list tidak terurut</p>
                    <p>Klik dua kali untuk menampilkan proses pengurutan</p>
                </div>
                <div>
                    <button className = "button" name="bubble" onClick={this.onClick}>Bubble Sort</button>
                    <button className = "button" name="merge" onClick={this.onClick}>Merge Sort</button>
                </div>
            </div>
        )
    }
}