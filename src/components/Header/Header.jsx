import clsx from 'clsx';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header id="header" className={clsx(styles.header)}>
            <section className={clsx(styles.bar)}>
                <div className={clsx(styles.logo)}>
                    <a href="/" className={clsx(styles.logo__link)}>
                        <img
                            src="/img/logo.svg"
                            alt="Logo"
                            className={clsx(styles.logo__picture)}
                        />
                    </a>
                </div>
                <nav className={clsx(styles.menu)}>
                    <ul className={clsx(styles.menu__list)}>
                        <li className={clsx(styles.menu__item)}>
                            <a
                                href="#about-me"
                                className={clsx(styles.menu__link)}
                            >
                                About me
                            </a>
                        </li>
                        <li className={clsx(styles.menu__item)}>
                            <a
                                href="#experience"
                                className={clsx(styles.menu__link)}
                            >
                                Experience
                            </a>
                        </li>
                        <li className={clsx(styles.menu__item)}>
                            <a
                                href="#education"
                                className={clsx(styles.menu__link)}
                            >
                                Education
                            </a>
                        </li>
                        <li className={clsx(styles.menu__item)}>
                            <a
                                href="#contact"
                                className={clsx(styles.menu__link)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
                <ul className={clsx(styles.contact)}>
                    <li className={clsx(styles.contact__item)}>
                        <a
                            href="tel:+380505930403"
                            className={clsx(styles.contact__link)}
                        >
                            +38 (050) 593-04-03
                        </a>
                    </li>
                    <li className={clsx(styles.contact__item)}>
                        <a
                            href="mailto:oleh.pipko@gmail.com"
                            className={clsx(styles.contact__link)}
                        >
                            oleh.pipko@gmail.com
                        </a>
                    </li>
                </ul>
            </section>
        </header>
    );
};

export default Header;
