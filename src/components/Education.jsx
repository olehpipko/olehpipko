import './Education.scss';

import TimeLineList from './TimeLineList';

const data = [
    {
        id: 0,
        dates: 'Sep 2019 - Jun 2022',
        company:
            'Rocket and Space Engineering College of Oles Honchar Dnipro National University',
        position: 'Junior Specialist, Software Engineering',
    },
    {
        id: 1,
        dates: 'Sep 2022 - Jun 2024',
        company: 'Ivan Franko National University of Lviv',
        position: 'Uncompleted Bachelor, Computer Science',
    },
];

const Education = () => {
    return (
        <section id="education" className="education">
            <div className="education__container">
                <h2 className="education__title">Education</h2>
                <TimeLineList
                    data={data.sort((a, b) => b.id - a.id)}
                    className="education__timeline"
                    theme="dark"
                />
            </div>
        </section>
    );
};

export default Education;
