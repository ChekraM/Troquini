import React from "react";
import { CustomInput, Form, FormGroup, Label } from "reactstrap";

class CategorySelect extends React.Component {
  render() {
    return (
       <Form>
        <FormGroup>
          <CustomInput
            type="select"
            id="exampleCustomSelect"
            name="customSelect"
          >
            <option value="">Selectionner votre catégorie</option>
            <option>Arts & Spectacles</option>
            <option>Coup de main</option>
            <option>Informatique/Multimédia</option>
            <option>Livre / CD / DVD</option>
            <option>Transport/Véhicules</option>
            <option>Vacances/Week-end</option>
          </CustomInput>
        </FormGroup>
      </Form>
    );
  }
}

export default CategorySelect;
