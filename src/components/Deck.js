
import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import { TestLink } from './Test';
import { StudyLink } from './Study';
import { Game1Link } from './Game1';
import { Game2Link } from './Game2';
import { ViewLink } from './View';
import styled from 'styled-components';
import FlashcardApp from 'react-flashcard-app';

const divStyle = {
  margin: 'auto',
  width: '95%',
  height: '80vh',
  border: 'double 10px white',
  padding: '10px',
  backgroundColor: "#2086D3",
  color: "white",
};


class Deck extends Component {
  
  render() {
    return (
      <div style={divStyle}>
         <ViewLink/>
      </div>
    );
  }
}

const DeckLink = () =>
  <h3>
    <Link to={routes.DECK} style = {{color: "navy"}}>Deck</Link>
  </h3>

export default withRouter(Deck);

export {DeckLink};
