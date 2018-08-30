import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

   buildUrl(url, parameters) {
    let qs = "";
    for (const key in parameters) {
        if (parameters.hasOwnProperty(key)) {
            const value = parameters[key];
            qs +=
                encodeURIComponent(key) + "=" + encodeURIComponent(value) + "&";
        }
    }
    if (qs.length > 0) {
        qs = qs.substring(0, qs.length - 1); //chop off last "&"
        url = url + "?" + qs;
    }

    return url;
}
    callJenkins=()=>{
      console.log('fired Jenkins');
      return fetch(
        buildUrl("http://automationap.aocms.gtwy.dcn:9090/job/AP_1.4/buildWithParameters?", {
          tag:"@demo",
          courtId="cm3a",
          PlanId="TESTAOM",
          numberOfRunners=3,
          auth: {
            'user': 'admin',
            'pass': 'admin'
          }
        }),
        {
            method: "POST",
            
        }
    )
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ACTS(ActioNet Continous Testing Service)</h1>
        </header>
        <p className="App-intro">
          Welcome...
        </p>
        <button onClick={this.callJenkins}>
        Fire Jenkins
       </button>
      </div>
    );
  }
}

export default App;
