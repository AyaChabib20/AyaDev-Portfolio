
import React from 'react';
import { Language } from '../types';
import { TEXTS, EDUCATION_DATA } from '../constants';
import { GraduationCap, School, Calendar, MapPin } from 'lucide-react';

interface EducationProps {
  lang: Language;
}

const Education: React.FC<EducationProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-darkBg transition-colors duration-300 relative overflow-hidden">
 
       <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
         <div className="text-center mb-20 animate-fade-up">
           <span className="inline-block py-1 px-4 rounded-full bg-green-400/10 text-green-500 border border-green-500/20 text-xs font-bold tracking-widest mb-4">
            {t('edu_badge')}
           </span>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight mb-4">
            {t('edu_title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
             {t('edu_subtitle')}
          </p>
        </div>

         <div className="relative max-w-4xl mx-auto">
 
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/80 to-transparent md:-translate-x-1/2 h-full z-0"></div>

           <div className="space-y-12">
              {EDUCATION_DATA.map((item, index) => {
                 const isEven = index % 2 === 0;
                 return (
                    <div key={item.id} className={`flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''} gap-8 relative group`}>
                       
                        <div className="flex-1 w-full pl-12 md:pl-0">
                          <div className={`p-6 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1
                             bg-white dark:bg-cardDark/60 backdrop-blur-sm border-gray-200 dark:border-gray-700 hover:border-primary/30 dark:hover:border-primary/30
                             ${isEven ? 'md:text-right' : 'md:text-left'}
                          `}>
                             <div className={`flex items-center gap-2 mb-2 text-primary font-bold font-mono text-sm ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                <Calendar size={14} />
                                {item.year}
                             </div>
                             <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                                {t(item.titleKey)}
                             </h3>
                             <div className={`flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                                <MapPin size={14} className="flex-shrink-0" />
                                {t(item.institutionKey)}
                             </div>
                          </div>
                       </div>

                        <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
                          <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-darkBg border-2 border-primary flex items-center justify-center shadow-[0_0_15px_rgba(255,71,87,0.4)] group-hover:scale-110 transition-transform duration-300">
                             {item.iconType === 'school' ? (
                                <GraduationCap size={18} className="text-primary" />
                             ) : (
                                <School size={18} className="text-primary" />
                             )}
                          </div>
                       </div>

                        <div className="flex-1 hidden md:block"></div>

                    </div>
                 );
              })}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
