import clsx from 'clsx';

import { Ysabeau_Infant } from 'next/font/google';
import './globals.scss';

const ysabeauInfant = Ysabeau_Infant({
    variable: '--font-ysabeau-infant',
    weight: ['400', '700', '900'],
    subsets: ['latin', 'cyrillic'],
    display: 'swap',
});

export const metadata = {
    title: 'Oleh Pipko • a Full-Stack Wordpress Developer in Kyiv',
    description:
        "Hi, I'm a web developer with real commercial experience since 2018. I have been the developer on various web projects, working both remotely and on-site.",
    icons: {
        icon: '/favicon.png',
    },
};

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={clsx('body', ysabeauInfant.className)}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
