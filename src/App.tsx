import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Navbar } from './components';
import { routes } from './routes';

const App = () => {

  return (
      <BrowserRouter >
        <Navbar />
        <Switch >
          {routes.map(({ url, component }) => <Route key={url} exact path={url} component={component} />)}
        </Switch>
      </BrowserRouter>
  )
}

export default App;


