import clsx from 'clsx';
import styles from './Hero.module.scss';

const Hero = ({ id, photo, fullname, position }) => {
    return (
        <section id={id} className={clsx(styles.hero)}>
            {
                <div className={clsx(styles.container)}>
                    <picture className={clsx(styles.picture)}>
                        <img
                            src={photo ? photo : '/img/photo-540x540.jpg'}
                            alt={fullname}
                            className={clsx(styles.photo)}
                        />
                    </picture>
                    <h1 className={clsx(styles.title)}>
                        Hi, I'm{' '}
                        <strong className={clsx(styles.fullname)}>
                            {fullname}
                        </strong>{' '}
                        {position}
                    </h1>
                </div>
            }
        </section>
    );
};

export default Hero;
