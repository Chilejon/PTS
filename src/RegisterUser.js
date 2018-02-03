import React, { Component } from 'react';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class RegisterUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username:'',
            password:'',
            email:'',
            dateCreated:'',
            defaults:''
        };
        this.addUser = this.addUser.bind(this);
    }
    addUser(e) {
       
            this.setState(
                {
                    username:this.username.value,
                    password:this.password.value,
                    email:this.email.value,
                    dateCreated:Date.now(),
                    defaults:true,
                    h1pred:9,
                    a1pred:9,
                    h2pred:9,
                    a2pred:9,
                    h3pred:9,
                    a3pred:9,
                    h4pred:9,
                    a4pred:9,
                    h5pred:9,
                    a5pred:9,
                    h6pred:9,
                    a6pred:9,
                    h7pred:9,
                    a7pred:9,
                    h8pred:9,
                    a8pred:9
                }
            )
       e.preventDefault();
    }

    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                    <form onSubmit={this.addUser}>
                        <section> Username:
                            <input id="username" ref={(a) => this.username = a} required></input>
                        </section>
                        <section> Password:
                            <input id="password" type="password" ref={(a) => this.password = a} required></input>
                        </section>
                        <section> Email:
                            <input id="email" type="email" ref={(a) => this.email = a} required></input>
                        </section>
                        <section>
                            <button type="submit">add</button>
                        </section>
                    </form>
                </div>
                <div>
                

     <div>
        <dt>{this.state.username} </dt>
        <dt>{this.state.password} </dt>
        <dt>{this.state.email}</dt>
        <dt>{this.state.dateCreated}</dt>
        <dt>{this.state.defaults}</dt>
        <dt>{this.state.h1pred}</dt>
        <dt>{this.state.a1pred}</dt>
        </div>
    
</div>
            </div>

        );
    }
};

export default RegisterUser;