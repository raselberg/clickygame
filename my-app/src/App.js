import React, { Component } from "react";
import Cards from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Counter from "./components/Counter";
import crystals from "./Cards.json";
import "./App.css";

class App extends Component {
  // Setting this.state.crystals to the cards json array
  state = {
    crystals,
    clickedCrystalIds: [],
    score: 0,
    goal: 8,
    status: ""
  };


  shuffleScoreCard = id => {
    let clickedCrystalIds = this.state.clickedCrystalIds;

    if(clickedCrystalIds.includes(id)){
      this.setState({ clickedCrystalIds: [], score: 0, status:  "Game Over! Click to play again!" });
      return;
    }else{
      clickedCrystalIds.push(id)

      if(clickedCrystalIds.length === 8){
        this.setState({score: 8, status: "You Won! Click to play again!", clickedCrystalIds: []});
        console.log('You Win');
        return;
      }

      this.setState({ crystals, clickedCrystalIds, score: clickedCrystalIds.length, status: " " });

      for (let i = crystals.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [crystals[i], crystals[j]] = [crystals[j], crystals[i]];
      }
    }
  }

  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Clicky Crystal Game</h1>
        </header>
        <Counter total={this.state.score}
               goal={8}
               status={this.state.status}
               />
        <Wrapper>
          {this.state.crystals.map(crystal => (
            <Cards
              shuffleScoreCard={this.shuffleScoreCard}
              id={crystal.id}
              key={crystal.id}
              image={crystal.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
