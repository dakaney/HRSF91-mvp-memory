import React from 'react';

class Rows extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      background: 'black',
      letter: '',
    }
    this.toggleSquare = this.toggleSquare.bind(this);
  }
  handleClick(e) {
    this.props.click(e, (color) => {
      this.toggleSquare(color);
    });
  }

  toggleSquare(color) {
    if (color === 'blue') {
      this.setState({
        background: color,
        letter: this.props.value,
      })
    } else {
      this.setState({
        background: color,
        letter: '',
      })
    }
  }

  render() { 
    return (
      <td className="keys" bgcolor={this.state.background} id={this.props.value} onClick={(e) => this.handleClick(e)}> {this.state.letter} </td>
    )
  }
}

export default Rows;