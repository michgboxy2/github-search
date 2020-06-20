import React from 'react';
import {Route, HashRouter} from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <HashRouter>
        <div className="App">
           <Route exact path="/" component={Home}/>
        </div>
    </HashRouter>
  );
}

export default App;
