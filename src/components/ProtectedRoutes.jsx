import React from "react";
import { Redirect, Route } from "react-router-dom";
import {authContext} from "../context/AuthContext";
function ProtectedRoutes({children, ...rest}){
    const auth= React.useContext(authContext).state;
   
 
  return(
      <Route {...rest}
      
      render={({location})=>
        (auth.loggedIn)?(children):(
            <Redirect
            to={{
                pathname: "/",
                state:{from:location},
            }}
            />
        )
    }
    />
     
  )


}

export default ProtectedRoutes;