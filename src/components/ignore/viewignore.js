import React, { Component } from 'react';//makes component feature available in the file
import { Link, withRouter, } from 'react-router-dom';//makes DOM features available
import * as routes from '../constants/routes';//makes all the routes in the routes file in the constants folder available in the file


class View extends Component {//the component renders the words "View" on to the screen
  
  render() {
    return (
      <div>
        <h1>View</h1>
      </div>
    );
  }
}

const ViewLink = () =>//creates a link to the View page using its route
  <p>
    <Link to={routes.VIEW}>View</Link>
  </p>

export default withRouter(View);//makes the View component availble to other files

export {ViewLink};//makes the ViewLink available to other files