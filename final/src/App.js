import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Missions from './components/Missions';
import Dragons from './components/Dragons';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/my-profile">My Profile</Link></li>
            <li><Link to="/mission">Mission</Link></li>
            <li><Link to="/rockets">Rockets</Link></li>
          </ul>
        </nav>
        <hr />
        <Routes>
        <Route path="/my-profile" component={MyProfile} />
        <Route path="/mission" component={Missions} />
        <Route path="/rockets" component={Dragons} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
