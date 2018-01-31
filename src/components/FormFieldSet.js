import React from 'react'
const FormFieldSet =  (props) => {
    return(
        <fieldset>
            <label htmlFor={props.id}>{props.label}</label>
            <input  name={props.id} type={props.type} id={props.id} value={props.value}  />
            
        </fieldset>
    )
}
export default FormFieldSet