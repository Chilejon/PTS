import React, { Component } from 'react';
import FormFieldSetContainer from './components/FormFieldSetContainer'

class RegisterUser extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
        this.addItem = this.addUser.bind(this);
    }
    addUser(e) {
            this.setState(
                {
                    username:this.username.value,
                    password:this.username.value,
                    email:this.password.value,
                    dateCreated:Date.now(),
                    defaults:true
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
                            <input id="password" ref={(a) => this.Password = a} required></input>
                        </section>
                        <section> Email:
                            <input id="email" ref={(a) => this.Email = a} required></input>
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
        
        </div>
    
</div>
            </div>

        );
    }
};

export default RegisterUser;