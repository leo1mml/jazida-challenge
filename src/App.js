import React, { Component } from 'react';
import './App.css';
import 'normalize.css/normalize.css';
import { Provider } from 'react-redux';
import configureStore from './Store/configureStore';
import AppRouter from './Routers/AppRouter';

class App extends Component {

  store = configureStore()

  render() {
    return (
      <Provider store={this.store}>
        <AppRouter/>
      </Provider>
    );
  }
}

export default App;
