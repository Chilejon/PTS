import React, { Component } from 'react';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class EnterMatches extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username:'',
            weekno:'1',
            h1:'',
            a1:'',
            h2:'',
            a2:''
        };
        this.addItem = this.addItem.bind(this);
    }
     
    //onChangeHandler(event) {
    //    console.log("app change handler hit")

    //}

    addItem(e) {
        var itemArray = this.state.items;
        
       // if (this.weekno.value !== "") {
           
           // itemArray.unshift(
           //     {
           //         username: this.username.value,
            //        weekno: this.weekno.value,
                   // h1: this.h1.value,
                   // a1: this.a1.value,
                   // h2: this.h2.value,
                   // a2: this.a2.value
                    //defaults: true
           //     }
           // );
            
            this.setState(
                {
                    username:this.username.value,
                    weekno:this.weekno.value,
                    
                    h1:this.h1.value,
                    a1:this.a1.value,
                    h2:this.h2.value,
                    a2:this.a2.value
                    //dateEntered: Date.now(),
                    //defaults:false
                }
            )
            
            //this.setState({
            //    items: itemArray
            //});
//            this.username.value = "";
           // this.weekno.value = 1;
        

        e.preventDefault();

    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addItem}>
                        <p>
                            <label >Week No.</label>
                            <select id="weekno" ref={(input) => this.weekno = input} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </p>
                        <p><input id="username" ref={(a) => this.username = a} required value="Joe.Bloggs"></input></p>
                        <p> Match 1:
                        <FormFieldSetContainer label="h1" id="h1" type="text" ref={(a) => this.h1 = a}  />
                        <label> V </label>
                        <FormFieldSetContainer label="a1" id="a1" type="text"  />
                        </p>
                        <p> Match 2:
                        <FormFieldSetContainer label="h2" id="h2" type="text"  />
                        <label> V </label>
                        <FormFieldSetContainer label="a2" id="a2" type="text"  /> 
                        </p>
                        <p>
                            <button type="submit">add</button>
                        </p>
                    </form>
                </div>
                <div>
                

     <div>
         <dt>{this.state.username}</dt>
        <dt>{this.state.weekno}</dt>
        <dt>{this.state.h1} : {this.state.a1}</dt>
        <dt>{this.state.h2} : {this.state.a2}</dt>
        </div>
    
</div>
            </div>

        );
    }
};

export default EnterMatches;