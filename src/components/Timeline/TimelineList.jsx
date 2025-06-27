'use client';
import clsx from 'clsx';
import styles from './TimelineList.module.scss';
import { getPresentDate } from '@/utils/date';
import TimelineItem from './TimelineItem';

const TimelineList = ({ items, theme = 'light-theme', isVisible }) => {
    const sortedItems = items.sort((a, b) => {
        const aStartDate = new Date(a.dates[0] || getPresentDate());
        const bStartDate = new Date(b.dates[0] || getPresentDate());

        return bStartDate - aStartDate;
    });

    return items.length ? (
        <ul
            className={clsx(
                styles['timeline-list'],
                styles[`timeline--${theme}`]
            )}
        >
            {sortedItems.map((item, index) => {
                const [start, end] = item.dates.map((date) => new Date(date));

                return (
                    <TimelineItem
                        key={index}
                        index={index}
                        start={start || getPresentDate()}
                        end={end || getPresentDate()}
                        theme={theme}
                        isVisible={isVisible}
                        {...item}
                    />
                );
            })}
        </ul>
    ) : (
        <strong>Empty timeline list</strong>
    );
};

export default TimelineList;
