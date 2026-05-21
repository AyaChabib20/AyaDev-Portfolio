import React, { useState, useRef, useEffect } from 'react';
import { Language } from '../types';
import { TEXTS } from '../constants';
import { Mail, Linkedin, MessageCircle, Copy, Check, Send, Loader2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];
  
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [copied, setCopied] = useState(false);
  const [magneticPos, setMagneticPos] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const email = "ayachabib2012@gmail.com";
  const whatsappNumber = "+212642-977179";

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID; 
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  // console.log('SERVICE_ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);

   useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

   const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    setMagneticPos({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => {
    setMagneticPos({ x: 0, y: 0 });
  };

   const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

   const validate = () => {
    const newErrors: { [key: string]: boolean } = {};
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = true;
    if (!formData.message.trim()) newErrors.message = true;
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 2000);
      return;
    }

    setStatus('loading');

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );
      
      console.log('✅ EMAIL SENT SUCCESSFULLY!');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => setStatus('idle'), 3000);
      
    } catch (error) {
      console.error('🚫 EmailJS ERROR:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
 
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
           <div className="space-y-10 animate-slide-in-left">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
                {t('contact_title')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {t('contact_subtitle')}
              </p>
            </div>

             <div 
              onClick={copyEmail}
              className="group cursor-pointer inline-flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-cardDark border border-gray-200 dark:border-gray-700 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <div className="text-xs text-gray-500 uppercase font-bold tracking-wider">Mail to</div>
                <div className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                  {email}
                  {copied ? <Check size={16} className="text-green-500" /> : <Copy size={16} className="text-gray-400 group-hover:text-primary transition-colors" />}
                </div>
              </div>
              {copied && (
                <span className="ml-2 text-xs text-green-500 font-bold animate-fade-up">{t('contact_email_copied')}</span>
              )}
            </div>

             <div className="flex flex-wrap gap-4">
              <a href="https://www.linkedin.com/in/aya-chabib-8494a02b8" 
                 className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#0077b5] hover:text-white dark:hover:bg-[#0077b5] dark:hover:text-white transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                 target="_blank" rel="noopener noreferrer">
                <Linkedin size={24} />
              </a>
              
              <button
                onClick={copyEmail}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl"
                aria-label="Copy Email"
              >
                <Mail size={24} />
              </button>
              
              <a 
                href="https://wa.me/212762012243"  
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:-translate-y-1 transition-all"
              >
                <MessageCircle size={20} />
                WhatsApp
              </a>
            </div>
          </div>

           <div className="relative animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-rose-400/20 rounded-3xl blur-2xl transform rotate-3 scale-95 opacity-50"></div>
            
            <div className="relative bg-white/70 dark:bg-[#1e293b]/70 backdrop-blur-xl border border-white/20 dark:border-gray-700 p-8 md:p-10 rounded-3xl shadow-2xl">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
 
                 <div className="relative group">
                  <input 
                    type="text" 
                    name="from_name"
                    required
                    placeholder={t('contact_name_placeholder')}
                    value={formData.name}
                    onChange={(e) => { 
                      setFormData({...formData, name: e.target.value}); 
                      setErrors({...errors, name: false});
                    }}
                    className={`w-full bg-transparent border-b-2 py-3 text-lg font-medium text-gray-900 dark:text-white outline-none transition-all duration-300
                      ${errors.name ? 'border-red-500 placeholder-red-400 animate-shake' : 'border-gray-300 dark:border-gray-600 focus:border-primary placeholder-gray-400 dark:placeholder-gray-500'}`}
                  />
                  {errors.name && <AlertCircle size={16} className="absolute right-0 top-4 text-red-500" />}
                </div>

                 <div className="relative group">
                  <input 
                    type="email" 
                    name="from_email"
                    required
                    placeholder={t('contact_email_placeholder')}
                    value={formData.email}
                    onChange={(e) => { 
                      setFormData({...formData, email: e.target.value}); 
                      setErrors({...errors, email: false});
                    }}
                    className={`w-full bg-transparent border-b-2 py-3 text-lg font-medium text-gray-900 dark:text-white outline-none transition-all duration-300
                      ${errors.email ? 'border-red-500 placeholder-red-400 animate-shake' : 'border-gray-300 dark:border-gray-600 focus:border-primary placeholder-gray-400 dark:placeholder-gray-500'}`}
                  />
                  {errors.email && <AlertCircle size={16} className="absolute right-0 top-4 text-red-500" />}
                </div>

                 <div className="relative group">
                  <textarea 
                    name="message"
                    required
                    rows={3}
                    placeholder={t('contact_msg_placeholder')}
                    value={formData.message}
                    onChange={(e) => { 
                      setFormData({...formData, message: e.target.value}); 
                      setErrors({...errors, message: false});
                    }}
                    className={`w-full bg-transparent border-b-2 py-3 text-lg font-medium text-gray-900 dark:text-white outline-none resize-none transition-all duration-300
                      ${errors.message ? 'border-red-500 placeholder-red-400 animate-shake' : 'border-gray-300 dark:border-gray-600 focus:border-primary placeholder-gray-400 dark:placeholder-gray-500'}`}
                  />
                  {errors.message && <AlertCircle size={16} className="absolute right-0 top-4 text-red-500" />}
                </div>

                 <div className="pt-4 flex justify-end">
                  <button
                    ref={buttonRef}
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative overflow-hidden px-8 py-4 rounded-full font-bold text-white shadow-lg transition-all duration-100 ease-out flex items-center gap-2 group
                      ${status === 'success' ? 'bg-green-500 cursor-default' : 
                        status === 'error' ? 'bg-red-500 cursor-default' : 
                        'bg-gradient-to-r from-rose-400 to-primary hover:shadow-primary/40 hover:from-primary hover:to-rose-400'}
                      ${status !== 'success' && status !== 'error' ? 'hover:-translate-y-1' : ''}`}
                    style={{ transform: status !== 'success' && status !== 'error' ? `translate(${magneticPos.x}px, ${magneticPos.y}px)` : 'none' }}
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={20} className="animate-spin" />
                        Envoi en cours...
                      </>
                    ) : status === 'success' ? (
                      <>
                        <Check size={20} className="animate-bounce" />
                        Message envoyé!
                      </>
                    ) : status === 'error' ? (
                      <>
                        <AlertCircle size={20} />
                        Erreur d'envoi
                      </>
                    ) : (
                      <>
                        Envoyer
                        <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
