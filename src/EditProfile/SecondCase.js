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

const cities = [
  {
    value: "ariana",
    label: "Ariana"
  },
  {
    value: "beja",
    label: "Beja"
  },
  {
    value: "nabeul",
    label: "Nabeul"
  },
  {
    value: "medenine",
    label: "Medenine"
  }
];

class EditProfileSecondCase extends React.Component {
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
          id="outlined-with-placeholder"
          label="N°"
          placeholder="n°"
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />

        <TextField
          id="outlined-multiline-static"
          label="Rue"
          multiline
          rows="4"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="outlined-select-cities-native"
          select
          label="Ville"
          className={classes.textField}
          value={this.state.cities}
          onChange={this.handleChange("cities")}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Sélectionnez votre ville"
          margin="normal"
          variant="outlined"
        >
          {cities.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <TextField
          id="outlined-textarea"
          label="Code Postal"
          placeholder="code postal"
          multiline
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
      </form>
    );
  }
}

EditProfileSecondCase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(EditProfileSecondCase);
