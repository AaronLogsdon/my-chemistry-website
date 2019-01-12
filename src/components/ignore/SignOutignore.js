import React from 'react';//makes react available in the file

import { auth } from '../firebase';//makes auth file from firebase folder available

const SignOutButton = () =>
  <button
    type="button"//creates a button
    onClick={auth.doSignOut}//signs the user out when the button is clicked
  >
    Sign Out
  </button>

export default SignOutButton;//creates a means of making the SignOut file available to other files