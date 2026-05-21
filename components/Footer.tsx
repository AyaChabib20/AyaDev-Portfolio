import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TEXTS, NAV_LINKS } from '../constants';
import { Linkedin, Send, Download, ArrowUpRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';  

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];
  
 
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'subscribed' | 'loading'>('idle');
  const [isValid, setIsValid] = useState(true);

 
  const SERVICE_ID = 'service_9tw5aft'; 
  const TEMPLATE_ID = 'template_ebn725k';
  const PUBLIC_KEY = 's6MogPndSw-EQbbRg';

   useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  
  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/AYA CHABIB (1).pdf';
    link.download = 'CV-Aya-Chabib.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

   const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
     if (email.toLowerCase().trim() === 'aya') {
      triggerEasterEgg();
      setEmail('');
      return;
    }

    if (!emailRegex.test(email)) {
      setIsValid(false);
      setTimeout(() => setIsValid(true), 2000);
      return;
    }

    setStatus('loading');

    try {

       await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        subscriber_email: email,
        subscriber_name: 'Visiteur AyaDev',
        to_name: 'Aya Chabib',
        date: new Date().toLocaleDateString()
      });

      setStatus('subscribed');
      setEmail('');
      
       setTimeout(() => {
        setStatus('idle');
      }, 4000);
      
    } catch (error) {
      console.error('Newsletter error:', error);
      alert('Erreur envoi. Réessayez!');
      setStatus('idle');
    }
  };

  const triggerEasterEgg = () => {
    const duration = 3000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4757', '#61dafb']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4757', '#61dafb']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    }());
  };

  return (
    <footer className="relative bg-gray-900 dark:bg-black text-white pt-24 pb-10 overflow-hidden border-t border-gray-800 transition-colors duration-300">
      
       <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 border-b border-gray-800 pb-16">
          
           <div className="lg:col-span-4 space-y-6 animate-fade-up">
            <div className="flex items-center gap-2 mb-2">
              <h2 className="text-3xl font-bold tracking-tight font-mono">
                <span className="text-primary">&lt;</span> AyaDev <span className="text-primary">/&gt;</span>
              </h2>
              <span className="w-2 h-5 bg-primary animate-pulse"></span>
            </div>
            
            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              {t('footer_tagline')}
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                {t('footer_status')}
              </span>
            </div>
          </div>

           <div className="lg:col-span-3 space-y-8 animate-fade-up delay-100">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">{t('footer_links_title')}</h4>
              <ul className="space-y-3">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <a 
                      href={link.href} 
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all inline-block group"
                      onClick={() => {
                        document.querySelectorAll('.nav-active').forEach(el => el.classList.remove('nav-active'));
                        document.querySelector(link.href)?.classList.add('nav-active');
                      }}
                    >
                      {t(link.key)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

             <button
              onClick={downloadCV}
              className="inline-flex items-center gap-2 text-sm font-bold text-white border-b border-primary pb-0.5 hover:text-primary transition-all duration-200 group hover:translate-x-1"
            >
              <Download size={16} className="group-hover:translate-x-0.5 transition-transform" />
              {t('footer_cv_text')}
              <ArrowUpRight size={14} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ml-1" />
            </button>
          </div>

           <div className="lg:col-span-5 animate-fade-up delay-200">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:border-white/20 transition-all duration-300">
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              <h3 className="text-2xl font-bold text-white mb-2 relative z-10">{t('footer_newsletter_title')}</h3>
              <p className="text-gray-400 text-sm mb-6 relative z-10">
                {t('footer_newsletter_text')}
              </p>

              <form onSubmit={handleSubscribe} className="relative z-10">
                <div className="relative flex items-center">
                  <input 
                    type="email"
                    required
                    placeholder={t('footer_input_placeholder')}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setIsValid(true);
                    }}
                    disabled={status === 'loading' || status === 'subscribed'}
                    className={`w-full bg-black/20 border text-white placeholder-gray-500 px-5 py-4 rounded-xl outline-none focus:ring-2 transition-all duration-300 flex-1
                      ${isValid ? 'border-white/10 focus:border-primary/50 focus:ring-primary/20' : 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20 animate-shake'}
                      ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  />
                  <button 
                    type="submit"
                    disabled={status !== 'idle' || !isValid}
                    className="absolute right-2 p-2 bg-gradient-to-r from-rose-400 to-primary text-white rounded-lg shadow-lg hover:shadow-primary/40 hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ml-2 flex-shrink-0"
                  >
                    {status === 'loading' ? (
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <Send size={18} />
                    )}
                  </button>
                </div>
                
                {!isValid && (
                  <p className="mt-2 text-xs text-red-400">Veuillez entrer une adresse email valide.</p>
                )}
                
                {status === 'subscribed' && (
                  <div className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-xl flex items-center gap-2">
                    <Check size={18} className="text-green-400 flex-shrink-0" />
                    <span className="text-sm font-bold text-green-300">{t('footer_subscribed')}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 pt-4">
          <p>© {new Date().getFullYear()} AyaDev. {t('footer_rights')}</p>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.linkedin.com/in/aya-chabib-8494a02b8" 
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#0077b5] hover:text-white transition-all hover:-translate-y-1 shadow-lg hover:shadow-[0_0_15px_rgba(0,119,181,0.4)]"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
