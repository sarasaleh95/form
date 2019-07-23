
import React, { component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import confirm from './confirm';
import success from './success';


export class UserForm extends component{
    state= {
        step: 1,
        firstName: '',
        lastName:'',
        email:'',
        occupation: '',
        city:'',
        bio: '',
    }
    //to next step
    prevStep= () => {
        const {step}= this.satate;
        this.setState({
            step: step - 1 
        });
    }
      //go back to previous step
      nextStep= () => {
        const {step}= this.satate;
        this.setState({
            step: step+1 
        });
    }
    //handle field change 
    handleChange = input => e => {
        this.setState({
         [input]: e.target.value   
        });
    }
render(){
    const {step}= this.state;
    const {firstName, lastName, email, occupation, city, bio} = this.state;
   const values= {firstName, lastName, email, occupation, city, bio}
   switch(step){
case 1:
    return(
        <FormUserDetails 
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
    );
    case 2: 
    return(
        <FormPersonalDetails 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        handleChange={this.handleChange}
        values={values}
        />
    );
    case 3: 
    return(
        <Confirm 
        nextStep={this.nextStep}
        prevStep={this.prevStep}
        values={values}
        />
    );
    case 4: 
    return <success />
    }






  
}
}
export default UserForm ;