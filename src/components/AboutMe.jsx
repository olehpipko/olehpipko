import './AboutMe.scss';

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me">
            <div className="about-me__container">
                <h2 className="about-me__title">About me</h2>
                <p className="about-me__paragraph">
                    I am a web developer with real commercial experience since
                    2018. I have been the developer on various web projects,
                    working both remotely and on-site. My responsibilities
                    included building websites from scratch, technical
                    maintenance, responsive layout, and optimization.
                </p>
                <p className="about-me__paragraph">
                    Currently, I work as a web resources administrator at the
                    Serge Lifar Kyiv Municipal Academy of Dance, where I manage
                    the support and development of the institution’s online
                    platforms.
                </p>
                <p className="about-me__paragraph">
                    I am proficient in HTML, CSS, JavaScript, and have
                    experience working with WordPress. I always strive for clean
                    code, user-friendly solutions, and technical reliability.
                </p>
                <p className="about-me__paragraph">
                    <a href="#" className="about-me__button button">
                        Download CV
                    </a>
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
