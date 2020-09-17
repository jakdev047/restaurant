import React from 'react';

// sass
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/index.scss';

// layer
import Header from './layer/Header/Header';
import Footer from './layer/Footer/Footer';

// pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
