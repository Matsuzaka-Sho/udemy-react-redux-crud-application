import React, { Component } from 'react';

const App = () =>(<Counter></Counter>)

class Counter extends Component{
  constructor(props){ // constructorは初期化
    super(props) // 親クラスを継承
    console.log(this.state)
    this.state = { count: 0}
  }

  handlePlusButton = () => {
    console.log('handlePlusButton')
    console.log(this.state.count)
    this.setState({ count: this.state.count + 1}) // this.setStateはthis.stateを変更？(値を外部からアクセスしたり変更できないから？)
  }

  handleMinusButton = () => {
    console.log('handlePlusButton')
    console.log(this.state.count)
    this.setState({ count: this.state.count - 1})
  }

  render(){
    console.log(this.state)
    return (
      <React.Fragment>
        <div>counter: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;

