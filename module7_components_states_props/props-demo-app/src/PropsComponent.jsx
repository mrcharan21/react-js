import React from 'react';
import PropTypes from 'prop-types'

export default function PropsComponent(props) {
  return (
    <>
    <div className="student">
      <p>Name : {props.name}</p>
      <p>Age : {props.age}</p>
      <p>Student : {props.isStudent ? "yes" : "No"}</p>
    </div>
    </>
  );
}

PropsComponent.PropTypes = {
  name:  PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}

PropsComponent.defaultProps ={
    name : "Guest",
    age : 0,
    isStudent : false,   
}
