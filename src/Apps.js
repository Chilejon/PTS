import React, {Component} from 'react'
import FormFieldSetContainer from './components/FormFieldSetContainer'
import EnterPreds from './EnterPreds'
import EnterMatches1 from './EnterMatches1'
import WeeklyTable from './WeeklyTable'
import RegisterUser from './RegisterUser';

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
                <RegisterUser />
                <WeeklyTable />
                <EnterMatches1 />
                <EnterPreds />
            </section>
        )
    }
}

export default Apps