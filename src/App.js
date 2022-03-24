import React from 'react';
import './App.css';

//class App extends Component {
//  render(){
//    return (
//    <React.Fragment>
//      <label htmlFor='bar'>bar</label>
//      <input type='text' onChange={() => {console.log('I am clicked!')}} />;
//    </React.Fragment>
//    )
//  }
//}

//class App extends Component {
//  render(){
//    const greeting = 'Hi!'
//    const dom = <h1 className='foo'>{greeting}</h1>
//    return dom;
//  }
//}

//# html部分をconstとして格納することもできる。
//class App extends Component {
//  render(){
//    const dom = <h1>Hi!</h1>
//    return dom;
//  }
//}

//class App extends Component {
//  render(){
//    return React.createElement(
//    "div",
//    null,
//    "Hello, world!"
//    );
//  }
//}

const App = () =>{
    return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
    )
}

const Cat = () =>{
    return <div>Hi</div>
}
export default App;
