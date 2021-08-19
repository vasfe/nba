import React from 'react';
import './App.css';
import Games from "./components/Games"
import { Route, Switch, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
  //   <BrowserRouter basename={process.env.PUBLIC_URL}>
  //   <Switch >
  //     <Route exact path="/" component={Games} />
  //   </Switch>
  // </BrowserRouter>

    <Games
      title="NBA Games"
    />
  )
}

export default App;