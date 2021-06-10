import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Character from './components/Character.js';
// import TestApp from './components/TestApp';
// import Test from './components/Test.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Character />
      {/* <TestApp /> */}
      <Footer />
    </div>
  );
}

export default App;
