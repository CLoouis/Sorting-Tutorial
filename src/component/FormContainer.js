import React, {Component} from "react"
import FormComponent from "./FormComponent"

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            number: "",
            elements: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        event.preventDefault();
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        }) 
    }
    
    render() {
        return(
            <FormComponent
                handleChange={this.handleChange}
                data={this.state}
                content={this.props.content}
            />
        )
    }
}

export default FormContainer
