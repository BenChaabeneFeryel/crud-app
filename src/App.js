import React from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout.js';
import Accueil from './layouts/internaute/Accueil.js';
import Login from './components/Login.js';
import './assets/admin/css/styles.css';
import './assets/admin/js/scripts';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' name='Accueil' render={(props)=> <Accueil {...props}/> } />
          <Route path='/admin' name='Admin' render={(props)=> <MasterLayout {...props} /> } />
          <Route path='/login' name='Login' render={(props)=> <Login {...props} /> } />
        </Switch>
      </Router> 
    </div>
  );
}

export default App;
