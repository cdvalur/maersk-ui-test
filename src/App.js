import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import UniversityList from './components/UniversityList';
import UniversityDetailsComponent from './components/UniversityDetailsComponent';
import './App.css';

function App() {
  return (
       <Router>
         <div className="App">
          <Switch>
            <Redirect exact from="/" to="/university" />
            <Route exact path="/university">
              <UniversityList />
            </Route>
            <Route exact path="/university/:name">
              <UniversityDetailsComponent />
            </Route>
          </Switch>
        </div>
       </Router>
  );
}

export default App;
