import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux'

const cockpit = (props) => {

  // let classes = ['purple','bold'].join(' ');

  const assignClasses = [];
  let bntClass = classes.Button;

  if(props.showPerson){
    bntClass = [classes.Button, classes.Red].join(' ');
  }

  if(props.persons.length <= 2 ){
    assignClasses.push(classes.red);
  }

  if(props.persons.length <= 1 ){
    assignClasses.push(classes.bold);
  }


  if(props.persons.length <= 0 ){
    assignClasses.push(classes.italic);
  }


  return (
    <Aux>
      <h1>{props.appTitle}</h1>
      <p className={assignClasses.join(' ')}>Sanjay Here</p>
      <button className={bntClass} onClick={props.clicked}>Click Here</button>
    </Aux>
  );
};

export default cockpit;
