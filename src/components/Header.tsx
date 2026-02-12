import { useState } from "react";
import { Home, User, FileText, Briefcase, Image, MessageSquare, X, Grid, Moon, Sun } from 'lucide-react';

const Header = () => {
    const [Toggle, showMenu] = useState(false);
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.body.classList.add("dark-theme");
        } else {
            setTheme("light");
            document.body.classList.remove("dark-theme");
        }
    };

    return (
        <header className="header" id="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">&lt;Chernet M./&gt;</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" className="nav__link active-link">
                                <Home className="nav__icon" /> Home
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#portfolio" className="nav__link">
                                <Image className="nav__icon" /> Portfolio
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#skills" className="nav__link">
                                <FileText className="nav__icon" /> Skills
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#qualification" className="nav__link">
                                <Briefcase className="nav__icon" /> Experience
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#about" className="nav__link">
                                <User className="nav__icon" /> About
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#contact" className="nav__link nav__link-contact">
                                <MessageSquare className="nav__icon" /> Contact Me
                            </a>
                        </li>
                    </ul>

                    <X className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>

                <div className="nav__btns">
                    {theme === "light" ? (
                        <Moon className="change-theme" id="theme-button" onClick={toggleTheme} />
                    ) : (
                        <Sun className="change-theme" id="theme-button" onClick={toggleTheme} />
                    )}

                    <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                        <Grid />
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
