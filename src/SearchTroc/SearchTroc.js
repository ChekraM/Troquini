import React, { Component } from "react";
import "./SearchTroc.css";
import TrocCard from "../TrocCard/TrocCard";
import FilterTroc from "../FilterTroc/FilterTroc";
import { Container, Row, Col } from "reactstrap";

class TrocList extends Component {
  render() {
    let filtredTrocByName = this.props.trocList.filter((troc, index) =>
      troc.title.toLowerCase().includes(this.props.search)
    );
    return (
      <Row>
        {filtredTrocByName.length > 0 ? (
          filtredTrocByName.map((el, index) => (
            <TrocCard troc={el} key={index} />
          ))
        ) : (
          <h3>Pas de Résultat</h3>
        )}
      </Row>
    );
  }
}

class SearchTroc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      serchInput: "",
      typeO: "",
      typeS: "",
      category: "",
      userCity: ""
    };
  }

  inputReader = event => {
    this.setState({ serchInput: event.target.value });
    console.log(this.state.serchInput);
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    let filtredTrocList = this.props.trocList
      .filter(
        el => (this.state.typeO === "" ? el : el.typeO === this.state.typeO)
      )
      .filter(
        el => (this.state.typeS === "" ? el : el.typeS === this.state.typeS)
      )
      .filter(
        el =>
          this.state.category === "" ? el : el.category === this.state.category
      )
      .filter(
        el =>
          this.state.userCity === "" ? el : el.userCity === this.state.userCity
      );

    return (
      <Container fluid className="search-troc-container container-fluid">
        <Row className="search-troc-header">
          <h1 className="page-title">Rechercher un Troc</h1>
        </Row>
        <Row>
          <Col className="filter-column" xs="12" sm="12" md="3" lg="3">
            <input
              className="search-section"
              type="text"
              placeholder="Tapez votre recherche ici"
              onChange={this.inputReader}
            />
            <FilterTroc onChange={this.onChange} />
          </Col>
          <Col className="troc-list" xs="12" sm="12" md="9" lg="9">
            {filtredTrocList.length > 0 ? (
              <TrocList
                trocList={filtredTrocList}
                search={this.state.serchInput}
              />
            ) : (
              <h3>Pas de Résultat</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

// class SearchTroc extends React.Component {

//   render() {
//     const { value, onChange, children } = this.props;
//     return (
//       <form>
//         {children}
//         <input type="text" value={value} onChange={onChange} />
//       </form>
//     );
//   }
// }

export default SearchTroc;
