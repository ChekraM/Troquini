import React, { Component } from "react";
import "./AddTroc.css";
import { Container, Row, Col } from "reactstrap";
import IconButtons from "../AddIcons/AddIcons";
import RadioButtons from "../SelectionControls/RadioButtons";
import CategorySelect from "../SelectionControls/CategorySelect";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import axios from "axios";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class AddTroc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photos: ""
    };
    this.getTroc = this.getTroc.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  onChangeTitle = value => {
    this.setState({
      title: value
    });
  };

  onChangeDescription = value => {
    this.setState({
      description: value
    });
  };

  onChangePhotos = value => {
    this.setState({
      photos: value
    });
  };
  
  getTroc() {
    this.props.AddTrocFunction({ ...this.state });
  }
  // clickHandler() {
  //   this.getTroc();
  // }

  clickHandler = () => {
    axios
      .post("/Troc", {
        title: this.state.title,
        description: this.state.description,
        photos: this.state.photos
      })
      .then(res =>
        axios.get("/trocs").then(res => this.props.updateUserTrocList(res.data))
      )
      .catch(err => alert(err));
  };

  render() {
    const { classes } = this.props;
    return (
      <Container fluid className="add-troc-container">
        <Row className="add-troc-header">
          <h1 className="page-title">Ajouter un Troc</h1>
        </Row>
        <Row className="add-troc-body add-troc-form">
          <Col xs="12" sm="12" md="5" lg="5" className="select">
            <Row>
              <h6 className="sub-title-h6 ">Type de Troc</h6>
            </Row>
            <RadioButtons />
            <Row>
              <h6 className="sub-title-h6 ">Catégories</h6>
            </Row>
            <CategorySelect />
          </Col>
          <Col xs="12" sm="12" md="7" lg="7" className="add-troc-input">
            <Row className="sub-title gold">
              <h6 className="sub-title-h6">Annonce</h6>
            </Row>
            <Row className="label-div">
              <Col xs="12" sm="12" md="3" lg="3">
                <label className="label-tag" for="title">
                  Titre{" "}
                </label>
              </Col>
              <Col xs="12" sm="12" md="7" lg="7">
                <input
                  className="add-form-input"
                  type="text"
                  maxLength="65"
                  placeholder="Titre du troc"
                  id="title"
                  onChange={e => this.onChangeTitle(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="label-div">
              <Col xs="12" sm="12" md="3" lg="3">
                <label className="label-tag" for="title">
                  Description{" "}
                </label>
              </Col>
              <Col xs="12" sm="12" md="7" lg="7">
                <textarea
                  className="textarea"
                  rows="4"
                  cols="50"
                  placeholder="Décrivez votre troc ici..."
                  onChange={e => this.onChangeDescription(e.target.value)}
                />
              </Col>
            </Row>
            <Row className="images-block">
              <Col className="block" xs="12" sm="12" md="4" lg="4">
                <a href="#" className="sprites icones">
                  <div className="upload-images-block">
                    <IconButtons />
                  </div>
                </a>
              </Col>
              <Col className="block" xs="12" sm="12" md="4" lg="4">
                <a href="#" className="sprites icones">
                  <div className="upload-images-block">
                    <IconButtons />
                  </div>
                </a>
              </Col>
              <Col className="block" xs="12" sm="12" md="4" lg="4">
                <a href="#" className="sprites icones">
                  <div className="upload-images-block">
                    <IconButtons />
                  </div>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="add-troc-footer">
          <Button
            variant="fab"
            color="primary"
            aria-label="Add"
            className={classes.button}
          >
            <AddIcon />
          </Button>
        </Row>
      </Container>
    );
  }
}

AddTroc.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddTroc);
