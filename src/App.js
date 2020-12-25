import React from 'react';
import './components/css/App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Geschichte from "./pages/Geschichte";
import WirtschaftUndPolitik from "./pages/WirtschaftUndPolitik";
function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/pages/Map" component={Map}/>
                    <Route path="/pages/Geschichte" component={Geschichte}/>
                    <Route path="/pages/WirtschaftUndPolitik" component={WirtschaftUndPolitik}/>
                </Switch>
            </div>
        </Router>
  );
}

export default App;
