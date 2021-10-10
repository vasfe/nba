import React from 'react';
import './App.css';
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Stats from './pages/Stats';
import Games from "./pages/Games"
import store from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Navbar />
        <Switch >
          <Route exact path="/" component={Games} />
          <Route exact path="/stats" component={Stats} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App;