import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


class View extends Component {
  
    render() {
      return (
        <div>
          <h1>View</h1>
        </div>
      );
    }
  }
  
  const ViewLink = () =>
    <p>
      <Link to={routes.VIEW}>View</Link>
    </p>
  
  export default withRouter(View);
  
  export {ViewLink};
  