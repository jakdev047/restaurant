import React from 'react';

// route
import { BrowserRouter } from "react-router-dom";

// sass
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

// pages
import AppRoute from './router/AppRoute';

// store
import { Provider } from 'react-redux';
import store from './data/store';

function App() {
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
