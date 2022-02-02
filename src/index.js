import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import "./css/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);
