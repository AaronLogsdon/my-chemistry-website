import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';
import ViewButton from './ViewButton';
import DeleteDeckButton from './DeleteDeckButton';



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
         <ViewButton/>
         <p></p>
         <DeleteDeckButton/>
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
