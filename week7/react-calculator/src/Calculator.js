import React from 'react'

class Calculator extends React.Component {

  constructor() {
    super();  // Call the constructor() method of the superclass, React.Component
    console.log('New Calculator component object made!', this);

    // Initialise the state for this component:
    // (in Vue, this is called 'data')
    this.state = {
      firstNum: 0,
      secondNum: 0
    };

    this.updateFirstNum = this.updateFirstNum.bind(this);
    this.updateSecondNum = this.updateSecondNum.bind(this);

  }

  updateFirstNum(event) {
    console.log('event:', event.target.value);
    console.log('this:', this);
    // Store the value of the form input into app state, so we can use it
    // to update the DOM

    // YOU ARE NOT ALLOWED TO MUTATE STATE DIRECTLY IN REACT
    // this.state.firstNum = event.target.value --- NOT ALLOWED!!!
    this.setState({ firstNum: parseFloat(event.target.value) });

  }

  updateSecondNum(event) {
    this.setState({ secondNum: parseFloat(event.target.value) });
  }

  render() {
    const firstNum = this.state.firstNum;
    const secondNum = this.state.secondNum;
    return (
      <div>
        <h2>CalculatoReact!</h2>

        {/* onChange={(e) => this.updateFirstNum(e)} -> not good, creates always a new function */}
        <input type="text" placeholder="First Number" onChange={this.updateFirstNum} />
        <br/>
        <input type="text" placeholder="Second Number" onChange={this.updateSecondNum}/>

        <h3>Results:</h3>
        {firstNum} + {secondNum} = { firstNum + secondNum } <br/>
        {firstNum} - {secondNum} = { firstNum - secondNum } <br/>
        {firstNum} / {secondNum} = { firstNum / secondNum } <br/>
        {firstNum} * {secondNum} = { firstNum * secondNum } <br/>
      </div>
    );
  }

}  // Calculator

export default Calculator;
