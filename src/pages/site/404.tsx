import Image from '../../assets/site/404.svg';
import ImageDark from '../../assets/site/404-dark.svg';
import Hippo from '../../assets/hippos/hippo-404.svg';
import HippoDark from '../../assets/hippos/hippo-404-dark.svg';
import { useContext } from "react";
import { DarkContext } from "../../utils/context/Darkmode";

export const PageNotFound = () => {
    document.title = 'Page Not Found | QuaBot';
    const { dark } = useContext(DarkContext);

    return (
        <div className="container-body">
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
                <div>
                    <img style={{ maxWidth: '100%' }} src={dark ? ImageDark : Image} />
                </div>

                <div style={{ marginTop: '55px' }}>
                    <img style={{ maxWidth: '100%' }} src={dark ? HippoDark : Hippo} />
                </div>
            </div>
        </div>
    )
}

// YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
// THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023