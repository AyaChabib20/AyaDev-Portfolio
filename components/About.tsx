import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { TEXTS, TECH_STACK } from '../constants';
import { Terminal, Code2, Database, Layout, ShieldCheck, Cpu, GitBranch, PenTool, Send, TerminalSquare, Atom, FileCode, Wind, Server, ScanSearch, TestTube2, Kanban } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

// Map string icon names to Lucide components
const IconMap: { [key: string]: any } = {
  Atom, FileCode, Wind, Server, Code2, Database, ScanSearch, TestTube2, Kanban,
  PenTool, GitBranch, Send, TerminalSquare
};

// --- Terminal Overlay Component ---
const TerminalOverlay = ({ isOpen, onClose, lang }: { isOpen: boolean; onClose: () => void; lang: Language }) => {
  // Safe translation helper
  const t = (key: string) => {
    if (!TEXTS[key]) return '';
    return TEXTS[key][lang] || '';
  };

  const [lines, setLines] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle open/close animation lifecycle
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Handle typing effect
  const content = [
    t('term_cmd'),
    t('term_name'),
    t('term_edu'),
    t('term_lang'),
    t('term_soft'),
    t('term_goal'),
  ];

  useEffect(() => {
    if (isOpen) {
      setLines([]); // Reset lines when opening
      let lineIndex = 0;
      let timeoutId: ReturnType<typeof setTimeout>;
      
      const typeLine = () => {
        if (lineIndex < content.length) {
          const currentLine = content[lineIndex];
          if (currentLine) {
             setLines(prev => [...prev, currentLine]);
          }
          lineIndex++;
          timeoutId = setTimeout(typeLine, 600); // Delay between lines
        }
      };

      typeLine();
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, lang]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Don't render if closed and animation finished
  if (!isVisible && !isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className={`w-full max-w-2xl bg-[#1a1b26] rounded-lg shadow-2xl border border-gray-700 overflow-hidden font-mono relative ${isOpen ? 'animate-zoom-in' : 'animate-zoom-out'}`}
        onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside
      >
        {/* Terminal Header */}
        <div className="bg-[#16161e] px-4 py-3 flex items-center justify-between border-b border-gray-800">
          <div className="flex gap-2">
            <button 
              className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 cursor-pointer focus:outline-none transition-colors" 
              onClick={onClose}
              aria-label="Close"
            />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
          </div>
          <div className="text-gray-500 text-xs flex items-center gap-1">
             <Terminal size={10} />
             <span>aya.dev — zsh</span>
          </div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 text-[#a9b1d6] font-mono text-sm md:text-base h-80 overflow-y-auto custom-scrollbar leading-relaxed">
          {lines.map((line, idx) => (
            <div key={idx} className="mb-2">
              <span className="text-[#c0caf5] mr-2">$</span>
              <span className="opacity-0 animate-[slideInLeft_0.2s_ease-out_forwards]">
                {line && line.startsWith('$') ? line.substring(2) : line}
              </span>
            </div>
          ))}
          <div className="animate-pulse inline-block w-2.5 h-5 bg-[#7aa2f7] ml-1 align-middle"></div>
        </div>
      </div>
    </div>
  );
};

// --- Hover Tooltip Component (Glass Card Style) ---
const TechCard = ({ name, tooltipKey, iconName, lang }: { name: string, tooltipKey: string, iconName: string, lang: Language }) => {
  const t = (key: string) => TEXTS[key][lang];
  const Icon = IconMap[iconName] || Code2;
  
  return (
    <div className="group/card relative flex items-center gap-3 p-3 bg-white/40 dark:bg-black/20 rounded-xl border border-white/30 dark:border-white/10 hover:bg-white/60 dark:hover:bg-black/40 hover:-translate-y-1 transition-all duration-300 cursor-default">
      <div className="p-2 bg-gradient-to-br from-primary/10 to-rose-500/10 rounded-lg text-primary">
         <Icon size={18} />
      </div>
      <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{name}</span>
      
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 p-2 bg-gray-900 text-white text-xs rounded-md shadow-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 pointer-events-none z-20 text-center translate-y-2 group-hover/card:translate-y-0 backdrop-blur-md border border-gray-700">
        {t(tooltipKey)}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
      <TerminalOverlay isOpen={isTerminalOpen} onClose={() => setIsTerminalOpen(false)} lang={lang} />

      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {t('about_headline')}
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-rose-400 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* BLOCK A: STORY (60% width -> md:col-span-3) */}
          <div className="md:col-span-3 p-8 rounded-3xl bg-white/70 dark:bg-cardDark/70 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-lg hover:shadow-[0_0_30px_rgba(255,71,87,0.1)] transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                <Code2 size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white font-mono">
                {t('about_story_title')}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
              {t('about_story_text')}
            </p>
          </div>

          {/* BLOCK B: STATUS (40% width -> md:col-span-2) */}
          <div className="md:col-span-2 flex flex-col gap-6">
             <div className="flex-1 p-8 rounded-3xl bg-white/70 dark:bg-cardDark/70 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-lg hover:shadow-[0_0_30px_rgba(255,71,87,0.1)] transition-all duration-300 group flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Available</span>
                </div>
                
                <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
                  {t('about_status_badge')}
                </h4>
                <div className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white mb-2">
                   {t('about_status_title')}
                </div>
                <div className="text-lg text-primary font-medium">
                   {t('about_status_subtitle')}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                   <ShieldCheck size={16} className="text-primary" />
                   {t('about_focus')}
                </div>
             </div>
          </div>

          {/* BLOCK C: TECH STACK (Left part of bottom row) */}
          <div className="md:col-span-3 p-8 rounded-3xl bg-white/70 dark:bg-cardDark/70 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-lg relative">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Col 1: Frontend */}
                <div className="space-y-4">
                   <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider opacity-70 mb-2">{t('tech_col_1')}</h4>
                   <div className="flex flex-col gap-3">
                      {TECH_STACK.frontend.map((tech) => (
                        <TechCard key={tech.name} name={tech.name} tooltipKey={tech.tooltipKey} iconName={tech.icon} lang={lang} />
                      ))}
                   </div>
                </div>

                {/* Col 2: Backend */}
                <div className="space-y-4">
                   <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider opacity-70 mb-2">{t('tech_col_2')}</h4>
                   <div className="flex flex-col gap-3">
                      {TECH_STACK.backend.map((tech) => (
                        <TechCard key={tech.name} name={tech.name} tooltipKey={tech.tooltipKey} iconName={tech.icon} lang={lang} />
                      ))}
                   </div>
                </div>

                {/* Col 3: Quality */}
                <div className="space-y-4">
                   <h4 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wider opacity-70 mb-2">{t('tech_col_3')}</h4>
                   <div className="flex flex-col gap-3">
                      {TECH_STACK.quality.map((tech) => (
                        <TechCard key={tech.name} name={tech.name} tooltipKey={tech.tooltipKey} iconName={tech.icon} lang={lang} />
                      ))}
                   </div>
                </div>
             </div>
          </div>

           {/* BLOCK D: TOOLKIT & TERMINAL BUTTON (Right part of bottom row) */}
           <div className="md:col-span-2 flex flex-col gap-6 relative">
              
              {/* My Toolkit Block */}
              <div className="flex-1 p-8 rounded-3xl bg-white/70 dark:bg-cardDark/70 backdrop-blur-xl border border-white/20 dark:border-gray-700 shadow-lg relative overflow-hidden group">
                 <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                    <PenTool size={20} className="text-primary" />
                    {t('toolkit_title')}
                 </h4>
                 <div className="grid grid-cols-2 gap-4">
                    {TECH_STACK.toolkit.map((tool) => {
                       const ToolIcon = IconMap[tool.icon] || Code2;
                       return (
                          <div key={tool.name} className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700 hover:border-primary/50 hover:bg-white dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1">
                             <ToolIcon size={24} className="text-gray-600 dark:text-gray-300 mb-2" />
                             <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">{tool.name}</span>
                          </div>
                       )
                    })}
                 </div>
              </div>

             {/* The Cyber-Pulse Terminal Button */}
             <div className="absolute -bottom-6 -right-6 md:-bottom-8 md:-right-8 z-20">
                <button 
                  onClick={() => setIsTerminalOpen(true)}
                  className="relative group w-20 h-20 md:w-24 md:h-24 flex items-center justify-center"
                >
                   {/* Pulsing Background */}
                   <div className="absolute inset-0 bg-gradient-to-br from-primary to-rose-600 rounded-full blur opacity-40 group-hover:opacity-60 animate-pulse transition-opacity duration-500"></div>
                   
                   {/* Main Button Circle */}
                   <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-gray-900 to-black rounded-full flex items-center justify-center border border-gray-700 shadow-2xl group-hover:scale-110 transition-transform duration-300 z-10">
                      <Terminal size={24} className="text-primary group-hover:text-white transition-colors" />
                   </div>

                   {/* Rotating Text Ring (Pure CSS SVG) */}
                   <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-[spin_8s_linear_infinite] pointer-events-none">
                      <svg viewBox="0 0 100 100" width="100%" height="100%">
                         <defs>
                            <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                         </defs>
                         <text fontSize="10.5" fill="currentColor" className="text-primary font-mono font-bold tracking-widest">
                            <textPath xlinkHref="#circle">
                               INITIALIZE SYSTEM . ACCESS GRANTED .
                            </textPath>
                         </text>
                      </svg>
                   </div>
                </button>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;