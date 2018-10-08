import React, { Component } from "react";
import "./Input.css";

class Messages extends Component {
  render() {
    return (
      <div className="messageBox">
        {this.props.messages.map(message => (
          <p>
            <b>{message.user}: </b>
            {message.text}
          </p>
        ))}
      </div>
    );
  }
}

export default Messages;
