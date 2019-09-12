import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div>
      <Amount
        amount = {(amount) => ( 
          <div>
            <Euro amount = {amount} />
            <GBP amount = {amount} />
            <BrazReal amount = {amount} />
            <ArgPeso amount = {amount} />
          </div>
        )}
      />
    </div>
  )
}

class Amount extends Component {

  constructor(props) {
    super(props)

    this.state = {
      amount: 0
    }
  }

  increment = () => { this.setState((prevState) => {
    const { amount } = prevState
    return {
      amount: amount + 1
    }
  })}
  decrement = () => {this.setState((prevState) => {
    const { amount } = prevState
    return {
      amount: (amount - 1) > 0 ? amount - 1 : 0 
    }
  })}

  render() {
    return (
      <div>
        <span>
          Amount ($): {this.state.amount}
        </span>
        <button 
        onClick = {this.increment}
        >
          +
        </button>
        <button 
        onClick = {this.decrement}
        >
          -
        </button>
        {this.props.amount(this.state.amount)}
      </div>
    )
  }
}

//EU
const Euro = ({amount}) => <p>Euro: {amount * 0.86}</p>
const GBP = ({amount}) => <p>GBP: {amount * 0.7}</p>

//S. America
const BrazReal = ({amount}) => <p>Brazilian Real: {amount * 4.07}</p>
const ArgPeso = ({amount}) => <p>Argentinian Peso: {amount * 56.17}</p>

export default App;
