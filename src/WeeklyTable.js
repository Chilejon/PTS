import React from 'react';

class WeeklyTable extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            weekno:'1',
            h1team:'England',
            a1team:'Russia',
            h2team:'Wales',
            a2team:'Spain',
            h1score:'2',
            a1score:'1',
            h2score:'1',
            a2score:'3',
            items: [
                {
                    username:"Jon Chiles",
                    weekno:'1',
                    h1pred:'2',
                    a1pred:'1',
                    h2pred:'1',
                    a2pred:'2'
                },
                {
                    username:"David Meek",
                    weekno:'1',
                    h1pred:'3',
                    a1pred:'0',
                    h2pred:'1',
                    a2pred:'0'
                }
            ]
        };
        
    }




    render() {
        return (
            <div className="todoListMain">
                <div className="header">
                   

     <div>
        <dt>{this.state.weekno}</dt>
        <dt>{this.state.h1team} : {this.state.h1score}</dt>
        <dt>{this.state.a1team} : {this.state.a1score}</dt>
        <dt>{this.state.h2team} : {this.state.h2score}</dt>
        <dt>{this.state.a2team} : {this.state.a2score}</dt>
        </div>
    
</div>
            </div>

        );
    }
};

export default WeeklyTable;