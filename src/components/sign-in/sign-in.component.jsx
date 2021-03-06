import React, { Component } from "react";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";

import "./sign-in.style.scss";

export default class SıgnIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit=(e)=>{
    e.preventDefault();

    this.setState({email:'',password:''})
  }

  handleChange=(event)=>{
    const {value,name}=event.target;
    
    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in your name and password </span>

        <form onSubmit={this.handleSubmit}>
            <FormInput 
            type="email" 
            name='email'  
            value={this.state.email} 
            required
            handleChange={this.handleChange}
            label='email'
            />

            <FormInput 
            type="password" 
            name='password' 
            value={this.state.password} 
            required
            handleChange={this.handleChange}
            label='password'
            />

            <CustomButton type="submit">Sign In</CustomButton>
        </form>
      </div>
    );
  }
}
