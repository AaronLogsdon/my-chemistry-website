import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({
    username,
    email,
  });

  export const doAddDeck = (id, ) =>
  db.ref(`users/${uid}/decks/${deck.id}`).set(deck);

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...