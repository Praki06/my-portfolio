

import { useEffect } from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import FadeIn from 'react-fade-in';
import Header from './components/Header';
import Skills from './components/Skills';

function App() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className='main-container'>
      <Header />
      <FadeIn transitionDuration={700}>
        <About />
        <Skills />
        <Experience />
      </FadeIn>
    </div>
  )
}

export default App
