import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Navbar from './Navbar';

import './style.css';

function App() {
  return (
    <React.Fragment className="Main">
      <Navbar />
      <Header/>
      <Container/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
