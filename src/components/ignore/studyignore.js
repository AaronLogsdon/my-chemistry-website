import React, { Component } from 'react';//makes component feature available in the file
import { Link, withRouter, } from 'react-router-dom';//makes DOM features available
import * as routes from '../constants/routes';//makes all the routes in the routes file in the constants folder available in the file


class Study extends Component {//the component renders the words "Study" on to the screen
  
  render() {
    return (
      <div>
        <h1>Study</h1>
      </div>
    );
  }
}

const StudyLink = () =>//creates a link to the Study page using its route
  <p>
    <Link to={routes.STUDY}>Study</Link>
  </p>

export default withRouter(Study);//makes the Study component availble to other files

export {StudyLink};//makes the StudyLink available to other files




