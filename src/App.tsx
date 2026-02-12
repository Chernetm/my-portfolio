import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Work />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
