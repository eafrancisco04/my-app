import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import Bio from './components/Bio'
import "./css/style.css"

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Bio />

    <Footer />

  </React.StrictMode>,
  document.getElementById('root')
);
