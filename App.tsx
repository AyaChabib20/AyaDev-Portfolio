
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Theme, Language } from './types';

const App: React.FC = () => {
  // --- Theme State & Logic ---
  const [theme, setTheme] = useState<Theme>('light');

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Toggle Theme
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // --- Language State & Logic ---
  // Hardcoded to French as requested
  const lang: Language = 'fr';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary selection:text-white">
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        lang={lang} 
      />
      
      <main className="flex-grow">
        <Hero lang={lang} />
        <About lang={lang} />
        <Education lang={lang} />
        <Services lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};

export default App;
