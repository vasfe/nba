import React from 'react';
import './App.css';
import { IAppProps } from './interface';
import Games from './pages/Games';

const App = (props: IAppProps)=> {
    return (
      <Games
        title="NBA Games"
        >
      </Games>
    );
}
export default App;