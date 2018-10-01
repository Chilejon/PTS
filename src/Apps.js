import React, {Component} from 'react'
import FormFieldSetContainer from './components/FormFieldSetContainer'
import EnterPreds from './EnterPreds'
import EnterMatches from './EnterMatches'
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

    // <WeeklyTable />
//     <br>
//         <RegisterUser />
//<EnterPreds />


    render() {
        return (
            
            <div className="ptsMain">

            
       
                <EnterMatches />
            </div>
        )
    }
}

export default Apps