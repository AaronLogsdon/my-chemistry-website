import { db } from './firebase';//makes db file from firebase folder available


export const onceGetUsers = () =>
  db.ref('users').once('value');//obtains a user value from firebase database