import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from './store';

require('./index.html');

const container = document.getElementById('app-container');

ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <App></App>
    </Provider>
  </AppContainer>,
  container
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <Provider store={store}>
          <App></App>
        </Provider>
      </AppContainer>,
      container
    );
  });
}