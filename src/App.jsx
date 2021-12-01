import React from 'react';
import './css/style.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Dashboard from './pages/dasboard';
function App() {
 

  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
        <Route path="/" exact={true} component={Login} />
        
          
        <Route path="/register" exact={true} component={Register} /> 
          <Route path="/dashboard" exact={true} component={Dashboard} />
          <Route  component={Login} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
