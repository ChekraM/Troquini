import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./LogIn.css";
import axios from "axios";
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class LogIn extends React.Component {
  onLogin = () => {
    axios
      .post("/connect-user", { ...this.state })
      .then(res => {
        res.data.length === 0
          ? alert("Please to check your password or email")
          :this.props.onLogInReduxAction(res.data[0])
      })
      .catch(err => alert(err));
  };
  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      this.props.user.pseudo ?  <Redirect to="/"/> : 
      <div className="login-container">
        <div>
         <h1> <strong>Sign Up</strong></h1>
          <label className="email"> Email </label>
          <input name="email" onChange={this.onChange} />
        </div>
        <div>
          <label className="password"> Password </label>
          <input name="password" onChange={this.onChange} />
        </div>
        <button className="sign"  onClick={this.onLogin}> Log In </button>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user : state.userReducer
  }
}


const mapDispatchToProps = dispatch => {
  return {
    onLogInReduxAction : user => {
      dispatch({
        type : "LOG_IN",
        connectedUser :user
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
