import React from 'react';

const Header = () => {
    return (
        <header className='relative w-full h-screen'>
            <div className='container relative -translate-y-1/2 top-1/2 flex flex-col !items-start gap-6'>
                <h1 className='text-[120px] font-black font-sans leading-[100%] text-light'>Le site de l'eau</h1>
                <div className='h-full flex flex-row'>
                    <div className='text-light text-2xl flex flex-col gap-8'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam sequi sint nostrum eius cupiditate doloremque asperiores nihil consectetur ea adipisci sed temporibus, officia voluptatum vero culpa pariatur incidunt. Velit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui totam sequi sint nostrum eius cupiditate doloremque asperiores nihil consectetur ea adipisci sed temporibus, officia voluptatum vero culpa pariatur incidunt. Velit.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A excepturi sequi distinctio tempora quas cupiditate incidunt, assumenda reiciendis aperiam! Suscipit dolorem itaque similique qui exercitationem eum quos modi explicabo cum.</p>
                        <a href="/about">Learn More</a>
                    </div>
                </div>
            </div>
            <a href='#activity' className='absolute animate-bounce bottom-6 left-1/2 -translate-x-1/2 text-light'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"/>
                </svg>
            </a>
        </header>
    );
};

export default Header;