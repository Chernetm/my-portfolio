
import { Github, MousePointer2, ArrowDown, Send } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import profileImg from '../public/profile.png';

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                        <a href="https://github.com/Chernetm" target="_blank" className="home__social-icon">
                            <Github />
                        </a>
                        <a href="https://t.me/cherexc" target="_blank" className="home__social-icon">
                            <Send />
                        </a>
                    </div>

                    <div className="home__img" style={{ backgroundImage: `url(${profileImg})` }}></div>

                    <div className="home__data">
                        <h1 className="home__title">Chernet M.</h1>
                        <h3 className="home__subtitle">
                            <TypeAnimation
                                sequence={[
                                    'Full Stack Developer',
                                    2000,
                                    'Frontend Developer',
                                    2000,
                                    'Backend Developer',
                                    2000,
                                    'Mobile App Developer',
                                    2000
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </h3>
                        <p className="home__description">
                            I have extensive experience developing robust backend systems with **Golang**, **Node.js**, **PostgreSQL**, and **MongoDB**. On the frontend, I create stunning user interfaces using **React**, **Next.js**, **Tailwind CSS**, and mobile applications with **Flutter**.
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
