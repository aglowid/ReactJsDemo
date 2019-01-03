import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {

  // let classes = ['purple','bold'].join(' ');

  const assignClasses = [];
  let bntClass = ''

  if(props.showPerson){
    bntClass = classes.Red;
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
    <div className={classes.Cockpit}>
      <h1>{props.appTitle}</h1>
      <p className={assignClasses.join(' ')}>Sanjay Here</p>
      <button className={bntClass} onClick={props.clicked}>Click Here</button>
    </div>
  );
};

export default cockpit;
