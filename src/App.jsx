import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header';
import Form from './components/Form';
import Activity from './components/view/Activity';
import Article from './components/view/Article';
import Credit from './components/view/Credit';
import ContactForm from './components/ContactForm';
import Peau from './components/Content/Peau';
import Poumons from './components/Content/Poumons';
import SystemeSanguin from './components/Content/SystemeSanguin';
import Pollution from './components/Content/Pollution';
import QRcode from './components/QrCode';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<><Header /><Activity /><Form /></>} />
        <Route path="/article" element={<Article />} />
        <Route path="/credit" element={<Credit />} />
        <Route path="/peau" element={<Peau />} />
        <Route path="/poumons" element={<Poumons />} />
        <Route path="/systeme-sanguin" element={<SystemeSanguin />} />
        <Route path="/pollution" element={<Pollution />} />
        <Route path="/qrcode" element={<QRcode />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;