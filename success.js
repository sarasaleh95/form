import React, {Component } from 'react' ;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';



export class success extends Component {
    continue = e => {
        e.preventDefault();
        //process from
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.nextStep();
    };
    render(){
       
        return (
            <MuiThemeProvider> 
<React.Fragment>
    <AppBar title="success"/>
  <h1>Thank you  </h1>
         </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

}
export default success;