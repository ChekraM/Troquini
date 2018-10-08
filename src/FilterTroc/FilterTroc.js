import React, { Component } from "react";
import "./FilterTroc.css";
import { Container, Row, Col } from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

class FilterTroc extends Component {
  render() {
    return (
      <form className="filter-container">
        <select
          className="category-selection row"
          name="typeO"
          onChange={this.props.onChange}
        >
          <option value="">Offres & Recherches</option>
          <option disabled="">------------------</option>
          <option value="Offre">Offre</option>
          <option value="Recherche">Recherche</option>
        </select>
        <select
          className="category-selection row"
          name="typeS"
          onChange={this.props.onChange}
        >
          <option value="">Biens & Services</option>
          <option disabled="">------------------</option>
          <option value="Bien">Biens</option>
          <option value="Service">Services</option>
        </select>
        <select
          className="category-selection row"
          name="category"
          onChange={this.props.onChange}
        >
          <option value="">Choisissez une catégorie</option>
          <option disabled="">------------------</option>
          <option value="Arts-Spectacles">Arts & Spectacles</option>
          <option value="Coup-de-main">Coup de main</option>
          <option value="Informatique-Multimédia">
            Informatique/Multimédia
          </option>
          <option value="Livre-CD-DVD">Livre / CD / DVD</option>
          <option value="Transport-Véhicules">Transport/Véhicules</option>
          <option value="Vacances-Week-end">Vacances/Week-end</option>
        </select>
        <select
          className="category-selection row"
          name="userCity"
          onChange={this.props.onChange}
        >
          <option value="">Toute la Tunisie</option>
          <option disabled="">------------------</option>
          <option value="Ariana">Ariana</option>
          <option value="Beja">Beja</option>
          <option value="Nabeul">Nabeul</option>
          <option value="Jendouba">Jendouba</option>
          <option value="Medenine">Medenine</option>
          <option value="Tunis">Tunis</option>
        </select>
      </form>
    );
  }
}
export default FilterTroc;
