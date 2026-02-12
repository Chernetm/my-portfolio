import { motion } from 'framer-motion';
import { Github, ExternalLink, Server } from 'lucide-react';

interface Project {
    title: string;
    description: string;
    tech: string[];
    github: string;
    live: string;
    category: 'Full Stack' | 'Frontend' | 'Backend' | 'System';
}

const projects: Project[] = [
    {
        title: 'Secure School Management Portal',
        description: 'Real-time exam management with authentication, payment gateway (Chapa), and student dashboard.',
        tech: ['Next.js', 'PostgreSQL', 'Chapa', 'Tailwind'],
        github: 'https://github.com/Chernetm/school_mg',
        live: 'https://southwestacademy.vercel.app/',
        category: 'Full Stack',
    },
    {
        title: 'Church Management',
        description: 'Comprehensive platform with member management, service tracking, and donation handling.',
        tech: ['React', 'MySQL', 'Node.js'],
        github: 'https://github.com/Chernetm/kalehiwotchurch',
        live: 'https://kalehiwotchurch.vercel.app/',
        category: 'System',
    },
    {
        title: 'Ministry Result Portal',
        description: 'Grade 6 ministry results display with QR code verification and robust backend.',
        tech: ['React', 'Node.js', 'MongoDB'],
        github: 'https://github.com/Chernetm/portal',
        live: 'https://portal-pi-sooty.vercel.app/',
        category: 'Full Stack',
    },
    {
        title: 'Online Exam System',
        description: 'AI-powered cheating monitoring using webcam, supports multiple question types.',
        tech: ['Next.js', 'TensorFlow', 'Socket.io'],
        github: 'https://github.com/Chernetm/online-exam',
        live: 'https://stepupacademy.vercel.app/',
        category: 'System',
    },
    {
        title: 'Smart Parking System',
        description: 'Intelligent parking management with real-time updates and reservation system.',
        tech: ['Java', 'JavaFX', 'MySQL'],
        github: 'https://github.com/BirukTesfaye0940/Smart-Parking-System',
        live: '#',
        category: 'System',
    },
    {
        title: 'EduTrack System',
        description: 'Student management supporting course registration and grade tracking.',
        tech: ['Java', 'JavaFX', 'SQLite'],
        github: 'https://github.com/Chernetm/EduTrack',
        live: '#',
        category: 'System',
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Projects = () => {
    return (
        <section id="projects" className="py-32 px-4 bg-slate-50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase mb-4 block">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 mb-6">Selected Projects</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A showcase of technical proficiency and creative problem-solving.
                    </p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            whileHover={{ y: -8 }}
                            className="group relative bg-white rounded-3xl border border-slate-100/80 shadow-2xl shadow-slate-200/50 overflow-hidden hover:shadow-indigo-500/20 transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-slate-50 rounded-2xl text-slate-900 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors duration-300">
                                        <Server size={24} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex gap-3">
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="View Source">
                                            <Github size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all" title="View Live">
                                            <ExternalLink size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="mb-2">
                                    <span className="text-xs font-semibold tracking-wider text-indigo-500 uppercase">{project.category}</span>
                                </div>

                                <h3 className="text-2xl font-bold font-heading text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-slate-600 mb-8 flex-1 leading-relaxed text-sm">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-medium rounded-full border border-slate-200/60">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
