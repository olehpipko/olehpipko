import './Banner.scss';

const Banner = () => {
    return (
        <section id="home" className="banner">
            <div className="banner__container">
                <picture className="banner__photo photo">
                    <source
                        media="(max-width: 768px)"
                        srcSet="/img/photo-1080x1920.jpg"
                    />
                    <source
                        media="(min-width: 769px)"
                        srcSet="/img/photo-540x540.jpg"
                    />
                    <img
                        src="/img/photo.jpg"
                        alt="Oleh Pipko"
                        className="photo__img"
                    />
                </picture>
                <h1 className="banner__title">
                    Hi, I'm{' '}
                    <strong className="banner__fullname">Oleh Pipko</strong> a
                    Full Stack Wordpress Developer in Kyiv
                </h1>
            </div>
        </section>
    );
};

export default Banner;
