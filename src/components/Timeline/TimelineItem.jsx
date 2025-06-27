'use client';
import clsx from 'clsx';
import styles from './TimelineItem.module.scss';
import { dateToJSX } from '@/utils/date';

const TimelineItem = ({
    start,
    end,
    title,
    affiliation,
    details,
    theme,
    isVisible,
}) => {
    return (
        <li
            className={clsx(
                styles.item,
                styles[`item--${theme}`],
                isVisible ? styles['item--visible'] : ''
            )}
        >
            <p className={clsx(styles.dates)}>
                {dateToJSX(start)} - {dateToJSX(end)}
            </p>
            <h3 className={clsx(styles.affiliation)}>
                {`${affiliation} `}
                {details && (
                    <span className={clsx(styles.details)}>
                        {`- ${details}`}
                    </span>
                )}
            </h3>
            <p className={clsx(styles.title)}>
                <strong className={clsx(styles.title)}>{title}</strong>
            </p>
        </li>
    );
};

export default TimelineItem;
