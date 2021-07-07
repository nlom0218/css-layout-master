import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FlexBox from "./FlexBox/FlexBox"
import AlignSelf from './FlexBox/AlignSelf';
import Home from './Home';
import Wrap from './FlexBox/Wrap';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/flexbox/alignSelf"><AlignSelf /></Route>
        <Route path="/flexbox/wrap"><Wrap /></Route>
        <Route path="/flexbox"><FlexBox /></Route>
      </Switch>
    </Router>
  );
}

export default App;
