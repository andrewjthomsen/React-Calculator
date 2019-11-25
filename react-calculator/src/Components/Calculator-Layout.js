import React from 'react';
import bootstrap from 'react-bootstrap';
import { Card } from 'react-bootstrap';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
}
<Card bg="dark" text="white" style={{ width: '18rem' }}>
<Card.Header>Header</Card.Header>
<Card.Body>
<row className="row1">
<Col sm={12}></Col>
</row>
<row className="row2">
<Col sm={6}>AC</Col>
<Col sm={3}>/</Col>
<Col sm={3}>x</Col>
</row>
<row className="row3">
<Col sm={3}>7</Col>
<Col sm={3}>8</Col>
<Col sm={3}>9</Col>
<Col sm={3}>-</Col>
</row>
<row className="row4">
<Col sm={3}>4</Col>
<Col sm={3}>5</Col>
<Col sm={3}>6</Col>
<Col sm={3}>+</Col>
</row>
<row className="row5">
<Col sm={3}>1</Col>
<Col sm={3}>2</Col>
<Col sm={3}>3</Col>
<Col sm={3}>=</Col>
</row>
<row className="row6">
<Col sm={6}>0</Col>
<Col sm={3}>.</Col>
<Col sm={3}></Col>
</row>
</Card.Body>
</Card>

// Bootstrap grid is always 12 across
// Layout for Card
// 6 rows
// row1- 1 column x 12 across
// row2- 1 column of 6 and 2 columns of 3 3 columns 1 of 6 and 2 of 3
// row3- 4 coulmns of 3 rows
// row4- 4 columns of 3 rows
// row5- 4 columns of 3 rows css trick to create equal button behave, even though is part of two rows
// row6- row 2 exactly - refer to 2