import '../../style/home.css';
import { DarkContext } from '../../utils/context/Darkmode';
import { HiGlobeEuropeAfrica, HiPuzzlePiece } from 'react-icons/hi2';
import { BsDiscord } from 'react-icons/bs';
import { useContext } from 'react';
import { DiMongodb } from 'react-icons/di';
import { useEffect, useState } from 'react';
import { getApi, getDatabase, getSocket, getWebsite } from '../../api/STATUS';

export const HomePage = () => {
    document.title = 'Status | QuaBot';

    const { dark } = useContext(DarkContext);

    const [websiteStatus, setWebsiteStatus] = useState('loading');
    const [apiStatus, setApiStatus] = useState('loading');
    const [botStatus, setBotStatus] = useState('loading');
    const [databaseStatus, setDatabaseStatus] = useState('loading');

    useEffect(() => {
        getApi()
            .then(() => {
                setApiStatus('online');
            }).catch(() => {
                setApiStatus('offline');
            });

        getWebsite()
            .then(() => {
                setWebsiteStatus('online');
            }).catch((e) => {
                setWebsiteStatus('online');
            });

        getSocket()
            .then(({ data: d }) => {
                if (d === 0 || d === 1) setBotStatus('online');
                if (d === 2 || d === 3) setBotStatus('offline');
            }).catch((e) => {
                setBotStatus('unknown');
            });

        getDatabase()
            .then(({ data: d }) => {
                if (d === 0 || d === 3) setDatabaseStatus('offline');
                if (d === 2 || d === 1) setDatabaseStatus('online');
            }).catch((e) => {
                setDatabaseStatus('unknown');
            });
    }, []);

    return (
        <div className='body-wrapper'>
            <h1 className='status-title'>QuaBot Status</h1>
            {(botStatus === 'loading' || apiStatus === 'loading' || websiteStatus === 'loading' || databaseStatus === 'loading') && <p className='status-subtitle'><span className='unknown'>Loading status...</span></p>}
            {botStatus === 'online' && apiStatus === 'online' && websiteStatus === 'online' && databaseStatus === 'online' && <p className='status-subtitle'>All services are currently <span className='online'>online</span></p>}
            {!(botStatus === 'offline' && apiStatus === 'offline' && websiteStatus === 'offline' && databaseStatus === 'offline') && !(botStatus === 'online' && apiStatus === 'online' && websiteStatus === 'online' && databaseStatus === 'online') && !(botStatus === 'loading' || apiStatus === 'loading' || websiteStatus === 'loading' || databaseStatus === 'loading') && <p className='status-subtitle'>Some services are currently <span className='degraded'>experiencing issues</span></p>}
            {botStatus === 'offline' && apiStatus === 'offline' && websiteStatus === 'offline' && databaseStatus === 'offline' && <p className='status-subtitle'>All services are currently <span className='offline'>offline</span></p>}

            <div>
                <div>
                    <div className='status-service'>
                        <div className='status-service-name'>
                            <div className='icon'><HiGlobeEuropeAfrica size={40} /></div>
                            <div className='status-service-title-wrapper'>
                                <h3 className='status-service-title'>Website</h3>
                                <p className='status-service-subtitle'>Main website & dashboard, accessible from quabot.net</p>
                            </div>
                        </div>

                        {websiteStatus === 'online' && <p className='status-service-state online'>Online</p>}
                        {websiteStatus === 'degraded' && <p className='status-service-state degraded'>Degraded</p>}
                        {websiteStatus === 'offline' && <p className='status-service-state offline'>Offline</p>}
                        {websiteStatus === 'loading' && <p className='status-service-state unknown'>Loading...</p>}
                        {websiteStatus === 'unknown' && <p className='status-service-state unknown'>Unknown</p>}
                    </div>

                    <div className='status-service'>
                        <div className='status-service-name'>
                            <div className='icon'><HiPuzzlePiece size={40} /></div>
                            <div className='status-service-title-wrapper'>
                                <h3 className='status-service-title'>API</h3>
                                <p className='status-service-subtitle'>Dashboard API, allows for dashboard loading and server editing</p>
                            </div>
                        </div>

                        {apiStatus === 'online' && databaseStatus === 'online' && <p className='status-service-state online'>Online</p>}
                        {(apiStatus === 'degraded' || databaseStatus === 'offline' || apiStatus === 'unknown') && apiStatus !== 'offline' && apiStatus !== 'unknown' && apiStatus !== 'loading' && <p className='status-service-state degraded'>Degraded</p>}
                        {apiStatus === 'offline' && <p className='status-service-state offline'>Offline</p>}
                        {apiStatus === 'loading' && <p className='status-service-state unknown'>Loading...</p>}
                        {apiStatus === 'unknown' && <p className='status-service-state unknown'>Unknown</p>}
                    </div>
                </div>

                <div className='status-service'>
                    <div className='status-service-name'>
                        <div className='icon'><BsDiscord size={34} /></div>
                        <div className='status-service-title-wrapper'>
                            <h3 className='status-service-title'>Bot</h3>
                            <p className='status-service-subtitle'>QuaBot Discord bot, usable in Discord servers only</p>
                        </div>
                    </div>

                    {botStatus === 'online' && databaseStatus === 'online' && <p className='status-service-state online'>Online</p>}
                    {(botStatus === 'degraded' || databaseStatus === 'offline' || databaseStatus === 'unknown') && botStatus !== 'offline' && botStatus !== 'unknown' && botStatus !== 'loading' && <p className='status-service-state degraded'>Degraded</p>}
                    {botStatus === 'offline' && <p className='status-service-state offline'>Offline</p>}
                    {botStatus === 'loading' && <p className='status-service-state unknown'>Loading...</p>}
                    {botStatus === 'unknown' && <p className='status-service-state unknown'>Unknown</p>}
                </div>

                <div className='status-service'>
                    <div className='status-service-name'>
                        <div className='icon'><DiMongodb size={34} /></div>
                        <div className='status-service-title-wrapper'>
                            <h3 className='status-service-title'>Database</h3>
                            <p className='status-service-subtitle'>Storage for all QuaBot related settings</p>
                        </div>
                    </div>

                    {databaseStatus === 'online' && <p className='status-service-state online'>Online</p>}
                    {databaseStatus === 'offline' && <p className='status-service-state offline'>Offline</p>}
                    {databaseStatus === 'loading' && <p className='status-service-state unknown'>Loading...</p>}
                    {databaseStatus === 'unknown' && <p className='status-service-state unknown'>Unknown</p>}
                </div>
            </div>

            <p onClick={() => {
                setApiStatus('loading');
                setDatabaseStatus('loading');
                setBotStatus('loading');
                setWebsiteStatus('loading');
                getApi()
                    .then(() => {
                        setApiStatus('online');
                    }).catch(() => {
                        setApiStatus('offline');
                    });

                getWebsite()
                    .then(() => {
                        setWebsiteStatus('online');
                    }).catch((e) => {
                        setWebsiteStatus('online');
                    });

                getSocket()
                    .then(({ data: d }) => {
                        if (d === 0 || d === 1) setBotStatus('online');
                        if (d === 2 || d === 3) setBotStatus('offline');
                    }).catch((e) => {
                        setBotStatus('unknown');
                    });

                getDatabase()
                    .then(({ data: d }) => {
                        if (d === 0 || d === 3) setDatabaseStatus('offline');
                        if (d === 2 || d === 1) setDatabaseStatus('online');
                    }).catch((e) => {
                        setDatabaseStatus('unknown');
                    });
            }} className='status-refresh'>Refresh</p>
        </div>
    )
}

// YOU ARE NOT ALLOWED TO USE, MODIFY OR DO ANYTHING WITH THIS CODE.
// THIS CODE IS COPYRIGHTED BY JOA_SSS, 2023