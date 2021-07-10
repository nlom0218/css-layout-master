import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import FlexBox from "./FlexBox/FlexBox"
import AlignSelf from './FlexBox/AlignSelf';
import Home from './Home';
import Wrap from './FlexBox/Wrap';
import Grow from './FlexBox/Grow';
import Shrink from './FlexBox/Shrink';
import Basis from "./FlexBox/Basis"
import Grid from "./Grid/Grid"
import BasicConcepts from './Grid/BasicConcepts';
import Areas from './Grid/Areas';
import RowsColumns from './Grid/RowsColumns';
import Shortcuts from './Grid/ShortCuts';
import Template from './Grid/Template';
import Items from './Grid/Items';
import Auto from './Grid/Auto';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact><Home /></Route>
        <Route path="/flexbox/alignSelf"><AlignSelf /></Route>
        <Route path="/flexbox/wrap"><Wrap /></Route>
        <Route path="/flexbox/grow"><Grow /></Route>
        <Route path="/flexbox/shrink"><Shrink /></Route>
        <Route path="/flexbox/basis"><Basis /></Route>
        <Route path="/flexbox"><FlexBox /></Route>
        <Route path="/grid/concepts"><BasicConcepts /></Route>
        <Route path="/grid/areas"><Areas /></Route>
        <Route path="/grid/rowsColumns"><RowsColumns /></Route>
        <Route path="/grid/shortcuts"><Shortcuts /></Route>
        <Route path="/grid/template"><Template /></Route>
        <Route path="/grid/items"><Items /></Route>
        <Route path="/grid/auto"><Auto /></Route>
        <Route path="/grid"><Grid /></Route>
      </Switch>
    </Router>
  );
}

export default App;
