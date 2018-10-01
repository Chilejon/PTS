import React, {Component} from 'react'
import Prediction from './components/Prediction';

class Predictions extends Component{
state = {
    predictions: [
        { id: 1, value: 0},
        { id: 2, value: 2},
        { id: 3, value: 0},
        { id: 4, value: 4},
        { id: 5, value: 0},
    ]
}

render() {
        return (
            <section>
                {this.state.predictions.map(predictions => 
                <Prediction key={predictions.id}
                value={predictions.value}
                id={predictions.id} 
                />)}
            </section>
        )
    }
}

export default Predictions