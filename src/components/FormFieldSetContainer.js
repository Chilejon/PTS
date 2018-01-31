import React, {Component} from 'react'
import FormFieldSet from './FormFieldSet'
//import validation from '../helpers/validation'
class FormFieldSetContainer extends Component{
    constructor(props){
       super(props)
        this.state = {
            validation:{
                isValid: false,
                validationMessage: ""
            },
            value: ""
        }
    }
    //onChangeHandler(event) {
  //      let isValidResult = validation(event.target.type, event.target.value)
  //      let customValidation
  //      if (this.props.customValidation)
  //      {
  //          customValidation = this.props.customValidation(event.target.value)
  //          if (customValidation.isValid !== true) {
  //              isValidResult = customValidation
  //          }
  //      }

        //this.setState({
  //          validation: isValidResult,
        //    value: event.target.value
        //})

        //this.props.onChangeHandler(event) //, isValidResult.isValid
    //}
    render(){
        return(
            <FormFieldSet id={this.props.id} label={this.props.label} type={this.props.type} value={this.props.value}   /> //onChangeHandler={this.onChangeHandler.bind(this)} //validation={this.state.validation}
        )
    }
}
export default FormFieldSetContainer