import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden selection:bg-indigo-200 selection:text-indigo-900">
            <Navbar />
            <Hero />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
