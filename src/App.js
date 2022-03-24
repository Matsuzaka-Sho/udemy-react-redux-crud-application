import React from 'react';
import './App.css';

const App = () =>{
  const profiles = [
    { name: 'Taro', age: 10},
    { name: 'Hana', age: 30},
    { name: 'NoName'} // 省略した場合、下にあるdefaultPropsのname:1が入ってくる。
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

User.defaultProps={
  age: 1
}

export default App;

