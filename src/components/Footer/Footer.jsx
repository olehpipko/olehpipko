'use client';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import styles from './Footer.module.scss';
import API from '@/api/api';

const Footer = () => {
    const [contacts, setContacts] = useState(false);
    const [copyright, setCopyright] = useState(false);

    useEffect(() => {
        API.siteinfo().then((res) => {
            const currentYear = new Date().getFullYear();
            const copyrightYear = res.data.copyright.year;

            setCopyright(
                `${
                    copyrightYear < currentYear
                        ? `${copyrightYear}-${currentYear}`
                        : copyrightYear
                } © ${res.data.copyright.value}`
            );
            setContacts(res.data.contacts);
        });
    }, []);

    return (
        contacts && (
            <footer id="contact" className={clsx(styles.footer)}>
                <div className={clsx(styles.container)}>
                    <section className={clsx(styles.contact)}>
                        <h2 className={clsx(styles.contact__title)}>Contact</h2>

                        <ul className={clsx(styles.contact__list)}>
                            {contacts.map((contact, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={clsx(
                                            styles['contact-item'],
                                            styles[
                                                `contact-item--${contact.name}`
                                            ]
                                        )}
                                    >
                                        <h3
                                            className={clsx(
                                                styles['contact-item__heading']
                                            )}
                                        >
                                            {contact.title}
                                        </h3>
                                        <p
                                            className={clsx(
                                                styles['contact-item__value']
                                            )}
                                        >
                                            <a
                                                href={contact.href}
                                                className={clsx(
                                                    styles['contact-item__link']
                                                )}
                                            >
                                                {contact.value}
                                            </a>
                                        </p>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>

                    <section className={clsx(styles.copyright)}>
                        <p className={clsx(styles.copyright__value)}>
                            {copyright}
                        </p>
                    </section>
                </div>
            </footer>
        )
    );
};

export default Footer;
