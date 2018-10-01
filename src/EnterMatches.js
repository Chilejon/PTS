import React, { Component } from 'react';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class EnterMatches extends React.Component {
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
                weekno: this.weekno.value,
                h1team: this.h1team.value,
                a1team: this.a1team.value,
                h2team: this.h2team.value,
                a2team: this.a2team.value,
                dateofmatches: matchesdate,
                dateEntered: Date.now(),
                defaults: false
            }
        )
        e.preventDefault();
    }

    render() {
        return (
  <div>
                <h1>Enter matches</h1>
                <a href="RegisterUser">Register</a>        
                    <form onSubmit={this.addItem}>
                        <div className="matches">
                        <div>
                            <label >Week No.</label>
                            <select id="weekno" ref={(input) => this.weekno = input} >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div>
                            <label>Date of Matches</label>
                            <input id="dateofmatches" ref={(a) => this.dateofmatches = a} type="date"></input>
                        </div>
                        <div>
                         <label>Match 1:</label>
                        <input id="h1team" ref={(a) => this.h1team = a} required></input>
                            V
                            <input id="a1team" ref={(a) => this.a1team = a} required></input>
                        </div>
                        <div>
                         <label>Match 2:</label>
                        <input id="h2team" ref={(a) => this.h2team = a} required></input>
                            V
                            <input id="a2team" ref={(a) => this.a2team = a} required></input>
                        </div>
                       <div>
                            <button type="submit">add</button>
                        </div>
</div>
                    </form>




                    <div>
                        <dt>{this.state.weekno}</dt>
                        <dt>{this.state.dateofmatches}</dt>
                        <dt>{this.state.h1team} </dt>
                        <dt>{this.state.a1team} </dt>
                        <dt>{this.state.h2team}</dt>
                        <dt>{this.state.a2team}</dt>
                    </div>
</div>
        );
    }
};

export default EnterMatches;