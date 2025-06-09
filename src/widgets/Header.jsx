import './Header.scss';

import Logo from './Logo';

const Header = () => {
    return (
        <header className="header">
            <section className="header__bar">
                <Logo className="header__logo" />
                <nav className="header__menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#about-me" className="menu__link">
                                About me
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#experience" className="menu__link">
                                Experience
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#education" className="menu__link">
                                Education
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#contact" className="menu__link">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="header__contacts contacts">
                    <ul className="contacts__list">
                        <li className="contacts__item">
                            <a
                                href="tel:+380505930403"
                                className="contacts__link"
                            >
                                +38 (050) 593-04-03
                            </a>
                        </li>
                        <li className="contacts__item">
                            <a
                                href="mailto:oleh.pipko@gmail.com"
                                className="contacts__link"
                            >
                                oleh.pipko@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </header>
    );
};

export default Header;
