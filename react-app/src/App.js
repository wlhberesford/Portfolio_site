import React from 'react';
import './App.css';
import Header from './components/Header';
import LandingField from './components/LandingField';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Header />


      <LandingField text_left={true} 
      title="Hi, I'm Liam Beresford"
      body = "Computer Science and Economics student @ RPI"
      />
      <LandingField text_left={false} 
      title="Education"
      body = "Expecting BS in Computer Science and Economics in December 2025 and MS in Econmomics in December 2026 focusing my studies in Machine Learning, Econometrics, and Game Theory."
      />

      <LandingField text_left={true}
      title="Experience"
      body = "I have worked as a Software Engineer Intern at Optum, a UnitedHealth Group company, where I developed a application to generated batched automated calls to doctors leveraging GPT-4o. I will be returning to Optum in the summer of 2025."
      />


      <Footer />
    </div>
  );
}

export default App;
