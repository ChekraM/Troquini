import React from "react";
import "./EditProfile.css";
import { Container, Row, Col } from "reactstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FirstCase from "./FirstCase";
import SecondCase from "./SecondCase";
import ThirdCase from "./ThirdCase";
import axios from "axios";

const styles = theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing.unit
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});

function getSteps() {
  return ["Paramètres du profil", "Adresse Postale", "Paramètres du compte"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <FirstCase />;
    case 1:
      return <SecondCase />;
    case 2:
      return <ThirdCase />;
    default:
      return "Uknown stepIndex";
  }
}

class EditProfile extends React.Component {
  state = {
    activeStep: 0,
    isModidified: false
  };

  componentDidMount() {
    axios.get("/user/" + this.props.id).then(res =>
      this.setState({
        ...res.data
      })
    );
  }

  handleNext = () => {
    axios.put("/users/" + this.props.id, {
      activeStep: this.state.activeStep
    });
    this.setState({
      isModidified: true
    });
  };

  handleNext = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep + 1
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1
    });
  };

  handleReset = () => {
    this.setState({
      activeStep: 0
    });
  };

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <Container fluid id="edit-profile-container" className={classes.root}>
        <Row className="edit-profile-header">
          <h1 className="page-title">Modifier mon profile</h1>
        </Row>
        <Row className="edit-profile-form">
          <Col xs="12" sm="12" md="12" lg="12" className="edit-profile-stepper">
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map(label => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
          </Col>
          <Col xs="12" sm="12" md="12" lg="12" className="edit-profile-inputs">
            {this.state.activeStep === steps.length ? (
              <div>
                <Typography className={classes.instructions}>
                  Vous avez terminé.
                </Typography>
                <Button onClick={this.handleReset}>Initialiser</Button>
              </div>
            ) : (
              <div>
                <Typography className={classes.instructions}>
                  {getStepContent(activeStep)}
                </Typography>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={this.handleBack}
                    className={classes.backButton}
                  >
                    Retour
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={this.handleNext}
                  >
                    {activeStep === steps.length - 1 ? "Terminé" : "Suivant"}
                  </Button>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

EditProfile.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(EditProfile);
