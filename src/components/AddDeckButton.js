import React from 'react';
import { Link} from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup} from 'reactstrap';



const AddDeckButton = () =>

 <Form>
    <FormGroup check row>
      <Col sm={{ size: 5, offset: 0 }}>
      <Row sm = {{size: 5, offset: 0}}>
      <p></p>
      <Link to="/add-deck">
        <Button color="success" variant="navy" type="submit" size = "lg">Add a flashcard deck</Button>
      </Link>
      </Row>
      </Col>
    </FormGroup>
  </Form>

export default AddDeckButton ;