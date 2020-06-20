import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Home from './components/Home';
import User from './components/User';

const App = () => {
  return (
    <HashRouter>
        <div className="App">
           <Route exact path="/" component={Home}/>
           <Route exact path="/:username" component={User} />
        </div>
    </HashRouter>
  );
}

export default App;
