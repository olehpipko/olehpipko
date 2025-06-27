'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

import API from '@/api/api';

import styles from './page.module.scss';
import { useResizeActive } from '@/hooks/useResizeActive';

import Loader from '@/components/ui/Loader';
import Hero from '@/components/Hero';
import AboutMe from '@/components/AboutMe';
import Timeline from '@/components/Timeline';

export default function Home() {
    const [data, setData] = useState(false);
    const [siteInfo, setSiteInfo] = useState(false);
    useEffect(() => {
        API.page('home').then((res) => setData(res.data));
        API.siteinfo().then((res) => setSiteInfo(res.data));
    }, []);

    const isResizing = useResizeActive();

    return (
        <main
            className={clsx(
                styles.page,
                isResizing ? styles['page--is-resizing'] : ''
            )}
        >
            {data ? (
                data.sections.map((section) => {
                    switch (section.type) {
                        case 'Hero':
                            return (
                                <Hero
                                    key={section.id}
                                    photo={siteInfo.photo}
                                    fullname={siteInfo.fullname}
                                    position={siteInfo.position}
                                />
                            );
                        case 'AboutMe':
                            return (
                                <AboutMe
                                    key={section.id}
                                    id={section.id}
                                    title={section.title}
                                    content={section.content}
                                    cv={section.cv}
                                />
                            );
                        case 'Timeline':
                            return (
                                <Timeline
                                    key={section.id}
                                    id={section.id}
                                    theme={section.theme}
                                    title={section.title}
                                    items={section.items}
                                />
                            );
                    }
                })
            ) : (
                <Loader type="fixed" />
            )}
        </main>
    );
}
