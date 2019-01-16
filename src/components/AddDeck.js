import React, { Component } from 'react';
import { Container, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import * as routes from '../constants/routes';
import { Link} from 'react-router-dom';



const INITIAL_STATE = {
  DeckName: '',
  Term: '',
  Definition: '',
  Terms: [{ DeckName: '' }],
  Definitions: [{ DeckName: '' }],
  error: null,
};


class AddDeck extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = { ...INITIAL_STATE };
  }

  
  
  handleDeckNameChange = (evt) => {
    this.setState({ DeckName: evt.target.value });
  }
  
  handleTermChange = (idx) => (evt) => {
    const newTerms = this.state.Terms.map((Term, sidx) => {
      if (idx !== sidx) return Term;
      return { ...Term, DeckName: evt.target.value };
    });
    
    this.setState({ Terms: newTerms });
  }

  handleDefinitionChange = (idx) => (evt) => {
    const newDefinitions = this.state.Definitions.map((Definition, sidx) => {
      if (idx !== sidx) return Definition;
      return { ...Definition, DeckName: evt.target.value };
    });
    
    this.setState({ Definitions: newDefinitions });
  }
  
  handleSubmit = (evt) => {
    const { DeckName, Terms, Definitions } = this.state;
    alert(`Incorporated: ${DeckName} with ${Terms.length} term(s) and ${Definitions.length} definition(s)`);
  }

  handleAddTerm = () => {
    this.setState({ Terms: this.state.Terms.concat([{ DeckName: '' }]) });
  }
  
  handleRemoveTerm = (idx) => () => {
    this.setState({ Terms: this.state.Terms.filter((s, sidx) => idx !== sidx) });
  }

    
  handleAddDefinition = () => {
    this.setState({ Definitions: this.state.Definitions.concat([{ DeckName: '' }]) });
  }
  
  handleRemoveDefinition = (idx) => () => {
    this.setState({ Definitions: this.state.Definitions.filter((s, sidx) => idx !== sidx) });
  }
  
  render() { 

    const {
      Terms,
      Definitions,
      error,
    } = this.state;
    
    const isInvalidTermAdd =
    Terms.length > 9;

    const isInvalidTermDelete =
    Terms.length < 2;

    const isInvalidDefinitionAdd =
    Definitions.length > 9; 


    const isInvalidDefinitionDelete =
    Definitions.length < 2;

    const isInvalidAddDeck =
    Definitions.length != Terms.length;

   
    return (
      <Form onSubmit={this.handleSubmit}>

       
       <FormGroup row>
          
          <Label for="exampleDeckName" sm={2}>Choose a deck name</Label>
          
          <Col sm={5}>
        <Input
          type="text"
          placeholder="Deck name"
          value={this.state.DeckName}
          onChange={this.handleDeckNameChange}
        />
        </Col>
        </FormGroup>
        <p></p>
       

       <FormGroup row>
          
        <Label for="exampleDeckName" sm={2}>Choose some terms</Label>
        <Col sm={5}>

        {this.state.Terms.map((Term, idx) => (
          <div className="Term">
            <Input
              type="text"
              placeholder={`Term #${idx + 1}`}
              value={Term.DeckName}
              onChange={this.handleTermChange(idx)}
            />
            <p></p>
            <Button type="button" onClick={this.handleRemoveTerm(idx)} className="small" color="primary" outline color="danger" variant="danger" disabled={isInvalidTermDelete}>Delete term</Button>
          </div>
        ))}
        <p></p>
        <Button type="button" onClick={this.handleAddTerm} className="small" color="primary" outline color="success" variant="danger" disabled={isInvalidTermAdd}>Add Term</Button>
        </Col>
        </FormGroup>
        <p></p>
        
        
        <FormGroup row>
          
        <Label for="exampleDeckName" sm={2}>Choose some definitions</Label>
          
          <Col sm={5}>
      
        {this.state.Definitions.map((Definition, idx) => (
         <div className="Definition">
           <Input
             type="text"
             placeholder={`Definition #${idx + 1}`}
             value={Definition.DeckName}
             onChange={this.handleDefinitionChange(idx)}
           />
           <p></p>
           <Button type="button" onClick={this.handleRemoveDefinition(idx)} className="small" color="primary" outline color="danger" variant="danger" disabled={isInvalidDefinitionDelete}>Delete definition</Button>
         </div>
       ))}
       <p></p>
       <Button type="button" onClick={this.handleAddDefinition} className="small" color="primary" outline color="success" variant="danger" disabled={isInvalidDefinitionAdd}>Add Definition</Button>
       <p></p>
       </Col>
       </FormGroup>
       
       <FormGroup check row>
          <Col sm={{ size: 5, offset: 2 }}>
          <Link to = {routes.DASHBOAD}>
            <Button onClick={this.handleSubmit} color="primary" outline color="primary" variant="danger" disabled={isInvalidAddDeck}>Add deck</Button>
          </Link>
          </Col>
       </FormGroup>

       { error && <p>{error.message}</p> }

      </Form>
    )
  }
}



export default (AddDeck);