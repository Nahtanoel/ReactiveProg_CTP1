import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Navbar from './Navbar';

import './style.css';

function App() {
  return (
    <React.Fragment >
      <div className="Main">
        <Navbar />
        <Header />
        <Container />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
