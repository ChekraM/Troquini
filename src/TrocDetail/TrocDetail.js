import React, { Component } from "react";
import "./TrocDetail.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks";
import MessageForm from "../MessageForm/MessageForm";

class TrocDetail extends Component {
  render() {
    const { trocList } = this.props;
    const troc = trocList.find(el => el._id === this.props.id);
    console.log(troc);
    return !troc ? (
      "Loading..."
    ) : (
      <Container fluid className="troc-detail-container">
        <Row className="troc-detail-header">
          <h1 className="page-title">Fiche Troc</h1>
        </Row>
        <Row>
          <Col className="troc-detail-column" xs="12" sm="12" md="9" lg="9">
            <Row className="troc-detail-up">
              <Col className="troc-photo" xs="12" sm="12" md="4" lg="4">
                <img src={"/" + troc.photo} alt="troc-photo" />
              </Col>
              <Col className="troc-description" xs="12" sm="12" md="8" lg="8">
                <Row>
                  <h3 className="font-weight-bold font-title">{troc.title}</h3>
                </Row>
                <Row>
                  <h4 className="font-weight-bold font-type">
                    {troc.typeO} d'un {troc.typeS}
                  </h4>
                </Row>
                <Row>
                  <h5 className="font-category">{troc.category}</h5>
                  <h5 className="font-description">{troc.description}</h5>
                  <h5 className="font-date">
                    Mis en ligne le : {troc.dateCreationTroc}
                  </h5>
                </Row>
                <Row>
                  <h3 className="font-vues">{troc.vuesNbre} vues</h3>
                </Row>
              </Col>
            </Row>
            <Row className="troc-detail-center">
              <Col className="social-media" xs="12" sm="12" md="4" lg="4">
                <h6 className="social-media-text">
                  Partagez ce troc avec vos amis :
                </h6>
                <SocialMediaLinks />
              </Col>
              <Col xs="12" sm="12" md="7" lg="7" />
            </Row>
            <Row className="troc-detail-down">
              <Col xs="12" sm="12" md="7" lg="7" />
              <Col
                className="troc-button-negociate"
                xs="12"
                sm="12"
                md="4"
                lg="4"
              >
                <MessageForm />
              </Col>
            </Row>
          </Col>
          <Col
            className="troc-detail-column profile-column"
            xs="12"
            sm="12"
            md="3"
            lg="3"
          >
            <img
              src={"/" + troc.userinfos[0].userPhoto}
              alt="user-photo"
              className="user-photo"
            />
            <h4 className="user-name">{troc.userinfos[0].pseudo}</h4>
            <h5 className="user-city">{troc.userinfos[0].userCity}</h5>
            <h4 className="postal-code">{troc.userinfos[0].postalCode}</h4>
            <Row className="counter">
              <Col className="counter-troc" xs="12" sm="12" md="11" lg="11">
                <img src="/carton.jpg" alt="troc-icon" className="troc-icon" />
                <h3 className="troc-comma">:</h3>
                <h3 className="troc-nbre">{troc.userinfos[0].userTrocNbre}</h3>
              </Col>
            </Row>
            <Row className="evaluation">
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
              <img
                src="/love.png"
                alt="love-icon"
                className="evaluation-icon"
              />
            </Row>
            <Row classID="profile-access">
              <Link to="/user-profile" className="user-profile">
                <h5 className="porfil-link-text">Voir le profil complet</h5>
              </Link>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default TrocDetail;
