
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import  { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers';


// reducers = ()=>'hello';

const store = createStore(reducers, applyMiddleware(reduxThunk));

const RNRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent(appName, () => RNRedux);
