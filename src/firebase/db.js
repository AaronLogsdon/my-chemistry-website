import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });


export const onceGetUsers = () =>
  db.ref('users').once('value');


// export const doCreateDeck = (id, DeckName, Terms, Definitions) =>
//   db.ref(`users/${id}`).set({
//     DeckName,
//     Terms,
//     Definitions,
//   });
