  import React from 'react';
import Table from './Table';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: 5,
      column: 6,
      possibleCards: [ 'A', 'B', 'D', 'E', 'C', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 
                      'A', 'B', 'D', 'E', 'C', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'],
      clicks: 1,
      firstClick: '',
      firstValue: '',
      correct: 0,
      totalClicks: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {

  }
  handleClick (e, func) {
    if (this.state.clicks === 1) {
      this.state.clicks++;
      this.state.firstClick = func;
      this.state.firstValue = e.target.id;
      this.state.totalClicks++
      func("blue");
    } else if (this.state.clicks === 2 && this.state.firstValue !== e.target.id) {
      this.state.clicks = 3;
      func("blue");
      setTimeout(() => {
        this.state.firstClick("black");
        this.state.clicks = 1;
        func("black"); 
      },800)
      this.state.totalClicks++
    } else if (this.state.clicks === 3){
    } else if (this.state.clicks === 2 && this.state.firstValue === e.target.id) {
      func("blue");
      this.state.correct++;
      this.state.clicks = 1;
      this.state.totalClicks++
    } 
    if (this.state.correct === 15){
      window.alert(`you win! ${this.state.totalClicks} clicks made!`);
    }
  }

  render() {
    let createRows = [];
    let cards = [];
    for (let i = 0; i < this.state.rows; i++){
      for (let j = 0; j < this.state.column; j++){
        let chosen = Math.floor(Math.random() * this.state.possibleCards.length)
        cards.push(this.state.possibleCards[chosen]);
        this.state.possibleCards.splice(chosen, 1)
      }
      createRows.push(<Table key={i} col={this.state.column} cards={cards} click={this.handleClick}/>)
    }
    return (
      <div>
      <table className="Table">
      <tbody>{createRows}</tbody>
      </table>
      </div>
    );
  }

}

export default App;