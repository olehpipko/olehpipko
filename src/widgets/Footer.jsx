import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <section id="contact" className="footer__contact contact">
                <h2 className="contact__title">Contact</h2>
                <ul className="contact__list">
                    <li className="contact__item">
                        <h3 className="contact__name">Mail</h3>
                        <p className="contact__value">
                            <a
                                href="mailto:oleh.pipko@gmail.com"
                                className="contact__link"
                            >
                                oleh.pipko@gmail.com
                            </a>
                        </p>
                    </li>
                    <li className="contact__item">
                        <h3 className="contact__name">Phone</h3>
                        <p className="contact__value">
                            <a
                                href="tel:+380505930403"
                                className="contact__link"
                            >
                                +38 (050) 593-04-03
                            </a>
                        </p>
                    </li>
                    <li className="contact__item">
                        <h3 className="contact__name">Linkedin</h3>
                        <p className="contact__value">
                            <a
                                href="https://www.linkedin.com/in/olehpipko/"
                                className="contact__link"
                                target="_blank"
                            >
                                @olehpipko
                            </a>
                        </p>
                    </li>
                    <li className="contact__item">
                        <h3 className="contact__name">Telegram</h3>
                        <p className="contact__value">
                            <a
                                href="https://t.me/olehpipko"
                                className="contact__link"
                                target="_blank"
                            >
                                @olehpipko
                            </a>
                        </p>
                    </li>
                </ul>
            </section>
            <section className="footer__copyright copyright">
                <p className="copyright__value">2025 © olehpipko </p>
            </section>
        </footer>
    );
};

export default Footer;
