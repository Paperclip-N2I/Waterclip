import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='container fixed left-1/2 -translate-x-1/2 flex !items-end !justify-end z-10'>
            <nav className='flex items-end'>
                <div className={`flex flex-col-reverse lg:flex-row bg-light shadow-lg p-2 rounded-md overflow-hidden ml-auto mr-5 mt-5`}>
                    <div className={`${showMenu || isDesktop ? 'w-auto' : 'w-0 h-0'}`}>
                        <ul className={`flex flex-col lg:flex-row gap-4 overflow-hidden h-full items-center p-4 mr-0 ${isDesktop ? '' : 'lg:mr-6'} `}>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                    <a href='#activity' className='btn-primary'>
                        Placeholder texte
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;