import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import Aux from '../hoc/Aux';
import withClass from '../hoc/withClass';
// import Person from '../components/Persons/Person/Person';

// import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends PureComponent {

  constructor(props){
    super(props)
    this.state = {
      persons: [
        { id: '1',  name: 'Samir', age: 26  },
        { id: '2',  name: 'Sanjay', age: 27 },
        { id: '3',  name: 'Ravi', age: 25 }
      ],
      otherState: 'some other',
      showPerson: false
     }

    console.log('[App.js] Inside constructor()', props);
  }

  componentWillMount(){
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount(){
    console.log('[App.js] Inside componentDidMount()');
  }


  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Update App.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return true;
  // }

  componentWillUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(nextProps, nextState){
    console.log('[Update App.js] Inside componentDidUpdate()', nextProps, nextState);
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
    console.log('[App.js] Inside render()');
  	let persons = null;

  	if(this.state.showPerson){
  		persons = <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler} 
              changed={this.switchOnClick} />;  	
  	}

 
    return (
        <Aux>
          <button onClick={() => this.setState({showPerson: true })} > Show Persons </button>
	        <Cockpit 
            appTitle={this.props.title}
            showPerson={this.state.showPerson}
            persons={this.state.persons} 
            clicked={this.togglePersonHandler} />
	        {persons}	
	      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Sanjay Here'))
  }
}

export default withClass(App, classes.App);
