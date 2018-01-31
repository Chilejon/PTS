import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class App extends Comment { //React
  constructor(props){
    super(props)
  }

  onChangeHandler(event) {

    console.log("app change handler hit")

}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">PTS</h1>
        </header>

        <section>
          <FormFieldSetContainer label="Simple date" id="dateofevent" type="date" onChangeHandler={this.onChangeHandler.bind(this)} />
        </section>

          <form>
          <button value="enterPred">Enter Preditions</button>
          </form>

      </div>
    );
  }
}

export default App


class App extends Component{

  constructor(props){

      super(props)

      this.state= {

          options:

              [

                  {

                      name:"Snickers", value:"snickers"

                  },

                  {

                      name:"Twiglets", value:"twiglets"

                  },

                  {

                      name:"Chedders", value:"chedders"

                  }

              ]

      }

  }



  onChangeHandler(event) {

      console.log("app change handler hit")

  }



  render() {

      return (

          <section>

              <FormFieldSetContainer label="E-mail" type="email" id="test-app" onChangeHandler={this.onChangeHandler.bind(this)}  />

              <FormFieldSetContainer label="Custom field" type="email" id="test-app" onChangeHandler={this.onChangeHandler.bind(this)} customValidation={ (value) => {

                  if (value.length > 3) {

                      return {

                          isValid: true,

                          validationMessage: ''

                          }

                  } else {

                      return {

                          isValid: false,

                          validationMessage: 'Invalid'

                      } 

                  }

                      }} />

             <SelectInputContainer label="Snack" id="snack-select" onChange={this.onChangeHandler.bind(this)} placeholder="Select one" options={this.state.options}  />

             <FormTextAreaContainer label="Comments" id="comments" value="fdgds" name="dfddf" />

             <FormFieldSetContainer label="Simple date" id="dateofevent" type="date" onChangeHandler={this.onChangeHandler.bind(this)} />

             <RadioInputContainer label="Are you?" id="areyou" name="dfddf" onChangeHandler={this.onChangeHandler.bind(this)} />



          </section>

      )

  }

}



export default App
