'use client';
import clsx from 'clsx';
import styles from './AboutMe.module.scss';
import { useInView } from '@/hooks/useInView';

const AboutMe = ({ id, title, content, cv }) => {
    const [ref, isVisible] = useInView();

    return (
        <section
            id={id}
            className={clsx(
                styles['about-me'],
                isVisible ? styles['about-me--is-visible'] : ''
            )}
            ref={ref}
        >
            <div className={clsx(styles['container'])}>
                <h2 className={clsx(styles['title'])}>{title}</h2>
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <p>
                    <a href={cv.href} className={styles['button']}>
                        {cv.value}
                    </a>
                </p>
            </div>
        </section>
    );
};

export default AboutMe;
