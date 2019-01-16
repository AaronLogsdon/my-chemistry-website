import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { DeckLink } from './Deck';
import AddDeckButton from './AddDeckButton';

const divStyle = {
  margin: 'auto',
  width: '95%',
  height: '80vh',
  border: 'double 10px white',
  padding: '10px',
  backgroundColor: "#2086D3",
  color: "white",
};


const LinkToDeck = ({ history }) =>
<div style={divStyle}>
<h1>Dashboard</h1>
<p></p>
<DeckLink/>
<p></p>
<AddDeckButton/>
</div>


export default withRouter(LinkToDeck);
// export {Dashboard};

