import React, { Component } from 'react';

class Input extends Component {
  render(){
    return(
      <div className="message-container">
        <label>Name: </label>
        <input id='nameInput' />
        <label> Message: </label>
        <input id='chatInput' />
        <button onClick={this.props.sendMessages}>Send</button>
        <button onClick={this.props.clearMessages}>Clear</button>
      </div>  
    )
  }
}

export default Input;