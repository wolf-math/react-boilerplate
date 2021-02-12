import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.page';
import AnotherPage from './pages/another-page/another-page.page'

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/another" component={AnotherPage}/>
      </Switch>
    </div>
  );
}

export default App;
