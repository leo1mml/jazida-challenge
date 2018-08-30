import React, { Component } from 'react';
import './App.css';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import AppRouter from './Routers/AppRouter';

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
