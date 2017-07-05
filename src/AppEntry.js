import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './containers/app';
import reducers from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { middleware as asyncTool } from 'redux-pack';
import Header from './components/header';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, {} ,composeEnhancers(applyMiddleware(thunk, asyncTool )));
// const store = createStore(reducers, {} ,composeEnhancers(applyMiddleware(thunk, asyncTool , logger)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="main-container">
        <Header />
        <div className="main-content">
          <Switch>
            <Route exact path="/" component={App} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('app'));
