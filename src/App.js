import React from 'react';
import './App.css';
import PropTypes from 'prop-types';

const App = () =>{
  const profiles = [
    { name: 'Taro', age: 10},
    { name: 'Hana', age: 30},
    { name: 'NoName'}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  )
}

const User = (props) =>{
    return <div>Hi, I am {props.name}. My age is {props.age}</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;

