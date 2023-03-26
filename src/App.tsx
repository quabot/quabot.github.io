import { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Footer } from './components/Footer';
import { NavbarSite } from './components/navbar/Site';
import { PageNotFound } from './pages/site/404';
import { HomePage } from './pages/site/Home';
import { DarkContext } from './utils/context/Darkmode';

function App() {
    const [dark, setDark] = useState(localStorage.getItem('theme') === 'dark');

    return (
        <>
            <DarkContext.Provider value={{
                dark,
                setDark
            }}>
                <Routes>
                    <Route path='*' element={<NavbarSite />} />
                </Routes>

                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Routes>

                <Routes>
                    <Route path='*' element={<Footer />} />
                </Routes>
            </DarkContext.Provider>
        </>
    );
}

export default App;

// YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
// THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023