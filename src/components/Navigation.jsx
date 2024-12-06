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
                <div className={`flex flex-col-reverse lg:flex-row bg-light shadow-lg p-2 rounded-md ml-auto mr-5 mt-5`}>
                    <div className={`${showMenu || isDesktop ? 'w-auto' : 'w-0 h-0'}`}>
                        <ul className={`flex group flex-col lg:flex-row gap-4 h-full items-center p-4 mr-0 ${isDesktop ? '' : 'lg:mr-6'} `}>
                            <li className="relative ">
                                <button className="focus:outline-none px-6">Articles</button>
                                <ul className="absolute hover:flex z-20 hidden overflow-hidden group-hover:flex flex-col gap-2 bg-white shadow-lg rounded-md mt-2">
                                    <li className="p-2 hover:bg-gray-200"><Link to="/poumons">Les poumons</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="/systeme-sanguin">Le système sanguin</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="/peau">La peau</Link></li>
                                    <li className="p-2 hover:bg-gray-200"><Link to="/cancer">Le cancer</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <Link to='/#activity' className='btn-primary'>
                        Placeholder texte
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Navigation;