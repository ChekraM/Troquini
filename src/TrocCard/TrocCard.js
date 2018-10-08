import React, { Component } from "react";
import "./TrocCard.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";

const CardFront = props => {
  return (
    <div className="card-side side-front">
      <div>
        <div>
          <div className="img">
            <img src={props.troc.photo} />
          </div>
          <div className="side-front-content">
            <h6 className="font-weight-bold font-color-gold">
              {props.troc.title}
            </h6>
            <h6 className="font-weight-bold font-color-blue">
              {props.troc.typeO} d'un {props.troc.typeS}
            </h6>
            <h6 className="font-color-grey">
              {props.troc.userFirstName} {props.troc.userLastName}
            </h6>
            <p className="font-color-pink">
              Mis en ligne le {props.troc.dateCreationTroc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardBack = props => {
  return (
    <div className="card-side side-back">
      <div className="container-fluid">
        <h6 className="font-weight-bold font-color-gold">Description</h6>
        <hr />
        <p>{props.troc.description}</p>
        <hr />
        <SocialMediaLinks />
      </div>
    </div>
  );
};

const TrocCard = props => {
  return (
    <Col xs="12" sm="12" md="4" lg="4" className="card-container">
      <Link to={`/troc-detail/${props.troc._id}`} className="card-body">
        <CardFront troc={props.troc} />
        <CardBack troc={props.troc} />
      </Link>
    </Col>
  );
};

export default TrocCard;
