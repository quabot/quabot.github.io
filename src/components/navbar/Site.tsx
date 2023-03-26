import { useNavigate } from 'react-router';
import '../../style/navbar.css';
import Logo from '../../assets/logos/logo_dark.svg';
import LogoLight from '../../assets/logos/logo_light.svg';
import { useContext } from 'react';
import { DarkContext } from '../../utils/context/Darkmode';

export const NavbarSite = () => {
    const navigate = useNavigate();

    const navigateTo = (to: string) => {
        navigate(to);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function navbarBlur() {
        if (window.scrollY > 90) document.getElementById('navbar-site')?.classList.add('site-bg-blur');
        if (window.scrollY < 90) document.getElementById('navbar-site')?.classList.remove('site-bg-blur');
    }
    window.addEventListener("scroll", navbarBlur, false);

    const { dark } = useContext(DarkContext);

    return (
        <>
            <div id='navbar-site' className='navbar site-bg'>
                <div className='navbar-inner'>
                    <div className='navbar-left'>
                        <img onClick={() => navigateTo('/')} src={dark ? LogoLight : Logo} height={29} />
                    </div>

                    <div className='navbar-center'>
                        <a href="https://quabot.net">Home</a>
                        <a href="/">Status</a>
                        <a href="https://quabot.net/auth">Dashboard</a>
                    </div>

                    <div className='navbar-right'>
                        
                    </div>

                    <div className='navbar-mobile-bar'>
                        <div onClick={() => {
                            document.getElementById('navbar-site-icon')?.classList.toggle('navbar-mobile-icon-open');
                            document.getElementById('navbar-mobile')?.classList.toggle('navbar-mobile-open');
                        }} id="navbar-site-icon" className='navbar-mobile-icon'>
                            <span className='site-ico' />
                            <span className='site-ico' />
                            <span className='site-ico' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='navbar-mobile site-mobile' id='navbar-mobile'>
                <p onClick={() => window.location.href = 'https://quabot.net'}>Home</p>
                <p onClick={() => window.location.href = '/'}>Status</p>
                <p onClick={() => window.location.href = 'https://quabot.net'}>Dashboard</p>
            </div>
        </>
    )
}

// YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
// THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023