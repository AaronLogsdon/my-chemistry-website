import React from 'react';//makes the react library available in my project
import ReactDOM from 'react-dom';//makes the document object model avaiable in my project
import './index.css';//makes css available in my project
import App from './App';//makes my App file available to all the files
import * as serviceWorker from './serviceWorker';//allows project to work offline

ReactDOM.render(<App />, document.getElementById('root'));//allows all components to be rendered on the screen via my App file


serviceWorker.unregister();//stops app working offline

