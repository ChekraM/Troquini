import React, { Component } from 'react';
import Input from './Input';
import Messages from './Messages';

class ChatBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [
        
      ],
    };
  }

  render() {
    return (
      <div>
        <Messages messages={this.state.messages} />
        <Input
          sendMessages={this.getMessage}
          clearMessages={this.clearMessages}
        />
      </div>
    );
  }
  
  checkInput = () => {
    let chatInput = document.getElementById('chatInput').value;
    let nameInput = document.getElementById('nameInput').value;
    if(nameInput == '' && chatInput == '') {
      alert('Message and name cannot be empy!');
    } else if(chatInput == '') {
      alert('Message cannot be empy!');
    } else if(nameInput == '') {
      alert('Name cannot be empy!');
    } else {
      return {
        user: nameInput, 
        text: chatInput
      }
    }
  }
  
  getMessage = e => {
    e.preventDefault;
    let newMsg = this.checkInput();
    let messages = this.state.messages;
    messages.push(newMsg);
    this.setState({
      messages: messages
    })
    document.getElementById('chatInput').value = '';
    document.getElementById('nameInput').value = '';
  }

  clearMessages = e => {
    e.preventDefault;
    let msg = [];
    this.setState({
      messages: msg,
    });
  }
}

export default ChatBox;
