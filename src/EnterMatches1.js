import React, { Component } from 'react';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class EnterMatches1 extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
          
        };
        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        
          var matchesdate = new Date(this.dateofmatches.value).toDateString("DD/MM/YYYY");

            this.setState(
                {
                    weekno:this.weekno.value,
                    h1team:this.h1team.value,
                    a1team:this.a1team.value,
                    h2team:this.h2team.value,
                    a2team:this.a2team.value,
                    dateofmatches:matchesdate,
                    dateEntered: Date.now(),
                    defaults:false
                }
            )
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

                        <section>
                            <label>Date of Matches</label>
                        <input id="dateofmatches" ref={(a) => this.dateofmatches = a} type="date"></input>
                            </section>
                        <section> Match 1:
                        <input id="h1team" ref={(a) => this.h1team = a} required></input>
                        <label> V </label>
                        <input id="a1team" ref={(a) => this.a1team = a} required></input>
                        </section>
                        <section> Match 2:
                        <input id="h2team" ref={(a) => this.h2team = a} required></input>
                        <label> V </label>
                        <input id="a2team" ref={(a) => this.a2team = a} required></input>
                        </section>
                        <section>
                            <button type="submit">add</button>
                        </section>
                    </form>
                </div>
                <div>
                

     <div>
        <dt>{this.state.weekno}</dt>
        <dt>{this.state.dateofmatches}</dt>
        
        <dt>{this.state.h1team} </dt>
        <dt>{this.state.a1team} </dt>
        <dt>{this.state.h2team}</dt>
        <dt>{this.state.a2team}</dt>
        </div>
    
</div>
            </div>

        );
    }
};

export default EnterMatches1;