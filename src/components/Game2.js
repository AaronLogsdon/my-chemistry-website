import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';
import * as routes from '../constants/routes';


class Game2 extends Component {
  
  render() {
    return (
      <div>
        <h1>Game 2</h1>
      </div>
    );
  }
}

const Game2Link = () =>
  <p>
    <Link to={routes.GAME2}>Game 2</Link>
  </p>

export default withRouter(Game2);

export {Game2Link};
