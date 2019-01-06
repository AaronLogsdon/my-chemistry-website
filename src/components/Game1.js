import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


class Game1 extends Component {
  
  render() {
    return (
      <div>
        <h1>Game 1</h1>
      </div>
    );
  }
}

const Game1Link = () =>
  <p>
    <Link to={routes.GAME1}>Game 1</Link>
  </p>

export default withRouter(Game1);

export {Game1Link};