import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Section />
      </main>
      <Footer />
    </div>
  );
}

export default App;
