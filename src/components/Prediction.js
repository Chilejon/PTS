import React, {Component} from 'react'

class Prediction extends Component {

    state = {
        value: this.props.value
    }

render(){

return(
    <div>
        <label>This {this.state.value}</label>
        <select>
            <option value='0'>0</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
            
        </select>
    </div>
    )
}
}
export default Prediction