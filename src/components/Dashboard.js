import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { DeckLink } from './Deck';
import styled from 'styled-components';

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
</div>




// class Dashboard extends Component {
  
//   render() { 
//       return ( 
//         <div>
//         <h1>Dashboard</h1> 
//         </div>
//       );
//     }
//   }

export default withRouter(LinkToDeck);
// export {Dashboard};

