import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router'
import { Link } from 'react-router-dom'
import history from './configs/router.config'
import TodoPage from './containers/todo/TodoPage'
import NotFoundPage from './containers/not-found/NotFoundPage'
import './App.css';
import HistoryPage from './containers/history/HistoryPage';



class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Link to="/">Home</Link>
          <Link to="/history">History</Link>

          <Switch>
            <Route exact path="/" component={TodoPage} />
            <Route path="/history" component={HistoryPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

