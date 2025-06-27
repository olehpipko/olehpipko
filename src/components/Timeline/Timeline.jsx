'use client';
import clsx from 'clsx';
import styles from './Timeline.module.scss';
import { useInView } from '@/hooks/useInView';
import TimelineList from './TimelineList';

const Timeline = ({ id, theme, title, items }) => {
    const [ref, isVisible] = useInView();

    return (
        <section
            id={id}
            className={clsx(
                styles.timeline,
                isVisible ? styles['timeline--is-visible'] : '',
                theme ? styles[`timeline--${theme}`] : ''
            )}
            ref={ref}
        >
            <div className={clsx(styles.container)}>
                <h2 className={clsx(styles.title)}>{title}</h2>
                <TimelineList
                    items={items}
                    theme={theme}
                    isVisible={isVisible}
                />
            </div>
        </section>
    );
};

export default Timeline;
