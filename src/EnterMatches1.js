import React, { Component } from 'react';

class EnterMatches1 extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            weekno:'1',
            h1team:'England',
            a1team:'Russia',
            h2team:'Wales',
            a2team:'Spain',
        };
        this.addItem = this.addItem.bind(this);
    }

 

    addItem(e) {
        var itemArray = this.state.items;
        if (this.username.value !== "") {
            itemArray.unshift(
                {
                    dateEntered: Date.now(),
                    weekno: this.weekno.value,
                    h1team: this.hteam1.value,
                    a1team: this.ateam1.value,
                    h2team: this.hteam2.value,
                    a2team: this.ateam2.value,
                }
            );

            this.setState(
                {
                    
                    weekno:this.weekno.value,
                    hteam1:this.hteam1.value,
                    ateam1:this.ateam1.value,
                    hteam2:this.hteam2.value,
                    ateam2:this.ateam2.value,
                    dateEntered: Date.now(),
                }
            )

            this.setState({
                items: itemArray
            });

            this.username.value = "";
            this.weekno.value = 1;
        }

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
                        <p> Match 1:
                            <input id="h1team" ref={(a) => this.h1team = a}></input>
                            <input id="a1team" ref={(a) => this.a1team = a}></input>
                        </p>
                        <p> Match 2:
                            <input id="h2team" ref={(a) => this.h2team = a}></input>
                            <input id="a2team" ref={(a) => this.a2team = a}></input>
                        </p>
                        <p>
                            <button type="submit">add</button>
                        </p>



                    </form>
                </div>
                <div>
                

     <div>
                 <dt>{this.state.weekno}</dt>
        <dt>{this.state.h1team} </dt>
        <dt>{this.state.a1team} </dt>
        <dt>{this.state.h2team} </dt>
        <dt>{this.state.a2team} </dt>
        </div>
    
</div>
            </div>

        );
    }
};

export default EnterMatches1;