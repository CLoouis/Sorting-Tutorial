import React from 'react'

export default class Form extends React.Component{
    // constructor(){
    //     super();
    //     this.state = {
    //         arr : [],
    //         arrText : ""
    //     }
    //     this.onChange = this.onChange.bind(this)
    //     this.onclick = this.onClick.bind(this)
    // }
    
    // parseArr(){
    //     var text = this.state.arrText
    //     var res = []
    //     console.log(text)
    //     text.split(",").map(num => res.push(parseInt(num)))
    //     console.log(res)
    // }

    // onClick () {
    //     console.log(this.state.arr)
    // }

    // onChange (e){
    //     this.setState({
    //         arrText : e.target.value
    //     })
    //     console.log(this.state.arrText)
    // }

    // render(){
    //     return(
    //         <div>
    //             <div>
    //                 <p>Numbers here (separated by commas please) :</p>
    //                 <input name="arrText" type="text" value={this.state.arrText} onChange={this.onChange}/>
    //             </div>
    //             <div>
    //                 <button onClick={this.onClick}>Generate Array</button>
    //             </div>
    //         </div>
    //     )
    // }
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
        // this.parseArr();
        // this.props.onSub(this.state.length,this.state.arr)
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