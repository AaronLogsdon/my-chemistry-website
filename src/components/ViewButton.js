import React from 'react';
import { Link} from 'react-router-dom';
import { Col, Row, Button, Form, FormGroup} from 'reactstrap';



const ViewButton = () =>

 <Form>
    <FormGroup check row>
      <Col sm={{ size: 5, offset: 0 }}>
      <Row sm = {{size: 5, offset: 0}}>
      <p></p>
      <Link to="/view">
        <Button color="success" variant="navy" type="submit" size = "lg">View deck</Button>
      </Link>
      </Row>
      </Col>
    </FormGroup>
  </Form>

export default ViewButton;