import React, { Component } from "react";
import "./FavoriteTroc.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const FavoriteTroc = props => {
  return (
    <Row className="favorite-troc">
      <Col xs="12" sm="12" md="5" lg="5" className="favorite-troc-item">
        <Row>
          <Col xs="5" sm="5" md="5" lg="5" className="fav-troc-img-container">
            <img src="annonce1.jpg" className="favorite-troc-img" />
          </Col>
          <Col xs="7" sm="7" md="7" lg="7" className="side-front-content">
            <h6
              className="font-weight-bold font-color-gold"
              style={{ fontSize: "12px", paddingLeft: "2px" }}
            >
              Je cuisine
            </h6>
            <h6
              className="font-weight-bold font-color-blue"
              style={{ fontSize: "11px", paddingLeft: "2px" }}
            >
              Offre d'un Bien
            </h6>
            <h6
              className="font-color-grey"
              style={{ fontSize: "10px", paddingLeft: "2px" }}
            >
              Youssef Chahed
            </h6>
          </Col>
        </Row>
      </Col>
      <Col xs="12" sm="12" md="5" lg="5" className="favorite-troc-item">
        <Row>
          <Col xs="5" sm="5" md="5" lg="5" className="fav-troc-img-container">
            <img src="annonce2.jpg" className="favorite-troc-img" />
          </Col>
          <Col xs="7" sm="7" md="7" lg="7" className="side-front-content">
            <h6
              className="font-weight-bold font-color-gold"
              style={{ fontSize: "12px", paddingLeft: "2px" }}
            >
              Photographe propose book
            </h6>
            <h6
              className="font-weight-bold font-color-blue"
              style={{ fontSize: "11px", paddingLeft: "2px" }}
            >
              Offre d'un Service
            </h6>
            <h6
              className="font-color-grey"
              style={{ fontSize: "10px", paddingLeft: "2px" }}
            >
              Hafedh Caïd Essebsi
            </h6>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default FavoriteTroc;
