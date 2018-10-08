import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import Radio from "@material-ui/core/Radio";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { Row, Col } from "reactstrap";

const styles = {
  root: {
    color: green[600],
    "&$checked": {
      color: green[500]
    }
  },
  checked: {}
};

class RadioButtons extends React.Component {
  state = {
    selectedValue: "a",
    selectedValue1: "a"
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };
  handleChange1 = event => {
    this.setState({ selectedValue1: event.target.value });
  };
  render() {
    const { classes } = this.props;

    return (
      <Row style={{ marginBottom: "40px" }}>
        <Col xs="12" sm="12" md="5" lg="5">
          <Radio
            checked={this.state.selectedValue === "offre"}
            onChange={this.handleChange}
            value="offre"
            name="radio-button-demo"
            aria-label="offre"
            label="Offre"
          />
          Offre
          <br />
          <Radio
            checked={this.state.selectedValue === "recherche"}
            onChange={this.handleChange}
            value="recherche"
            name="radio-button-demo"
            aria-label="recherche"
            label="Recherche"
          />
          Recherche
          <br />
        </Col>
        <Col xs="12" sm="12" md="5" lg="5">
          <Radio
            checked={this.state.selectedValue1 === "bien"}
            onChange={this.handleChange1}
            value="bien"
            name="radio-button-demo"
            aria-label="Bien"
            label="Bien"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
          Bien
          <br />
          <Radio
            checked={this.state.selectedValue1 === "service"}
            onChange={this.handleChange1}
            value="service"
            name="radio-button-demo"
            aria-label="Service"
            classes={{
              root: classes.root,
              checked: classes.checked
            }}
          />
          Service
          <br />
        </Col>
      </Row>
    );
  }
}

RadioButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RadioButtons);
