import React from 'react';

class WeeklyTable extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.createPoints = this.createPoints.bind(this);
        this.calcMatchPts = this.calcMatchPts.bind(this);
        this.calcTotalCorrect = this.calcTotalCorrect.bind(this);

        this.listAllPredictions = this.listAllPredictions.bind(this);
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
                },
                {
                    username:"Perfect Pete",
                    weekno:'1',
                    h1pred:'3',
                    a1pred:'2',
                    h2pred:'1',
                    a2pred:'3',
                    points:''
                }
            ],
            points:[
            ]
        };
    }

    createPoints(item) {
        var accPoints = 0
        var totalCorrect = 0
        var ph = this.state.h1score
        var pa = this.state.a1score
        var rh = item.h1pred       
        var ra = item.a1pred
        accPoints += this.calcMatchPts(ph, pa, rh, ra)
        totalCorrect += this.calcTotalCorrect(ph, pa, rh, ra)
        var ph = this.state.h2score
        var pa = this.state.a2score
        var rh = item.h2pred       
        var ra = item.a2pred
        accPoints += this.calcMatchPts(ph, pa, rh, ra)
        totalCorrect += this.calcTotalCorrect(ph, pa, rh, ra)
    
        return <p>
        {item.username} : {accPoints} ({totalCorrect}) pts 
        </p>

      }

      calcMatchPts(ph, pa, rh, ra){
         
          var accPoints = 0
        if (rh === 9 && ra === 9)
        {
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
        return accPoints 
      }

      calcTotalCorrect(ph, pa, rh, ra){
        var totalCorrect = 0
          if (ph === rh && pa === ra )
          {
            totalCorrect += 1
          }
      return totalCorrect 
    }

      listAllPredictions(item)
      {
        return <section>
            
        <label>{item.username}</label>&nbsp;
        <strong>{item.h1pred}:{item.a1pred}</strong>&nbsp;
        <strong>{item.h2pred}:{item.a2pred}</strong>
        </section>
      }


    render() {
        var players = this.state.items;
        var listPoints = players.map(this.createPoints);
        var listPredictions = players.map(this.listAllPredictions);
        return (
            <div className="todoListMain">
                <div className="header">

     <section id="weeklyTable">
        <dt>Week {this.state.weekno} actual scores</dt>
        <dt>{this.state.h1team} <strong>{this.state.h1score}:
        {this.state.a1score}</strong> {this.state.a1team} </dt>
        <dt>{this.state.h2team} <strong>{this.state.h2score}:
        {this.state.a2score}</strong> {this.state.a2team} </dt>
     </section>

<br/>
    <section id="predictions">
            {listPredictions}
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