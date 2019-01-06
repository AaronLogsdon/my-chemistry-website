import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


class Study extends Component {
  
  render() {
    return (
      <div>
        <h1>Study</h1>
      </div>
    );
  }
}

const StudyLink = () =>
  <p>
    <Link to={routes.STUDY}>Study</Link>
  </p>

export default withRouter(Study);

export {StudyLink};
