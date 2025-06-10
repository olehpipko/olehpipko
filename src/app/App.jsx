import './App.scss';
import Header from '@widgets/Header';
import Footer from '@widgets/Footer';

import Banner from '@components/Banner';
import AboutMe from '@components/AboutMe';
import Experience from '@components/Experience';
import Education from '@components/Education';

function App() {
    return (
        <>
            <Header />
            <main className="site-main">
                <Banner />
                <AboutMe />
                <Experience />
                <Education />
            </main>
            <Footer />
        </>
    );
}

export default App;
