import React, { useState, useEffect } from 'react';
import { Moon, Sun, Linkedin, Menu, X } from 'lucide-react';
import { Language, Theme } from '../types';
import { NAV_LINKS, TEXTS } from '../constants';

interface NavbarProps {
  theme: Theme;
  toggleTheme: () => void;
  lang: Language;
}

const GmailIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme, lang }) => {
  const [logoText, setLogoText] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const fullText = "< AyaDev />";

   useEffect(() => {
    let index = 0;
    const typeWriter = setInterval(() => {
      setLogoText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(typeWriter);
      }
    }, 150);

    return () => clearInterval(typeWriter);
  }, []);

   const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('ayachabib2012@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const t = (key: string) => TEXTS[key][lang];

   const renderLogo = () => {
    return (
      <span className="font-bold text-2xl tracking-tight font-mono flex items-center">
        {logoText.split('').map((char, index) => {
          if (['<', '>', '/'].includes(char)) {
            return <span key={index} className="text-primary">{char}</span>;
          }
          return <span key={index} className="text-gray-900 dark:text-white">{char}</span>;
        })}
        <span className="cursor-blink text-gray-400 ml-1">|</span>
      </span>
    );
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-darkBg/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-24">
          
           <div className="flex-shrink-0 flex items-center gap-4">
            <div className="relative group cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-rose-400 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <img 
                className="relative h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-white dark:border-gray-800 object-cover"
                src="/assets/aya.png" 
                alt="AyaDev Avatar" 
              />
            </div>
            {renderLogo()}
          </div>

           <div className="hidden md:flex items-center space-x-12">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors text-base"
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center">
            
            <div className="flex items-center gap-4">

              <button
                onClick={copyEmail}
                className="text-gray-500 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-label="Copy Email"
                title="Copy Email"
              >
                <GmailIcon size={20} className={copied ? "text-green-500" : "hover:text-primary dark:hover:text-white"} />
                {copied && (
                  <span className="sr-only">Copied!</span>
                )}
              </button>
              
              <a 
                href="https://www.linkedin.com/in/aya-chabib-8494a02b8" 
                className="text-gray-500 transition-colors hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>

             <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-6"></div>

             <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none bg-transparent hover:scale-110"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'light' ? (
                <Moon size={20} className="hover:text-primary transition-colors" />
              ) : (
                <Sun size={20} className="hover:text-primary transition-colors" />
              )}
            </button>

             <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-6"></div>

             <a href="#contact" className="bg-gradient-to-r from-rose-400 to-primary text-white px-6 py-2.5 rounded-full font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transform hover:-translate-y-0.5 transition-all duration-200 hover:scale-105">
              {t('btn_contact')}
            </a>
          </div>

           <div className="md:hidden flex items-center gap-4">
             <button
               onClick={toggleTheme}
               className="text-gray-500 dark:text-gray-400 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
             >
               {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
             </button>
             <button
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="text-gray-600 dark:text-gray-300 hover:text-primary focus:outline-none p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110"
             >
               {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

       {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-cardDark border-t border-gray-200 dark:border-gray-700 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <div className="pt-4 flex items-center justify-between px-3 gap-4">
               <a href="#contact" className="flex-1 bg-gradient-to-r from-rose-400 to-primary text-white px-4 py-2 rounded-full font-bold shadow-md text-center hover:shadow-lg hover:-translate-y-0.5 transition-all">
                {t('btn_contact')}
              </a>
            </div>
            <div className="flex justify-center gap-6 pt-6">
               <button
                onClick={copyEmail}
                className="text-gray-500 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200"
                title="Copy Email"
              >
                <GmailIcon size={24} className={copied ? "text-green-500" : ""} />
              </button>
              <a href="https://www.linkedin.com/in/aya-chabib-8494a02b8" 
                 className="text-gray-500 hover:text-[#0077b5] dark:text-gray-400 dark:hover:text-[#0077b5] p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 hover:scale-110 transition-all"
                 target="_blank"
                 rel="noopener noreferrer"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
