import React, { useState } from 'react';
import { Language } from '../types';
import { TEXTS, SERVICES_DATA } from '../constants';
import * as Icons from 'lucide-react';
import { Code, Layout, ShieldCheck, PenTool, Layers, Zap, CheckCircle2, AlertCircle, LineChart, ArrowRight } from 'lucide-react';

interface ServicesProps {
  lang: Language;
}

const DashboardPreview = () => (
  <div className="w-full h-full bg-white dark:bg-[#0f172a] rounded-lg p-4 border border-gray-200 dark:border-gray-800 shadow-2xl relative overflow-hidden flex flex-col">
     <div className="absolute left-0 top-0 bottom-0 w-16 bg-gray-50 dark:bg-[#1e293b] border-r border-gray-200 dark:border-gray-700 flex flex-col items-center py-4 gap-4 z-10">
        <div className="w-8 h-8 rounded-lg bg-primary mb-4"></div>
        <div className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-600"></div>
        <div className="w-6 h-6 rounded bg-gray-200 dark:bg-gray-600"></div>
        <div className="w-6 h-6 rounded bg-primary/20"></div>
     </div>

     <div className="ml-16 flex-1 p-4 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2">
           <div>
              <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-1"></div>
              <div className="h-3 w-20 bg-gray-100 dark:bg-gray-800 rounded"></div>
           </div>
           <div className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
           <div className="p-3 rounded-lg bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-900/30">
              <div className="text-xs text-rose-600 dark:text-rose-400 font-bold mb-1">Total Sales</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">$12,450</div>
              <div className="text-[10px] text-green-500 flex items-center gap-1">
                 <LineChart size={10} /> +15%
              </div>
           </div>
           <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-900/30">
              <div className="text-xs text-blue-600 dark:text-blue-400 font-bold mb-1">Orders</div>
              <div className="text-xl font-bold text-gray-900 dark:text-white">342</div>
              <div className="text-[10px] text-green-500 flex items-center gap-1">
                 <LineChart size={10} /> +5%
              </div>
           </div>
        </div>

         <div className="flex-1 rounded-lg bg-gray-50 dark:bg-[#1e293b] border border-gray-100 dark:border-gray-700 p-3 relative flex items-end justify-between px-2 pb-0">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div key={i} className="w-[10%] bg-primary/80 rounded-t-sm hover:bg-primary transition-all duration-300" style={{ height: `${h}%` }}></div>
           ))}
        </div>
     </div>
  </div>
);

 const DesignPreview = () => (
  <div className="w-full h-full bg-[#f0f0f0] dark:bg-[#2c2c2c] rounded-lg p-4 border border-gray-300 dark:border-gray-700 relative overflow-hidden shadow-2xl flex items-center justify-center">
     
      <div className="w-48 bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg overflow-hidden relative group">
        
   
        <div className="absolute inset-0 z-20 bg-white dark:bg-[#1e1e1e] p-3 flex flex-col gap-2 animate-[fadeOut_3s_infinite_alternate]">
           <div className="w-full h-24 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
           <div className="w-2/3 h-3 bg-gray-200 dark:bg-gray-700 rounded"></div>
           <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded"></div>
           <div className="w-full h-2 bg-gray-100 dark:bg-gray-800 rounded"></div>
           <div className="mt-auto w-1/2 h-6 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
        </div>

         <div className="p-3 flex flex-col gap-2 h-full">
           <div className="w-full h-24 bg-gradient-to-br from-rose-400 to-primary rounded-lg shadow-inner"></div>
           <div className="text-sm font-bold text-gray-800 dark:text-white">Project Alpha</div>
           <div className="text-[10px] text-gray-500">Professional UI design with focus on user experience.</div>
           <div className="mt-auto px-3 py-1 bg-primary text-white text-xs font-bold rounded-full text-center shadow-lg shadow-primary/30">Get Started</div>
        </div>

     </div>

      <div className="absolute top-6 right-6 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg animate-bounce">
        <PenTool size={16} className="text-primary" />
     </div>
     
     <style>{`
        @keyframes fadeOut {
           0%, 40% { opacity: 1; }
           60%, 100% { opacity: 0; }
        }
     `}</style>
  </div>
);

 const QualityPreview = () => (
  <div className="w-full h-full bg-[#1e293b] rounded-lg p-6 border border-gray-700 flex flex-col relative shadow-2xl font-mono">
      
       <div className="flex items-center gap-3 mb-6 border-b border-gray-700 pb-4">
         <ShieldCheck className="text-green-400" size={24} />
         <div>
            <div className="text-white font-bold text-sm">SonarQube Analysis</div>
            <div className="text-[10px] text-gray-400">Project: Laravel Core API</div>
         </div>
         <div className="ml-auto px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">PASSED</div>
      </div>

       <div className="grid grid-cols-2 gap-4">
         
          <div className="bg-[#0f172a] p-3 rounded border border-gray-700">
            <div className="text-[10px] text-gray-400 mb-1">Reliability</div>
            <div className="flex items-center gap-2">
               <span className="text-2xl text-white font-bold">A</span>
               <CheckCircle2 size={16} className="text-green-500" />
            </div>
         </div>

          <div className="bg-[#0f172a] p-3 rounded border border-gray-700">
            <div className="text-[10px] text-gray-400 mb-1">Security</div>
            <div className="flex items-center gap-2">
               <span className="text-2xl text-white font-bold">A</span>
               <CheckCircle2 size={16} className="text-green-500" />
            </div>
         </div>

          <div className="bg-[#0f172a] p-3 rounded border border-gray-700">
            <div className="text-[10px] text-gray-400 mb-1">Maintainability</div>
            <div className="flex items-center gap-2">
               <span className="text-2xl text-white font-bold">A</span>
               <CheckCircle2 size={16} className="text-green-500" />
            </div>
         </div>

          <div className="bg-[#0f172a] p-3 rounded border border-gray-700">
            <div className="text-[10px] text-gray-400 mb-1">Coverage</div>
            <div className="flex items-center gap-2">
               <span className="text-xl text-white font-bold">98.5%</span>
               <div className="h-1.5 w-8 bg-gray-700 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[98%]"></div>
               </div>
            </div>
         </div>

      </div>

      <div className="mt-auto text-[10px] text-gray-500 pt-2">
         Last analysis: Just now
      </div>
  </div>
);


