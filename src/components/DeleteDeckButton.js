import React from 'react';
import { Col, Row, Button, Form, FormGroup} from 'reactstrap';



const AddDeckButton = () =>

 <Form>
    <FormGroup check row>
      <Col sm={{ size: 5, offset: 0 }}>
      <Row sm = {{size: 5, offset: 0}}>
        <p></p>
        <Button color="danger" variant="danger" type="submit" size = "lg">Delete deck</Button>
      </Row>
      </Col>
    </FormGroup>
  </Form>

export default AddDeckButton ;