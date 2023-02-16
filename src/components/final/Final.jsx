import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/Final.css';

import Wallpaper from '../../assets/images/wallpaper_fin.jpg';
import Heros from '../../assets/images/heros/hero_coucou.png';

class Final extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        topPlayers: [],
        buttonClickedOnce: false
      }
    }
    render() {
        return (
            <div className="App">
              <div className='App-header'>
                <img src={Wallpaper} alt="" id='bg' />
                <h1>Merci d'avoir joué</h1>
                <label>Veuillez entrer votre surnom pour voir votre score et voir le leaderboard</label>
                <br />
                <input type="text" id="nickname"/>
                <br />
                <button onClick={() => {
                    if (!this.state.buttonClickedOnce) {
                        const nickname = document.getElementById("nickname").value;
                        const timeScore = (Date.now() - localStorage.getItem('start')) / 1000;

                        const yourScore = document.getElementById("your-score");
                        yourScore.textContent = 'YOUR SCORE : ' + timeScore + ' secondes';

                        fetch('http://localhost:2999/addScore', {
                            method: 'POST', // or 'PUT'
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({"nickname": nickname, "score": timeScore}),
                        }).then(response => {
                            fetch('http://localhost:2999/getTop', {
                                crossorigin:true,
                                method: 'GET',
                                headers: {'Content-Type':'application/json'}
                            })
                            .then(response => response.json())
                            .then(data => this.setState({ topPlayers: data.scores, buttonClickedOnce: true }, ()=> {
                                console.log(this.state);
                                this.state.topPlayers.forEach((score, index) => {
                                    let newLine = document.createElement("tr");
                                    let col1 = document.createElement("td");
                                    let col2 = document.createElement("td");
                                    let col3 = document.createElement("td");

                                    col1.textContent = `${index+1}`;
                                    col2.textContent = score.nickname;
                                    col3.textContent = score.score + ' secondes';

                                    newLine.appendChild(col1);
                                    newLine.appendChild(col2);
                                    newLine.appendChild(col3);

                                    let leaderboard = document.getElementById("leaderboard");
                                    leaderboard.appendChild(newLine);
                                })
                            }));
                        })
                    }
                }}>Voir mon score</button>

                <table id="leaderboard">
                    <tr>
                        <th>Number</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </table>

                <h2 id='your-score'></h2>

                <img src={Heros} alt="" id="heros" />
                <p id="names">Luka BURIAN, Naël DECHARTRE, Hugo DE BATY, Eliot LE BRICON</p>
              </div>
            </div>);
    }
  }

export default Final;