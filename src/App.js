import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './assg/Login/Login';
import Signup from './assg/Signup/Signup';
import './styles.css';
import { SocialIcon } from 'react-social-icons';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Signup" component={Signup} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
