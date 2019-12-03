import React from "react";
import { Component } from "react";
import { Card, Row, Col, Button } from "react-bootstrap";

class CalculatorLayout extends Component {
  state = {
    display: 0,
    operator: "",
    num1: 0,
    num2: 0
  };

  add = (num1, num2) => {
    this.setState({
      display: this.setState.num1 + this.setState.num2
    });
  };

  subtract = (num1, num2) => {
    this.setState({
      display: this.setStae.num1 - this.setState.num2
    });
  };

  multiply = (num1, num2) => {
    this.setState({
      display: this.setState.num1 * this.setState.num2
    });
  };

  divide = (num1, num2) => {
    this.setState({
      display: this.setState.num1 % this.setState.num2
    });
  };
  Operand = () => {
    if (this.state.operand === "+") {
      this.add();
      console.log(this.state.operand);
    } else if (this.state.operand === "-") {
      this.subtract();
      console.log(this.state.operand);
    } else if (this.state.operand === "*") {
      this.multiply();
      console.log(this.state.operand);
    } else if (this.state.operand === "%") {
      this.divide();
      console.log(this.state.operand);
    }
  };
  render() {
    return (
      // React Bootstrap card layout and designed rows and columns to resemble buttons
      <Card bg="dark" text="white" style={{ width: "18rem" }}>
        <Card.Body>
          <Row className="row1">
            <Col id="display" sm={12}>
              0
            </Col>
          </Row>
          <Row className="row2">
            <Button><Col id="clear" sm={6}>AC</Col></Button>
            <Button onClick={this.setState.operand =  "%"}><Col id="divide" sm={3}>/</Col></Button>
            <Button onClick={this.setState.operand =  "*"}><Col id="multiply" sm={3}>x</Col></Button>
          </Row>
          <Row className="row3">
            <Button><Col id="seven" sm={3}> 7</Col></Button>
            <Button><Col id="eight" sm={3}>8</Col></Button>
            <Button><Col id="nine" sm={3}>9</Col></Button>
            <Button onClick={this.setState.operand =  "-"}><Col id="minus" sm={3}>-</Col></Button>
          </Row>
          <Row className="row4">
            <Button><Col id="three" sm={3}>4</Col></Button>
            <Button><Col id="five" sm={3}>5</Col></Button>
            <Button><Col id="six" sm={3}>6</Col></Button>
            <Button onClick={this.setState.operand =  "+"}><Col id="plus" s m={3}>+</Col></Button>
          </Row>
          <Row className="row5">
          <Button><Col id="one" sm={3}>1</Col></Button>
          <Button><Col id="two" sm={3}> 2</Col></Button>
          <Button><Col id="three" sm={3}>3</Col></Button> 
          <Button><Col id="equals" sm={3}>= </Col></Button>
          </Row>
          <Row className="row6">
          <Button><Col id="zero" sm={6}>0</Col></Button>
          <Button><Col id="decimal" sm={3}>.</Col></Button>
            <Col sm={3}></Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}

export default CalculatorLayout;
// Bootstrap grid is always 12 across
// Layout for Card
// 6 rows
// row1- 1 column x 12 across
// row2- 1 column of 6 and 2 columns of 3 3 columns 1 of 6 and 2 of 3
// row3- 4 coulmns of 3 rows
// row4- 4 columns of 3 rows
// row5- 4 columns of 3 rows css trick to create equal button behave, even though is part of two rows
// row6- row 2 exactly - refer to 2

// Functions for logic
// 1. Create isOperator function to handle +,-,/,x
// 2. Create function to update display state
// 3. Create a clear function to clear display
// 4. Switch case to handle what to do with numbers once operator is chosen
// 5. Create a function to keep track of user input
// --> Handles numbers and operation pushed
// Onclick event handlers needed for each "button pressed"
// RESEARCH onClick function in React
// RESEARCH switch case implementation in React
