import React from 'react';

class Rows extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      background: "black",
    }
    this.toggleSquare = this.toggleSquare.bind(this);
  }
  handleClick(e) {
    this.props.click(e, (color) => {
      this.toggleSquare(color);
    });
  }

  toggleSquare(color) {
    this.setState({
      background: color,
    })
  }

  render() { 
    return (
      <td className="keys" bgcolor={this.state.background} id={this.props.value} onClick={(e) => this.handleClick(e)}> {this.props.value} </td>
    )
  }
}

export default Rows;