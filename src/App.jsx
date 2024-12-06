import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import Activity from './components/view/Activity';
import Article from './components/view/Article';
import Credit from './components/view/Credit';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<><Header /><Activity /><Form /></>} />
        <Route path="/article" element={<Article />} />
        <Route path="/credit" element={<Credit />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;