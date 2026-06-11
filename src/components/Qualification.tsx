import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualification = () => {
    return (
        <section className="qualification section py-20" id="qualification">
            <h2 className="section__title text-3xl font-bold text-center mb-2">Qualification</h2>
            <span className="section__subtitle block text-center text-slate-500 mb-16">My personal journey</span>

            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Education Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <GraduationCap className="text-indigo-600 w-7 h-7" />
                        <h3 className="text-2xl font-bold text-slate-900">Education</h3>
                    </div>
                    
                    <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
                        {/* Education Item 1 */}
                        <div className="relative group">
                            {/* Glowing timeline dot */}
                            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm"></div>
                            
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                Electrical and Computer Engineering
                            </h4>
                            <span className="block text-slate-600 font-medium mt-1">
                                Addis Ababa University
                            </span>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                                <Calendar size={14} />
                                <span>2022 - 2026</span>
                            </div>
                        </div>

                        {/* Education Item 2 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm"></div>
                            
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                5G Technology for Business and Entrepreneur
                            </h4>
                            <span className="block text-slate-600 font-medium mt-1">
                                Aalto University, Finland
                            </span>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                                <Calendar size={14} />
                                <span>2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Experience Column */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <Briefcase className="text-indigo-600 w-7 h-7" />
                        <h3 className="text-2xl font-bold text-slate-900">Work Experience</h3>
                    </div>

                    <div className="relative border-l-2 border-slate-200 pl-8 space-y-10">
                        {/* Experience Item 1 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm"></div>
                            
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                Full Stack Developer (Customer Support)
                            </h4>
                            <span className="block text-slate-600 font-medium mt-1">
                                Birhanena Selam Printing Enterprise
                            </span>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                                <Calendar size={14} />
                                <span>2025 - 2026</span>
                            </div>
                        </div>

                        {/* Experience Item 2 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm"></div>
                            
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                Full Stack Developer
                            </h4>
                            <span className="block text-slate-600 font-medium mt-1">
                                Freelance
                            </span>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                                <Calendar size={14} />
                                <span>2022 - Present</span>
                            </div>
                        </div>

                        {/* Experience Item 3 */}
                        <div className="relative group">
                            <div className="absolute -left-[38px] top-1.5 w-4 h-4 rounded-full border-4 border-indigo-600 bg-white group-hover:bg-indigo-600 transition-colors duration-300 shadow-sm"></div>
                            
                            <h4 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                                Backend Developer
                            </h4>
                            <span className="block text-slate-600 font-medium mt-1">
                                Tech Company
                            </span>
                            <div className="flex items-center gap-2 text-sm text-slate-400 mt-2">
                                <Calendar size={14} />
                                <span>2021 - 2022</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Qualification;
