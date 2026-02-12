import { Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact Me</h2>
            <span className="section__subtitle">Get in touch</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <Mail className="contact__card-icon" />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">user@email.com</span>
                            <a href="mailto:user@email.com" className="contact__button">
                                Write me <ArrowRight className="contact__button-icon" />
                            </a>
                        </div>

                        <div className="contact__card">
                            <Phone className="contact__card-icon" />
                            <h3 className="contact__card-title">Whatsapp</h3>
                            <span className="contact__card-data">999-888-777</span>
                            <a href="#" className="contact__button">
                                Write me <ArrowRight className="contact__button-icon" />
                            </a>
                        </div>

                        <div className="contact__card">
                            <MapPin className="contact__card-icon" />
                            <h3 className="contact__card-title">Location</h3>
                            <span className="contact__card-data">Addis Ababa, Ethiopia</span>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">Write me your project</h3>

                    <form className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="name" className="contact__form-input" placeholder="Insert your name" />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Mail</label>
                            <input type="email" name="email" className="contact__form-input" placeholder="Insert your email" />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project" cols={30} rows={10} className="contact__form-input" placeholder="Write your project"></textarea>
                        </div>

                        <button className="button button--flex">
                            Send Message <ArrowRight className="button__icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
