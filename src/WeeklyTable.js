import React from 'react';

class WeeklyTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createPoints = this.createPoints.bind(this);
        this.state = {

            weekno:'1',
            h1team:'England',
            a1team:'Russia',
            h2team:'Wales',
            a2team:'Spain',
            h1score:'3',
            a1score:'2',
            h2score:'1',
            a2score:'3',
            items: [
                {
                    username:"Jon Chiles",
                    weekno:'1',
                    h1pred:'2',
                    a1pred:'1',
                    h2pred:'1',
                    a2pred:'2',
                    points:''
                },
                {
                    username:"David Meek",
                    weekno:'1',
                    h1pred:'3',
                    a1pred:'0',
                    h2pred:'1',
                    a2pred:'0',
                    points:''
                }
            ],
            points:[
            ]
        };
    }

    createPoints(item) {
        var accPoints = 0
        var ph = this.state.h1score
        var pa = this.state.a1score
        var rh = item.h1pred       
        var ra = item.a1pred

        if (rh === 9 && ra === 9)
        {
            //no score 
        }
        else
        {
            if (ph === rh && pa === ra )
            {
                accPoints += 5
            }
            else
            {
                if ((rh > ra && ph > pa) || (rh < ra && ph < pa) || (rh === ra && ph === pa))
                {
                    accPoints += 2;
                    var rdiff = Math.abs(rh - ra);
                    var pdiff = Math.abs(ph - pa);
                    if (rdiff == pdiff)
                    {
                        accPoints += 1;
                    }
                }
                else
                {
                    if (rh == ph || ra == pa)
                    {
                        accPoints = 1;
                    }
                }         
            }    
        }
       
       // if (this.state.h2score === item.h2pred)
       // {
       //     accPoints += 1
       // }
       // if (this.state.a2score === item.a2pred)
       // {
       //     accPoints += 1
       // }
        


        return <p>
        {item.username} : {accPoints} pts 
        </p>

      }

 

    render() {

        var players = this.state.items;

        var listPoints = players.map(this.createPoints);

 

        return (

            <div className="todoListMain">

                <div className="header">

                  

 

     <section id="weeklyTable">

        <dt>Week {this.state.weekno} actual scores</dt>

        <dt>{this.state.h1team} {this.state.h1score} :

        {this.state.a1score} {this.state.a1team} </dt>

        <dt>{this.state.h2team} {this.state.h2score} :

        {this.state.a2score} {this.state.a2team} </dt>

     </section>

 

     <section id="predictions">

        <table>

            <tr>

            <th>Name</th><th>Match 1</th><th>Match 2</th>

            </tr>

            <tr>

            <td>{this.state.items[0].username}</td>

            <td>{this.state.items[0].h1pred}:{this.state.items[0].a1pred}</td>

            <td>{this.state.items[0].h2pred}:{this.state.items[0].a2pred}</td>

            </tr>

            <tr>

            <td>{this.state.items[1].username}</td>

            <td>{this.state.items[1].h1pred}:{this.state.items[1].a1pred}</td>

            <td>{this.state.items[1].h2pred}:{this.state.items[1].a2pred}</td>

            </tr>

        </table>

    </section>

 

    <section id="table">

 

        {listPoints}

 

    </section>

 

   

</div>

            </div>

 

        );

    }

};

 

export default WeeklyTable;