const Services: React.FC<ServicesProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];
  const [activeId, setActiveId] = useState<number>(1);

  const renderPreview = () => {
     switch(activeId) {
        case 1: return <DashboardPreview />;
        case 2: return <DesignPreview />;
        case 3: return <QualityPreview />;
        default: return <DashboardPreview />;
     }
  };

  return (
    <section id="services" className="py-24 bg-white dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
      
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
         <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
            {t('services_title')}
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primary to-rose-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
           <div className="flex flex-col gap-6">
            {SERVICES_DATA.map((service) => {
             
              const IconComponent = Icons[service.iconName];
              const isActive = activeId === service.id;

              return (
                <div 
                  key={service.id}
                  onMouseEnter={() => setActiveId(service.id)}
                  className={`group relative p-6 md:p-8 rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden
                     ${isActive 
                        ? 'bg-white dark:bg-white/5 border-primary/50 shadow-[0_0_30px_rgba(255,71,87,0.15)] scale-[1.02]' 
                        : 'bg-gray-50 dark:bg-cardDark/50 border-transparent hover:bg-white dark:hover:bg-cardDark hover:border-gray-200 dark:hover:border-gray-700'}
                  `}
                >
                   {isActive && <div className="absolute left-0 top-0 w-1 h-full bg-primary shadow-[0_0_15px_#ff4757]"></div>}

                  <div className="flex items-start gap-6">
                     <div className={`p-4 rounded-xl transition-all duration-300 ${isActive ? 'bg-primary text-white shadow-lg shadow-primary/30 rotate-6' : 'bg-white dark:bg-gray-800 text-gray-500 group-hover:text-primary'}`}>
                      {IconComponent && <IconComponent size={28} />}
                    </div>

                    <div className="flex-1">
                        <h3 className={`text-xl font-bold mb-2 transition-colors ${isActive ? 'text-primary' : 'text-gray-900 dark:text-white'}`}>
                          {t(service.titleKey)}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                          {t(service.descKey)}
                        </p>

                         <div className="flex flex-wrap gap-2 mt-4">
                           {service.tags && service.tags.map(tag => (
                              <span key={tag} className={`text-[10px] px-2 py-1 rounded border font-mono transition-colors font-semibold
                                 ${isActive 
                                    ? 'bg-primary/10 border-primary/20 text-primary' 
                                    : 'bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500'}
                              `}>
                                 {tag}
                              </span>
                           ))}
                        </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

           <div className="hidden lg:block relative sticky top-32 h-[500px]">
              <div className="absolute inset-0 rounded-2xl p-1 bg-gradient-to-br from-gray-200 to-gray-50 dark:from-gray-700 dark:to-gray-900 shadow-2xl">
                <div className="w-full h-full bg-gray-100 dark:bg-black/50 backdrop-blur-3xl rounded-xl p-6 flex items-center justify-center relative overflow-hidden">
                   
                    <div key={activeId} className="w-full h-full animate-[fadeUp_0.4s_ease-out]">
                      {renderPreview()}
                   </div>

                </div>
             </div>
             
              <div className="absolute -z-10 -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
             <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>

        </div>

         <div className="mt-16 text-center animate-[fadeUp_1s_ease-out]">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 font-medium">
               {t('services_cta')}
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
               {t('services_cta_btn')} <ArrowRight size={18} />
            </a>
        </div>

      </div>
    </section>
  );
};

export default Services;