import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Form extends Component {

	constructor(props){
		super(props);
		this.state={
			items:[],
			isLoaded:true,
			body:'',
			id:'',
			fields: {}
		};

		this.handleChange=this.handleChange.bind(this)
		this.handleSubmit=this.handleSubmit.bind(this)
	}

		handleChange(event){
				event.preventDefault()
				this.setState({
					[event.target.name]: event.target.value
				})
		}

		handleOnSubmit(event){
				event.preventDefault()
				const data=this.state
				console.log("final data is ", data)
				fetch('https://jsonplaceholder.typicode.com/posts',{
						method: 'POST',
						body: JSON.stringify(data)
					
					})
				.then(function(response){
					return response.json();
				})
				.then(function(data){
				console.log('post data working',data)
				
				})
		
	}
	

	componentDidMount(){
				// fetch('https://jsonplaceholder.typicode.com/users')
				// .then(res=>res.json())
				// .then(json=>{
				// 	this.setState({
				// 		isLoaded:true,
				// 			items:json,
				// 	})
				// });


				this.setState({
					auth: "jenkins_user_email:jenkins_user_password",
					parameter1: "value1"
				})
	}




	onChange = updatedValue => {
		this.setState({
			fields: {
				...this.state.fields
				...updatedValue
			}
		});
		console.log('app called:',fields)
	};

	


  render() {
		var{isLoaded, items,body,id}=this.state;
        
		if(!isLoaded){
			return <div>Loadding..</div>

		}else{

    return (
      <div className="App">
		<ul>
			{items.map(item=>(<li key={item.id}>{item.name}</li>))}

		</ul>
		 <p>
   			   {JSON.stringify(this.state.fields, null, 2)}
     	 </p>
      <Form onSubmit = {fields => this.onSubmit(fields)} 

			      	<form onSubmit={this.handleOnSubmit}>
					        <label>
					          Name:
					          <input type="text" name='body' value={this.state.value} onChange={this.handleChange} />
					          <input type="text" name='id' value={this.state.value} onChange={this.handleChange} />
					        </label>
					        <input type="submit" value="Submit" />
			      </form>
			</div>

    );
		}
  }
}

export default App;
