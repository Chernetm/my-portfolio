import { useState } from "react";
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <GraduationCap className="qualification__icon" />
                        Education
                    </div>

                    <div
                        className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <Briefcase className="qualification__icon" />
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Education Content */}
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Computer Science</h3>
                                <span className="qualification__subtitle">University - Institute</span>
                                <div className="qualification__calendar">
                                    <Calendar /> 2019 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Web Development</h3>
                                <span className="qualification__subtitle">Bootcamp / Online</span>
                                <div className="qualification__calendar">
                                    <Calendar /> 2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Content */}
                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Full Stack Developer</h3>
                                <span className="qualification__subtitle">Freelance</span>
                                <div className="qualification__calendar">
                                    <Calendar /> 2022 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__round"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Backend Developer</h3>
                                <span className="qualification__subtitle">Tech Company</span>
                                <div className="qualification__calendar">
                                    <Calendar /> 2021 - 2022
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification;
