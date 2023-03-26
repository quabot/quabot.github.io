import '../style/footer.css';
import Logo from '../assets/logos/logo_dark.svg';
import LogoLight from '../assets/logos/logo_light.svg';
import { CheckBox, CheckBoxLabel, CheckBoxWrapper } from '../style/Buttons';
import { useContext } from 'react';
import { DarkContext } from '../utils/context/Darkmode';

export const Footer = () => {
    function loadTheme() {
        let theme = window.localStorage.getItem('theme');
        if (theme === 'dark' || theme === 'light') {
            document.body.classList.remove('theme-dark', 'theme-light');
            document.body.classList.add(`theme-${theme}`);
        }
        if (!theme) {
            document.body.classList.add(`theme-light`);
        }
    }

    function toggleTheme() {
        const currentTheme = window.localStorage.getItem("theme");
        if (!currentTheme) {
            window.localStorage.setItem('theme', "dark");
        }
        if (currentTheme === "light") {
            window.localStorage.setItem('theme', "dark");
        }
        if (currentTheme === "dark") {
            window.localStorage.setItem('theme', "light");
        }
        loadTheme();
    }

    const { dark, setDark } = useContext(DarkContext);


    return (
        <>
            <div className='footer'>
                <div className='footer-left'>
                    <div className='footer-logo'>
                        <img width={29} src={dark ? LogoLight : Logo} alt='QuaBot Logo' />
                        <div className='footer-logo-text'>
                            <p className='footer-logo-title'>QuaBot Status</p>
                            <p className='footer-logo-subtitle'>© {new Date().getFullYear()} QuaBot Inc. All rights
                                reserved.</p>
                        </div>
                    </div>

                    <div className='footer-columns'>
                        <div className='footer-column'>
                            <b>About</b>
                            <a href='https://quabot.net/about/credits'>Credits</a>
                            <a href='https://quabot.net/about/tos'>Terms of Service</a>
                            <a href='https://quabot.net/about/privacy'>Privacy Policy</a>
                        </div>

                        <div className='footer-column'>
                            <b>Website</b>
                            <a href='https://quabot.net'>Homepage</a>
                            <a href='/'>Status</a>
                            <a href='https://quabot.net/news'>News</a>
                        </div>

                        <div className='footer-column px-gone'>
                            <b>Links</b>
                            <a href='https://discord.quabot.net'>Discord (Support)</a>
                            <a href='https://github.com/QuaBot'>Github</a>
                        </div>
                    </div>

                    <div className='footer-toggle-column'>
                        <div className='footer-dark-toggle'>
                            <CheckBoxWrapper>
                                <CheckBox onInput={(e) => {
                                    setDark(!dark);
                                    toggleTheme();
                                }} id="dark-toggle" type="checkbox" defaultChecked={dark} />
                                <CheckBoxLabel htmlFor="dark-toggle" />
                            </CheckBoxWrapper>
                            <p>Dark Mode</p>
                        </div>

                        <p style={{ fontSize: '13px' }}>🇺🇦 #supportukraine</p>
                    </div>
                </div>
            </div>
        </>
    )
}

// YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
// THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023