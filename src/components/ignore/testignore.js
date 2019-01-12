import React, { Component } from 'react';//makes component feature available in the file
import { Link, withRouter, } from 'react-router-dom';//makes DOM features available
import * as routes from '../constants/routes';//makes all the routes in the routes file in the constants folder available in the file


class Test extends Component {//the component renders the words "Test" on to the screen
  
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

const TestLink = () =>//creates a link to the Test page using its route
  <p>
    <Link to={routes.TEST}>Test</Link>
  </p>

export default withRouter(Test);//makes the Test component availble to other files

export {TestLink};//makes the TestLink available to other files
