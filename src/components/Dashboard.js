import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import { DeckLink } from './Deck';





const LinkToDeck = ({ history }) =>
<div>
  <DeckLink/>
</div>



class Dashboard extends Component {
  
  render() {
    
      // const decks = [
      //   {
      //     id: 1,
      //     name: 'Deck one',
      //     description: 'This is my first deck',
      //     cards: [
      //     {
      //       keyTerm: "Key term for card 1",
      //       definition: "definition for key term of card1"
      //     },
      //     {
      //       keyTerm: "Key term for card 2",
      //       definition: "definition for key term of card 2"
      //     },
      //     ]
      //   },
      //   {
      //     id: 2,
      //     name: 'Deck two',
      //     description: 'This is my second deck',
      //     cards: [
      //     {
      //       keyTerm: "Key term for card 1",
      //       definition: "definition for key term of card1"
      //     },
      //     {
      //       keyTerm: "Key term for card 2",
      //       definition: "definition for key term of card 2"
      //     },
      //     ]
      //   },
  
  
  
      // ]
     
      return (
        <div>
  
          {/* {decks.map(function(d, idx){
           return (<li key={idx}>{d.name}</li>)
         })}                                             */}
          
         <h1>Dashboard</h1> 
        </div>
      );
    }
  }

export default withRouter(LinkToDeck);
export {Dashboard};

// decks.map((item, index) => <li key={index}><Link to={`/decks/${item}`}>{item}</Link></li>)