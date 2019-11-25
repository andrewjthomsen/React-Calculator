import React from 'react';
import { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';

class CalculatorLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
   // React Bootstrap card layout and designed rows and columns to resemble buttons
<Card bg="dark" text="white" style={{ width: '18rem' }}>
<Card.Body>
<Row className="row1">
<Col sm={12}>0</Col>
</Row>
<Row className="row2">
<Col sm={6}>AC</Col>
<Col sm={3}>/</Col>
<Col sm={3}>x</Col>
</Row>
<Row className="row3">
<Col sm={3}>7</Col>
<Col sm={3}>8</Col>
<Col sm={3}>9</Col>
<Col sm={3}>-</Col>
</Row>
<Row className="row4">
<Col sm={3}>4</Col>
<Col sm={3}>5</Col>
<Col sm={3}>6</Col>
<Col sm={3}>+</Col>
</Row>
<Row className="row5">
<Col sm={3}>1</Col>
<Col sm={3}>2</Col>
<Col sm={3}>3</Col>
<Col sm={3}>=</Col>
</Row>
<Row className="row6">
<Col sm={6}>0</Col>
<Col sm={3}>.</Col>
<Col sm={3}></Col>
</Row>
</Card.Body>
</Card>
    )
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
