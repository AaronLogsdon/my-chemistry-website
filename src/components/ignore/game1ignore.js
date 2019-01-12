import React, { Component } from 'react';//makes component feature available in the file
import { Link, withRouter, } from 'react-router-dom';//makes DOM features available
import * as routes from '../constants/routes';//makes all the routes in the routes file in the constants folder available in the file


class Game1 extends Component {//the component renders the words "Game 1" on to the screen
  
  render() {
    return (
      <div>
        <h1>Game 1</h1>
      </div>
    );
  }
}

const Game1Link = () =>//creates a link to the game 1 page using its route
  <p>
    <Link to={routes.GAME1}>Game 1</Link>
  </p>

export default withRouter(Game1);//makes the Game1 component availble to other files

export {Game1Link};//makes the Game1Link available to other files