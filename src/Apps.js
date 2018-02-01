import React, {Component} from 'react'
import FormFieldSetContainer from './components/FormFieldSetContainer'
import EnterPreds from './EnterPreds'
import EnterMatches1 from './EnterMatches1'
import WeeklyTable from './WeeklyTable'

class Apps extends Component{

    constructor(props){

        super(props)

        this.state= {}
    }
    onChangeHandler(event) {
        console.log("app change handler hit")

    }

 

    render() {

        return (

            <section>
                <WeeklyTable />
                <EnterMatches1 />
                <EnterPreds />
                </section>
                
           // <section>
           //    <FormFieldSetContainer label="Simple date" id="dateofevent" type="date" onChangeHandler={this.onChangeHandler.bind(this)} />
           // </section>

        )

    }

}

 

export default Apps