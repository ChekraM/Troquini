import React, { Component } from "react";
import "./Message.css";
import { Container, Row, Col, Button } from "reactstrap";

class Message extends Component {
  render() {
    return (
      <Container className="message-container">
        <Row className="message-header">
          <h1 className="page-title">Mes Messages</h1>
        </Row>
        <Row className="message-body px-lg-2 px-2">
          <Col md="6" xl="4" className="px-0">
            <h6 className="font-weight-bold mb-3 text-center text-lg-left">
              Member
            </h6>
            <div className="white z-depth-1 px-3 pt-3 pb-0">
              <ul className="list-unstyled friend-list">
                <li className="active grey lighten-3 p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="profile.png"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                      style={{width:"20%"}}
                    />
                    <div className="text-small">
                      <strong>L'équipe Trokini</strong>
                      <p className="last-message text-muted">
                        L'équipe Trokini vous souhaite la bienvenue.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">2 days ago</p>
                      <span className="badge badge-danger float-right">1</span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="profile.png"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                      style={{width:"20%"}}
                    />
                    <div className="text-small">
                      <strong>Danny Smith</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">5 min ago</p>
                      <span className="text-muted float-right">
                        <img
                          src="mail-reply.png"
                          icon="mail-reply"
                          style={{ width: "10%" }}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                    />
                    <div className="text-small">
                      <strong>Alex Steward</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">Yesterday</p>
                      <span className="text-muted float-right">
                        <img
                          src="mail-reply.png"
                          icon="mail-reply"
                          style={{ width: "10%" }}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-3"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                    />
                    <div className="text-small">
                      <strong>Ashley Olsen</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">Yesterday</p>
                      <span className="text-muted float-right">
                        <img
                          src="mail-reply.png"
                          icon="mail-reply"
                          style={{ width: "10%" }}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-4"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                    />
                    <div className="text-small">
                      <strong>Kate Moss</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">Yesterday</p>
                      <span className="text-muted float-right">
                        <img
                          src="mail-reply.png"
                          icon="mail-reply"
                          style={{ width: "10%" }}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                    />
                    <div className="text-small">
                      <strong>Lara Croft</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">Yesterday</p>
                      <span className="text-muted float-right">
                        <img
                          src="mail-reply.png"
                          icon="mail-reply"
                          style={{ width: "10%" }}
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </a>
                </li>
                <li className="p-2">
                  <a href="#" className="d-flex justify-content-between">
                    <img
                      src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                      alt="avatar"
                      className="avatar rounded-circle d-flex align-self-center z-depth-1"
                    />
                    <div className="text-small">
                      <strong>Brad Pitt</strong>
                      <p className="last-message text-muted">
                        Lorem ipsum dolor sit.
                      </p>
                    </div>
                    <div className="chat-footer">
                      <p className="text-smaller text-muted mb-0">5 min ago</p>
                      <span className="text-muted float-right">
                        <img
                          src="check-icon.png"
                          icon="check"
                          aria-hidden="true"
                          style={{ width: "10%" }}
                        />
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col md="6" xl="8" className="pl-md-3 px-lg-auto px-0">
            <div className="chat-message">
              <ul className="list-unstyled chat">
                <li className="d-flex justify-content-between mb-4">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                    alt="avatar"
                    className="avatar rounded-circle ml-lg-3 ml-0 z-depth-1"
                  />
                  <div className="chat-body white p-3 ml-2 z-depth-1">
                    <div className="header">
                      <strong className="primary-font">Brad Pitt</strong>
                      <small className="pull-right text-muted">
                        <img
                          src="clock-icon.png"
                          icon="clock-o"
                          style={{ width: "10%" }}
                        />{" "}
                        12 mins ago
                      </small>
                    </div>
                    <hr className="w-100" />
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
                <li className="d-flex justify-content-between mb-4">
                  <div className="chat-body white p-3 z-depth-1">
                    <div className="header">
                      <strong className="primary-font">Lara Croft</strong>
                      <small className="pull-right text-muted">
                        <img
                          src="clock-icon.png"
                          icon="clock-o"
                          style={{ width: "10%" }}
                        />{" "}
                        13 mins ago
                      </small>
                    </div>
                    <hr className="w-100" />
                    <p className="mb-0">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium.
                    </p>
                  </div>
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5"
                    alt="avatar"
                    className="avatar rounded-circle mr-0 ml-3 z-depth-1"
                  />
                </li>
                <li className="d-flex justify-content-between mb-4 pb-3">
                  <img
                    src="https://mdbootstrap.com/img/Photos/Avatars/avatar-6"
                    alt="avatar"
                    className="avatar rounded-circle ml-lg-3 ml-0 z-depth-1"
                  />
                  <div className="chat-body white p-3 ml-2 z-depth-1">
                    <div className="header">
                      <strong className="primary-font">Brad Pitt</strong>
                      <small className="pull-right text-muted">
                        <img
                          src="clock-icon.png"
                          icon="clock-o"
                          style={{ width: "10%" }}
                        />{" "}
                        12 mins ago
                      </small>
                    </div>
                    <hr className="w-100" />
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </li>
                <li className="white">
                  <div className="form-group basic-textarea">
                    <textarea
                      className="form-control pl-2 my-0"
                      id="exampleFormControlTextarea2"
                      rows="3"
                      placeholder="Type your message here..."
                    />
                  </div>
                </li>
                <Button color="info" rounded size="sm" className="float-right">
                  Send
                </Button>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Message;
