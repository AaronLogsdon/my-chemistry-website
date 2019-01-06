import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


class Test extends Component {
  
  render() {
    return (
      <div>
        <h1>Test</h1>
      </div>
    );
  }
}

const TestLink = () =>
  <p>
    <Link to={routes.TEST}>Test</Link>
  </p>

export default withRouter(Test);

export {TestLink};