import React from 'react';

// route
import { BrowserRouter } from "react-router-dom";

// sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

// pages
import AppRoute from './router/AppRoute';

// store
import { Provider } from 'react-redux';
import store from './data/store';

function App() {
  console.log('App.js:',store.getState());
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <AppRoute/>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
