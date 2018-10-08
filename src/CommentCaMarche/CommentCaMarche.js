import React, { Component } from "react";
import "./CommentCaMarche.css";
import { Container, Row, Col, Button, Fa, Card } from "mdbreact";

class CommentCaMarche extends Component {
  render() {
    return (
      <Container>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold my-5 title">
            Comment troquer ?
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Tout le monde peut utiliser Troquini, et faire des économies.
          </p>
          <Row>
            <Col md="12" className="mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage: "url(troc1.png)",
                  backgroundSize: "cover"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="white-text">
                      <Fa icon="smile-o" />
                      <strong> Pourquoi je troque ?</strong>
                    </h6>
                    <p className="pb-3">
                      Pour les amateurs de bons plans, du système D, pour tous
                      les écolos et pour tous ceux qui ont envie de consommer
                      autrement, consommer responsable, Troquini est un moyen
                      simple et inédit de prêter et d'échanger en ligne des
                      biens et des services.
                    </p>
                    <p className="pb-3">
                      <strong>
                        Ce que nous voulons c'est réduire la surconsommation,
                        faire des économies, et développer la solidarité et le
                        partage en adaptant le troc au monde d'aujourd'hui.
                      </strong>
                    </p>
                    <p className="pb-3">
                      Troquini c'est une chaine humaine, un réseau social, une
                      communauté, un monde d'échange et d'entraide pour
                      améliorer son quotidien.
                    </p>
                    <Button color="secondary" rounded size="md">
                      <Fa icon="clone" className="left" /> En savoir plus
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage: "url(échane1.png)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="white-text">
                      <Fa icon="pie-chart" />
                      <strong> Je propose un Troc</strong>
                    </h6>
                    <p className="pb-3">
                      <img className="num-icon" src="1.png" alt="num-icon-1" />{" "}
                      Je mets mon annonce en ligne. <br />
                      <img
                        className="num-icon"
                        src="2.png"
                        alt="num-icon-2"
                      />{" "}
                      Quand un troqueur me fait une demande je l'accepte si elle
                      me convient. <br />
                      <img
                        className="num-icon"
                        src="3.png"
                        alt="num-icon-3"
                      />{" "}
                      Une fois le troc réalisé, je laisse une évaluation.
                    </p>
                    <Button color="pink" rounded size="md">
                      <Fa icon="clone" className="left" /> En savoir plus
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
            <Col md="6" className="md-0 mb-4">
              <Card
                className="card-image"
                style={{
                  backgroundImage: "url(échange2.jpg)"
                }}
              >
                <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4 rounded">
                  <div>
                    <h6 className="white-text">
                      <Fa icon="eye" />
                      <strong> Je recherche un Troc</strong>
                    </h6>
                    <p className="pb-3">
                      <img className="num-icon" src="1.png" alt="num-icon-1" />
                      Je fais une recherche par catégories ou sur la carte.
                      <br />
                      <img className="num-icon" src="2.png" alt="num-icon-2" />
                      Je peux réserver directement le troc, le négocier via
                      notre messagerie interne ou simplement envoyer un message.{" "}
                      <br />
                      <img className="num-icon" src="3.png" alt="num-icon-3" />
                      Une fois le troc réalisé, je laisse une évaluation.
                    </p>
                    <Button color="success" rounded size="md">
                      <Fa icon="clone" className="left" /> En savoir plus
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </section>
      </Container>
    );
  }
}

export default CommentCaMarche;
