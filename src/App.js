import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
	state	=  {
		persons: [
			{ id: '1',	name: 'Samir', age: 26	},
			{ id: '2',	name: 'Sanjay', age: 27	},
			{ id: '3',	name: 'Ravi', age: 25	}
		],
		otherState: 'some other',
		showPerson: false
	}

	switchOnClick = (event, id) => {
		const personIndex = this.state.persons.findIndex(p => { 
			return p.id === id;
		});

		// const person = Object.assign({}, this.state.persons[personIndex]);
		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;
		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({persons: persons});

		console.log('Click Event');
		// this.setState({
		// 	persons: [
		// 		{ id: '1',	name: 'Samir', age: 25	},
		// 		{ id: '2',	name: event.target.value, age: 27	},
		// 		{ id: '3',	name: 'Ravi', age: 26	}
		// 	]
		// });
	}

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({persons: persons});
	}

	togglePersonHandler = () => {
		const doesShow = this.state.showPerson;
		this.setState({showPerson: !doesShow});
	}

  render() {
  	const style = {
  		backgroundColor: 'green',
  		font: 'inherit',
  		border: '2px solid white',
  		padding: '8px',
  		cursor: 'pointer'
  	}

  	let persons = null;


  	if(this.state.showPerson){
  		persons = (
  				<div>
  					{this.state.persons.map( (person, index) => {
  						return <Person 
  										click={ () => this.deletePersonHandler(index) } 
  										name={person.name} 
  										age={person.age}  
  										key={person.id}
  										changed={ (event) => this.switchOnClick(event, person.id)}
  										/>
  					})}
	      	</div> 
  			);
  		style.backgroundColor = 'red';
  	
  	}

  	// let classes = ['purple','bold'].join(' ');
  	const classes = [];

  	if(this.state.persons.length <= 2 ){
  		classes.push('red');
  	}

  	if(this.state.persons.length <= 1 ){
  		classes.push('bold');
  	}


  	if(this.state.persons.length <= 0 ){
  		classes.push('italic');
  	}

 
    return (
	      <div className="App">
	        {/*<h1>Hello World</h1>*/}
	        <p className={classes.join(' ')}>Sanjay Here</p>
	        <button 
	        	style={style} 
	        	onClick={this.togglePersonHandler}>Click Here</button>
	        {persons}	
	       </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sanjay Here'))
  }
}

export default App;
