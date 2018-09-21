import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Form from "./Form";

class App extends Component {

  constructor(props){
		super(props);
		this.state={
			items:[],
			isLoaded:true,
			body:'',
			id:'',
      fields: {},
      users: {}
		};

	//	this.handleChange=this.handleChange.bind(this)
	//	this.handleOnSubmit=this.handleOnSubmit.bind(this)
  }
  

  //-----------------------------

  onChange = updatedValue => {
    this.setState({
      fields: {
        ...this.state.fields,
        ...updatedValue
      }
    });
  };

  

  render() {
    return (
      <div className="App">
        <Form onChange={fields => this.onChange(fields)} />
        <p>
          {JSON.stringify(this.state.fields.users, null, 2)}
        </p>
      </div>
    );
  }



//    buildUrl=(url, parameters) =>{
//     let qs = "";
//     for (const key in parameters) {
//         if (parameters.hasOwnProperty(key)) {
//             const value = parameters[key];
//             qs +=
//                 encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
//         }
//     }
//     if (qs.length > 0) {
//         qs = qs.substring(0, qs.length - 1); //chop off last "&"
//         url = url + "?" + qs;
//     }

//     return url;
// }

// handleChange(event){
//   event.preventDefault()
//   this.setState({
//     [event.target.name]: event.target.value
//   })
// }



}

/*
    seeJenkinsStatus=()=>{
      console.log('Started Monitoring...');
      return fetch("")

    }
    callJenkins=()=>{
      console.log('fired Jenkins');
      return fetch("http://automationap.aocms.gtwy.dcn:9090/job/AP_1.4/buildWithParameters?", {
          tag:"@demo",
          courtId:"cm3a",
          PlanId:"TESTAOM",
          numberOfRunners:3,
          auth: {
            'user': 'admin',
            'pass': 'admin'
          }
        }),
        {
            method: "POST",
            
        }
    
    }
*/
 /* render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ACTS(ActioNet Continous Testing Service)</h1>
        </header>
        <form onSubmit={this.handleOnSubmit}>
					        <label>
					          Name:
					          <input type="text" name='body' value={this.state.value} onChange={this.handleChange} />
					          <input type="text" name='id' value={this.state.value} onChange={this.handleChange} />
					        </label>
					        <input type="submit" value="Submit" />
			      </form>
        <button onClick={this.callJenkins}>
        Fire Jenkins
       </button>
      </div>
    );
  }
*/















export default App;
