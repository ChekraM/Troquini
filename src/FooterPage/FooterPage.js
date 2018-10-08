import React from "react";
import "./FooterPage.css";
import { Col, Container, Row, Footer } from "mdbreact";

class FooterPage extends React.Component {
  render() {
    return (
      <Footer color="stylish-color-dark" className="font-small pt-4 mt-4">
        <Container fluid className="text-center text-md-left">
          <Row className="text-center text-md-left mt-3 pb-3">
            <Col md="3" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text mb-4 font-weight-bold title">Troquini.tn</h6>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="2" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">À PROPOS</h6>
              <p>
                <a href="#!">Qui sommes nous?</a>
              </p>
              <p>
                <a href="#!">Solutions entreprises</a>
              </p>
              <p>
                <a href="#!">Mentions légales</a>
              </p>
              <p>
                <a href="#!">La Charte du troqueur</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="3" lg="2" xl="2" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">
                EN SAVOIR PLUS
              </h6>
              <p>
                <a href="#!">Comment ça marche ?</a>
              </p>
              <p>
                <a href="#!">Service Plus</a>
              </p>
              <p>
                <a href="#!">Vérification</a>
              </p>
              <p>
                <a href="#!">Foire aux questions</a>
              </p>
            </Col>
            <hr className="w-100 clearfix d-md-none" />
            <Col md="4" lg="3" xl="3" className="mx-auto mt-3">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p>
                <i className="fa fa-home mr-3" /> Les Berges du Lac, Tunis
              </p>
              <p>
                <i className="fa fa-envelope mr-3" /> info@gmail.com
              </p>
              <p>
                <i className="fa fa-phone mr-3" /> + 216 55 55 55
              </p>
              <p>
                <i className="fa fa-print mr-3" /> + 216 77 77 77
              </p>
            </Col>
          </Row>
          <hr />
          <Row className="d-flex align-items-center">
            <Col md="8" lg="8">
              <p className="text-center text-md-left grey-text">
                &copy; {new Date().getFullYear()} Copyright:{" "}
                <a href="https://www.MDBootstrap.com"> troquini.tn </a>
              </p>
            </Col>
            <Col md="4" lg="4" className="ml-lg-0">
              <div className="text-center text-md-right">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="btn-floating btn-sm rgba-white-slight mx-1">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </Footer>
    );
  }
}

export default FooterPage;
