
import React, { useState } from 'react';
import { Language, Project } from '../types';
import { TEXTS, PROJECTS_DATA } from '../constants';
import { ExternalLink, ChevronRight, ChevronLeft, Maximize2, X, CheckCircle2, ShieldCheck, Database, Server, Layout } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

const Projects: React.FC<ProjectsProps> = ({ lang }) => {
  const t = (key: string) => TEXTS[key][lang];
  const [activeId, setActiveId] = useState<number>(1);
  const [activeImgIndex, setActiveImgIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const activeProject = PROJECTS_DATA.find(p => p.id === activeId) || PROJECTS_DATA[0];
  const currentScreenshot = activeProject.screenshots[activeImgIndex];

  const handleProjectHover = (id: number) => {
    if (id !== activeId) {
      setActiveId(id);
      setActiveImgIndex(0);
    }
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev + 1) % activeProject.screenshots.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveImgIndex((prev) => (prev - 1 + activeProject.screenshots.length) % activeProject.screenshots.length);
  };

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-black transition-colors duration-300 relative overflow-hidden">
      
      <div 
        className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 transition-colors duration-700 pointer-events-none"
        style={{ backgroundColor: activeProject.color }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl tracking-tight">
              {t('projects_title')}
            </h2>
            <div className="w-20 h-1.5 bg-primary mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          <div className="lg:col-span-4 flex flex-col gap-6">
             {PROJECTS_DATA.map((project, index) => {
                const isActive = activeId === project.id;
                return (
                   <div 
                      key={project.id}
                      onMouseEnter={() => handleProjectHover(project.id)}
                      className={`group cursor-pointer transition-all duration-300 border-l-4 pl-6 py-2
                         ${isActive ? 'border-l-primary' : 'border-l-gray-200 dark:border-l-gray-800 hover:border-l-primary/50'}
                      `}
                   >
                      <span className={`text-xs font-mono font-bold tracking-widest mb-1 block transition-colors ${isActive ? 'text-primary' : 'text-gray-400'}`}>
                         0{index + 1}.
                      </span>
                      <h3 className={`text-2xl font-bold transition-colors ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-600 group-hover:text-gray-600 dark:group-hover:text-gray-400'}`}>
                         {t(project.titleKey)}
                      </h3>
                      
                      <div className={`grid transition-all duration-500 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}>
                         <div className="overflow-hidden">
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
                               {t(project.descKey)}
                            </p>
                             <button 
                              onClick={() => setDetailsModalOpen(true)}
                              className="text-xs font-bold uppercase tracking-widest hover:text-primary flex items-center gap-1 text-gray-500"
                            >
                               {t('proj_btn_details')} <ExternalLink size={12} />
                            </button>
                         </div>
                      </div>
                   </div>
                )
             })}
          </div>

          <div className="lg:col-span-8 lg:sticky lg:top-32 perspective-1000">
             
             <div className="relative rounded-xl bg-white dark:bg-[#1e1e1e] shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 transform transition-transform duration-500 hover:scale-[1.01]">
                
                <div className="h-10 bg-gray-100 dark:bg-[#2d2d2d] border-b border-gray-200 dark:border-gray-700 flex items-center px-4 gap-2">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="flex-1 mx-4 h-6 bg-white dark:bg-[#1a1a1a] rounded flex items-center px-3 text-[10px] text-gray-400 font-mono shadow-inner">
                      https://ayadev.portfolio/{activeProject.tags[0].toLowerCase().replace(' ', '-')}
                   </div>
                </div>

                <div className="relative aspect-video group bg-black">
                   
                   <div 
                      className="absolute inset-0 bg-cover bg-center blur-xl opacity-50 scale-110"
                      style={{ backgroundImage: `url(${currentScreenshot.url})` }}
                   ></div>

                   <img 
                      src={currentScreenshot.url} 
                      alt="Screenshot" 
                      className="absolute inset-0 w-full h-full object-contain z-10 transition-opacity duration-300"
                   />

                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 pointer-events-none"></div>

                   <button 
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                   >
                      <ChevronLeft size={24} />
                   </button>
                   <button 
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/50 hover:bg-primary text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                   >
                      <ChevronRight size={24} />
                   </button>

                   <button 
                      onClick={() => setIsLightboxOpen(true)}
                      className="absolute top-4 right-4 z-30 p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                      title="Zoom"
                   >
                      <Maximize2 size={20} />
                   </button>

                   <div className="absolute bottom-6 left-6 z-30">
                      <div className="flex flex-col items-start gap-2">
                         <span className="bg-primary/90 text-white text-xs font-bold px-3 py-1 rounded shadow-lg animate-[fadeUp_0.3s_ease-out]">
                            {currentScreenshot.techBadge}
                         </span>
                         <h4 className="text-white font-bold text-lg drop-shadow-md">
                            {t(currentScreenshot.labelKey)}
                         </h4>
                      </div>
                   </div>

                   <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3">
                      <div className="flex gap-1.5 mr-4">
                         {activeProject.screenshots.map((_, idx) => (
                            <div 
                               key={idx} 
                               className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeImgIndex ? 'bg-primary w-4' : 'bg-white/50'}`}
                            ></div>
                         ))}
                      </div>

                      <div className="bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                         <ShieldCheck size={16} className="text-green-400" />
                         <div className="flex flex-col leading-none">
                            <span className="text-[10px] text-gray-300 font-mono uppercase">Reliability</span>
                            <span className="text-sm font-bold text-green-400">{activeProject.qualityGrade}</span>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
             
             <div className="mx-auto w-11/12 h-4 bg-gray-500/20 blur-xl rounded-full mt-4"></div>

          </div>

        </div>
      </div>

      {isLightboxOpen && (
         <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 animate-zoom-in" onClick={() => setIsLightboxOpen(false)}>
            <button className="absolute top-6 right-6 text-white/50 hover:text-white p-2">
               <X size={32} />
            </button>
            <img 
               src={currentScreenshot.url} 
               alt="Full view" 
               className="max-w-full max-h-screen object-contain rounded-md shadow-2xl"
               onClick={(e) => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 font-mono bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
               {t(currentScreenshot.labelKey)}
            </div>
         </div>
      )}

      {detailsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setDetailsModalOpen(false)}>
          <div 
            className="w-full max-w-3xl bg-white dark:bg-[#1a1b26] rounded-2xl shadow-2xl overflow-hidden relative animate-zoom-in"
            onClick={e => e.stopPropagation()}
          >
             <button 
               onClick={() => setDetailsModalOpen(false)}
               className="absolute top-4 right-4 p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-500 hover:text-primary transition-colors z-10"
             >
                <X size={20} />
             </button>

             <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-4">
                   {t(activeProject.titleKey)} <span className="text-primary"></span>
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="space-y-6">
                      <div>
                         <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2">
                            <Layout size={18} className="text-primary" /> {t('proj_modal_goal')}
                         </h4>
                         <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {t(activeProject.details.goalKey)}
                         </p>
                      </div>
                      <div>
                         <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-2">
                            <Server size={18} className="text-primary" /> {t('proj_modal_chal')}
                         </h4>
                         <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {t(activeProject.details.challengesKey)}
                         </p>
                      </div>
                   </div>

                   <div>
                      <h4 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white mb-4">
                         <Database size={18} className="text-primary" /> {t('proj_modal_stack')}
                      </h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                         {activeProject.details.fullStack.map((tech) => (
                            <span key={tech} className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-mono border border-gray-200 dark:border-gray-700">
                               {tech}
                            </span>
                         ))}
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/10 border border-green-200 dark:border-green-900/30 rounded-xl">
                         <div className="flex items-center gap-2 mb-2">
                            <CheckCircle2 size={18} className="text-green-600 dark:text-green-400" />
                            <span className="font-bold text-green-700 dark:text-green-400 text-sm">SonarQube Verified</span>
                         </div>
                         <div className="text-xs text-green-800 dark:text-green-300">
                            Code reliability grade: <strong>{activeProject.qualityGrade}</strong>. 
                            Security hotspots checked.
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
