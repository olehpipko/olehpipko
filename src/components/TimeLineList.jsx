import './TimeLineList.scss';

const TimeLineList = ({ data, className, theme = 'dark' }) => {
    return (
        <ol className={`${className} timeline timeline--${theme}`}>
            {data.map(({ id, dates, company, details, position }) => (
                <li
                    className={`timeline__item timeline__item--${theme}`}
                    key={id}
                >
                    <p className={`timeline__dates`}>{dates}</p>
                    <h3 className={`timeline__company`}>
                        {company}{' '}
                        {details && (
                            <span className={`timeline__details`}>
                                - {details}
                            </span>
                        )}
                    </h3>
                    <h4 className={`timeline__position`}>{position}</h4>
                </li>
            ))}
        </ol>
    );
};

export default TimeLineList;
