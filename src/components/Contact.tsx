import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 px-4 bg-white relative overflow-hidden">
            {/* Decorative Blobs */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-50/50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-[2rem] p-8 md:p-16 text-center shadow-2xl shadow-indigo-500/20 overflow-hidden relative"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold font-heading text-white mb-6">Interested in working together?</h2>
                        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
                            I'm always open to discussing product design work or partnership opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
                            <a href="mailto:example@gmail.com" className="flex items-center gap-3 text-white hover:text-indigo-400 transition-colors">
                                <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
                                    <Mail size={24} />
                                </div>
                                <span className="font-medium">Get in touch</span>
                            </a>
                        </div>

                        <a
                            href="mailto:example@gmail.com"
                            className="inline-block px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all hover:scale-105 shadow-lg"
                        >
                            Say Hello
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
