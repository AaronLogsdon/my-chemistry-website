import React from 'react';

import { auth } from '../firebase';


const SignOutButton = () =>
  <button
    onClick={auth.doSignOut}
    style = {{backgroundColor: "white"}}
    style = {{color: "blue"}}
  >
    Sign Out
  </button>

export default SignOutButton;