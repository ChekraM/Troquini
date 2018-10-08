import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Register.css";


 class Register extends React.Component {
  state={

    nom:'',
    prenom:'',
    email: '',
    psswd: '',
    confirmpsswd:'',
    ville:'',
    codepostal:'',
    nom_error:'',
    prenom_error:'',
    email_error:'',
    psswd_error:'',
    confirmpsswd_error:'',
    ville_error:'',
    codepostal_error:'',
    validError:"error"

  }
  change=e=>{
    this.setState({
      [e.target.name]:e.target.value
    });
  };
  onSubmit= ()=>{
    let reg=/^[A-Z]+$/
    let nametest=this.state.nom.length
    let validatename=reg.test(this.state.nom)
    console.log(validatename)
    
      this.setState({nom_error: "Please write an upper case letter",validError:"errortrue"})
   
    let regsur=/^[a-z]+$/
    let surnametest=this.state.prenom.length
    let validatesurname=regsur.test(this.state.prenom)
    console.log(validatesurname)
    
      this.setState({prenom_error: "Please write an lower case letter"})
    
    let regemail=/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let emailtest=this.state.email.length
    let validateemail=regemail.test(this.state.email)
    console.log(validateemail)
   
      this.setState({email_error: "Error email"})
    
    let regpswd=/^[A-Za-z0-9]{7,13}$/
    let pswdtest=this.state.psswd.length
    let validatepsswd=regpswd.test(this.state.psswd)
    console.log(validatepsswd)

    let pass=this.state.psswd
    let passcon=this.state.confirmpsswd

    if (pass!=passcon){
      this.setState({ confirmpsswd_error:"Please confirm your password!!"})
  };
  let regville=/^[a-zA-Z]+$/
  let villetest=this.state.ville.length
  let validateville=regville.test(this.state.ville)
  
  if (villetest<10 || villetest>20){
    this.setState({ville_error: "City should be between 10 and 20 caracteres"})
  }
  let regcodepostal=/^[0-9]+$/
  let codepostaltest=this.state.ville.length
  let validatecodepostal=regcodepostal.test(this.state.codepostal)
  
  if (codepostaltest<4 || codepostaltest>6){
    this.setState({code_error: "Postal code should be between 4 and 6 numbers"})
  }
}
  handleChange=event=>{
    const isCheckbox=event.target.type=="checkbox";
    this.setState({
     [event.target.name]: isCheckbox
     ? event.target.checked
     : event.target.value
    });
  };
   render() {
    return (
      
    <div className="create">
    <h1 className="registerpage">Veuillez vous inscrire</h1>
    
       <div className="nom"> 
        <h6 className="nametitle">Nom:</h6>
        <input type="text" className="inputname" name="nom" onChange={this.handleChange} 
        placeholder="Saisissez votre nom" required/>
        </div>
        <div className={this.state.validError}>{this.state.nom_error}</div>
        <div className="prenom"> 
        <h6 className="surnametitle">Prenom:</h6>
        <input type="text" className="inputsurname" name="prenom" onChange={this.handleChange} 
        placeholder="Saisissez votre prenom"/>
        </div>
       
        <div className={this.state.validError}>{this.state.prenom_error}</div>
       <div className="adressepostal"> 
        <h6 className="ville">Ville:</h6>
        <input type="text" className="inputville" name="ville" onChange={this.handleChange} 
        placeholder="Ville"/>
        </div>
        <div className={this.state.validError}>{this.state.ville_error}</div>
       <div className="email"> 
        <h6 className="mailadress">Code postal:</h6>
        <input type="number" className="inputcodepostal" name="codepostal" onChange={this.handleChange} 
        placeholder="1000"/>
        </div>
        <div className={this.state.validError}>{this.state.codepostal_error}</div>
        
       <div className="email"> 
        <h6 className="mailadress">Adresse e-mail:</h6>
        <input type="email" className="inputmail" name="email" onChange={this.handleChange} 
        placeholder="adresse.email@gmail.com" required/>
        </div>
        <div className={this.state.validError}>{this.state.email_error}</div>
        <div className="password"> 
        <h6 className="psswd">Mot de passe:</h6>
        <input type="password" className="inputpssd" name="psswd" onChange={this.handleChange} 
        placeholder="mot de passe"/>
        </div>
        <div className={this.state.validError}>{this.state.psswd_error}</div>
        <div className="password"> 
        <h6 className="confirmpsd">Confirmez votre mot de passe:</h6>
        <input type="password" className="inputconfirmpssd" name="confirmpsswd" onChange={this.handleChange}
        placeholder="Confirmez votre mot de passe"/>
        </div>
        <div className={this.state.validError}>{this.state.confirmpsswd_error}</div>
        <div className="Connecter">
            <button className="creer" onClick={this.onSubmit}> Créer</button>
        </div>

      </div>
      
     
    );
  }
}

export default Register;