import React, { Component } from 'react';

class EnterPreds extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
    }

    addItem(e) {
        var itemArray = this.state.items;
        if (this.username.value !== "") {
            itemArray.unshift(
                {
                    username: this.username.value,
                    dateEntered: Date.now(),
                    weekno: this.weekno.value,
                    h1: this.h1.value,
                    a1: this.a1.value,
                    h2: this.h2.value,
                    a2: this.a2.value
                }
            );

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
                            <input id="username" ref={(a) => this.username = a} required value="Joe.Bloggs"></input>
                        </p>
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
          <label >Team A</label>
                            <select id="h1" ref={(input) => this.h1 = input}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            <label >Team B</label>
                            <select id="a1" ref={(input) => this.a1 = input}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </p>
                        <p> Match 2:
          <label >Team C</label>
                            <select id="h2" ref={(input) => this.h2 = input}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            <label >Team D</label>
                            <select id="a2" ref={(input) => this.a2 = input}>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </p>
                        <p>
                            <button type="submit">add</button>
                        </p>
                    </form>
                </div>
                <div>
                
               {this.state.items.map(item => {
    return ( <div>{item.username}>
        <dt>{item.weekno}</dt>
        <dt>{item.h1}</dt>
        <dt>{item.a1}</dt>
        <dt>{item.h2}</dt>
    
        <dt>{item.a2}</dt>
        </div>)
    })
}

</div>
            </div>

        );
    }
};

export default EnterPreds;