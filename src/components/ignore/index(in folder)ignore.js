import * as auth from './auth';//makes all auth features available from auth file
import * as firebase from './firebase';//makes all firebase features available from firebase file
import * as db from './db';//makes all db features available from db file


export {//makes auth, firebase and db files available for use by other files
  auth,
  firebase,
  db,
};