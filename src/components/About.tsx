import { Download } from 'lucide-react';
import profileImg from '../public/image.png';

const About = () => {
    return (
        <section className="about section" id="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">My introduction</span>

            <div className="about__container container grid">
                <img src={profileImg} alt="" className="about__img" />

                <div className="about__data">
                    <p className="about__description">
                        Full Stack Developer with a strong background in Golang and React. I specialize in building scalable customer support systems and high-performance e-commerce platforms. My passion lies in creating seamless user experiences backed by robust architecture.
                    </p>

                    <div className="about__info">
                        <div>
                            <span className="about__info-title">03+</span>
                            <span className="about__info-name">Years <br /> experience</span>
                        </div>

                        <div>
                            <span className="about__info-title">10+</span>
                            <span className="about__info-name">Completed <br /> projects</span>
                        </div>

                        <div>
                            <span className="about__info-title">02+</span>
                            <span className="about__info-name">Companies <br /> worked</span>
                        </div>
                    </div>

                    <div className="about__buttons">
                        <a download="" href="/cv.png" className="button button--flex">
                            Download CV <Download className="button__icon" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
