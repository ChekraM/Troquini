import React from "react";
import { Container, Row, Col, Mask, Fa, View, Button } from "mdbreact";
import "./LastTrocs.css";

const BlogPage = () => {
  return (
    <Container fluid className="back-grey">
      <h2 className="h1-responsive font-weight-bold text-center my-5 title">
        Nos derniers Trocs
      </h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Plus besoin d'argent, une autre façon de consommer, librement,
        écologiquement.
      </p>
      <Row>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img className="img-fluid" src="annonce1.jpg" alt="annonce1" />
            <Mask overlay="white-slight" />
          </View>
          <a className="pink-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="map" className="pr-2" />
              Je propose
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Je cuisine</strong>
          </h4>
          <p>
            <a className="font-weight-bold">Youssef Chahed</a>, 15/07/2018
          </p>
          <p className="dark-grey-text">
            Je propose de troquer ce livre qui contient 750 recettes contre un
            autre bien ou un service.
          </p>
          <Button color="pink" rounded size="md">
            Voir l'annonce
          </Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img className="img-fluid" src="annonce2.jpg" alt="annonce2" />
            <Mask overlay="white-slight" />
          </View>
          <a className="deep-orange-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="map" className="pr-2" />
              Je propose
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Photographe propose book</strong>
          </h4>
          <p>
            <a className="font-weight-bold">Hafedh Caïd Essebsi</a>, 13/07/2018
          </p>
          <p className="dark-grey-text">
            Photographe amateur depuis 15 ans propose book gratuit. Je me
            déplace sur tout le territoire...
          </p>
          <Button color="deep-orange" rounded size="md">
            Voir l'annonce
          </Button>
        </Col>
        <Col lg="4" md="12" className="mb-lg-0 mb-4">
          <View hover className="rounded z-depth-2 mb-4" waves>
            <img className="img-fluid" src="annonce3.jpg" alt="annonce3" />
            <Mask overlay="white-slight" />
          </View>
          <a className="blue-text">
            <h6 className="font-weight-bold mb-3">
              <Fa icon="fire" className="pr-2" />
              Je Recherche
            </h6>
          </a>
          <h4 className="font-weight-bold mb-3">
            <strong>Auto-construction et jardin bio</strong>
          </h4>
          <p>
            <a className="font-weight-bold">Foulen Ben Foulen</a>, 11/07/2018
          </p>
          <p className="dark-grey-text">
            Bonjour, j'ai besoin d'une aide pour le jardin bio et un peu de
            bricolage en auto-construction pierre...
          </p>
          <Button color="info" rounded size="md">
            Voir l'annonce
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
export default BlogPage;
