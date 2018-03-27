import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { store } from './store';
import { NewStudent } from './containers/NewStudent';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NewStudent />
      </Provider>
    );
  }
}

export default App;
