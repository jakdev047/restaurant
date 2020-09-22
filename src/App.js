import React from 'react';

// route
import { BrowserRouter } from "react-router-dom";

// sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

// pages
import AppRoute from './router/AppRoute';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
