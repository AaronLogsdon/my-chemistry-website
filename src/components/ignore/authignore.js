import { auth } from './firebase';//makes auth file from firebase folder available


// Sign In
export const doSignInWithEmailAndPassword = (email, password) =>//function that takes and email and password
auth.signInWithEmailAndPassword(email, password);//signs in a user with an email and password

// Sign out
export const doSignOut = () =>
  auth.signOut();//signs a user out

