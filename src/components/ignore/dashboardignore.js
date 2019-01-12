import React, { Component } from 'react';//makes component feature available in the file
import {withRouter} from 'react-router-dom';//makes the withRouter feature available in the file
import { DeckLink } from './Deck';


const LinkToDeck = ({ history }) =>//this function contains a link that'll take you to the deck page which 
<div>
  <DeckLink/>
</div>
//link found on dashboard page

class Dashboard extends Component {
  
  render() {//renders the dashboard component, displaying the word dashboard
    return (
      <div>
        <h1>Dashboard</h1>
      </div>
    );
  }
}

export default withRouter(LinkToDeck);//makes LinkToDeck available with router features to other files
export {Dashboard};//makes the Dashboard component available to other files