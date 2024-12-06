import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import Activity from './components/view/Activity';

function App() {
  return (
    <Router>
      <Navigation />
      <Header />
      <Activity />
      <Footer />
    </Router>
  );
}

export default App;