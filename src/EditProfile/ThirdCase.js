import React from "react";
import "./EditProfile.css";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});

class EditProfileThirdCase extends React.Component {
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled"
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-textarea"
          label="Pseudo"
          placeholder="changer votre pseudo"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Mot de passe"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-confirm-password-input"
          label="Confirmer le mot de passe"
          className={classes.textField}
          type="password"
          autoComplete="next-password"
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

EditProfileThirdCase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileThirdCase);
