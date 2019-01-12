import React from 'react';//makes react available in the file

const AuthUserContext = React.createContext(null);//provides information on the user to web application
                                                  //whilst the user is having a session on it
                                                  //information like whether the user is authenticated or not

export default AuthUserContext;//creates a means of making the AuthUserContext file feature available to other files
