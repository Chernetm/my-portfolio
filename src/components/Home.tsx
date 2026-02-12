import { Github, Linkedin, MousePointer2, ArrowDown, Send } from 'lucide-react';
import profileImg from '../public/image.png';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://www.linkedin.com/" target="_blank" className="home__social-icon">
                            <Linkedin />
                        </a>
                        <a href="https://github.com/Chernetm" target="_blank" className="home__social-icon">
                            <Github />
                        </a>
                        <a href="https://t.me/" target="_blank" className="home__social-icon">
                            <Send />
                        </a>
                    </div>

                    <div className="home__img" style={{ backgroundImage: `url(${profileImg})` }}></div>

                    <div className="home__data">
                        <h1 className="home__title">Chernet M.</h1>
                        <h3 className="home__subtitle">Full Stack Developer</h3>
                        <p className="home__description">
                            I have extensive experience developing online customer support systems and e-commerce platforms using **Golang** for the backend and **React** with **Tailwind CSS** for the frontend.
                        </p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <Send className="button__icon" />
                        </a>
                    </div>
                </div>

                <div className="home__scroll">
                    <a href="#about" className="home__scroll-button button--flex">
                        <MousePointer2 className="home__scroll-mouse" />
                        <span className="home__scroll-name">Scroll Down</span>
                        <ArrowDown className="home__scroll-arrow" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
