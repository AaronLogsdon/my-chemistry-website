import React, { Component } from 'react';//makes component feature available in the file
import { Link, withRouter, } from 'react-router-dom';//makes DOM features available
import * as routes from '../constants/routes';//makes all the routes in the routes file in the constants folder available in the file


class Game2 extends Component {//the component renders the words "Game 2" on to the screen
  
  render() {
    return (
      <div>
        <h1>Game 2</h1>
      </div>
    );
  }
}

const Game2Link = () =>//creates a link to the game 2 page using its route
  <p>
    <Link to={routes.GAME2}>Game 2</Link>
  </p>

export default withRouter(Game2);//makes the Game2 component availble to other files

export {Game2Link};//makes the Game2Link available to other files




