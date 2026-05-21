import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';
import { Language } from '../types';
import { TEXTS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];

  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      const isEvening = hour >= 18 || hour < 5;  

      if (lang === 'fr') {
        setGreeting(isEvening ? 'Bonsoir' : 'Bonjour');
      } else {
        setGreeting(isEvening ? 'Good evening' : 'Good morning');
      }
    };

    updateGreeting();
     const timer = setInterval(updateGreeting, 60000);
    return () => clearInterval(timer);
  }, [lang]);

   const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(150);  
  const [index, setIndex] = useState(1);
  const toRotate = [ "Développeuse Full Stack", "Passionnée de Clean Code", "Experte Laravel" ];
  const period = 2000;  

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prev => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
        setIndex(prevIndex => prevIndex + 1);
    }
  };
   
  const downloadCV = () => {
     
    const link = document.createElement('a');
    link.href = '/AYA CHABIB (1).pdf';  
    link.download = 'CV-Aya-Chabib.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-28 pb-20 px-6 lg:px-12 overflow-hidden bg-gray-50 dark:bg-darkBg transition-colors duration-300 relative">
      
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        
         <div className="order-2 lg:order-1 opacity-0 animate-slide-in-left text-left">
          
           <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            {greeting}, je suis <span className="text-primary">Aya</span>
          </h2>
          
           <h3 className="text-2xl sm:text-3xl font-mono text-gray-700 dark:text-gray-300 font-medium mb-6 min-h-[40px]">
            {text}<span className="border-r-4 border-primary ml-1 animate-pulse"></span>
          </h3>

           <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg mb-10">
            Développeuse web passionnée, spécialisée en <span className="font-bold text-gray-800 dark:text-gray-200">Laravel</span> et <span className="font-bold text-gray-800 dark:text-gray-200">React</span>. 
            Je conçois des architectures robustes et des interfaces élégantes, alliant performance technique et design intuitif.
          </p>

           <div className="flex flex-wrap gap-5">
            <a 
              href="#projects" 
              className="bg-primary text-white px-8 py-3.5 rounded-full font-bold shadow-lg shadow-primary/30 hover:bg-primaryHover hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300"
            >
              Voir mes Projets
            </a>

             <button 
              onClick={downloadCV}
              className="px-8 py-3.5 rounded-full font-bold text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 hover:border-primary hover:text-primary dark:hover:border-primary dark:hover:text-primary bg-transparent hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:-translate-y-0.5 group"
            >
              Télécharger CV
              <Download size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>

         <div className="order-1 lg:order-2 opacity-0 animate-slide-in-right flex justify-center lg:justify-end relative">
            <div className="relative group">
              
               <div className="absolute inset-0 bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 animate-morph scale-105 opacity-50"></div>
              
               <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] animate-morph overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_20px_50px_rgba(255,71,87,0.5)] bg-gray-100 dark:bg-cardDark">
                  <img 
                      src="assets/AYACI.png" 
                      alt="AyaDev Profile" 
                      className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
