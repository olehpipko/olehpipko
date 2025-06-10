import './Experience.scss';

import TimeLineList from './TimeLineList';

const data = [
    {
        id: 0,
        dates: 'Jun 2018 - Aug 2019',
        company: 'Digitouch',
        details: 'Remote, Full-time',
        position: 'Full Stack Wordpress Developer',
    },
    {
        id: 1,
        dates: 'Sep 2019 - Oct 2019',
        company: 'Веб студія Анріл',
        details: 'On-site, Part-time',
        position: 'Full Stack Wordpress Developer',
    },
    {
        id: 2,
        dates: 'Nov 2020 - May 2023',
        company: 'АгроЗахист',
        details: 'Remote, Part-time',
        position: 'Full Stack Wordpress Developer',
    },
    {
        id: 3,
        dates: 'Jun 2024 - Present',
        company: 'Serge Lifar Kyiv Municipal Academy of Dance',
        details: 'On-site, Full-time',
        position: 'Web-resources administrator',
    },
];

const Experience = () => {
    return (
        <section id="experience" className="experience">
            <div className="experience__container">
                <h2 className="experience__title">Experience</h2>
                <TimeLineList
                    data={data.sort((a, b) => b.id - a.id)}
                    className="experience__timeline"
                    theme="light"
                />
            </div>
        </section>
    );
};

export default Experience;
