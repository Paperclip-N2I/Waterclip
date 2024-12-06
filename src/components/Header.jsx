import React from 'react';
import img from '../img/intro.webp';

const Header = () => {
    return (
        <header className='relative w-full h-screen'>
            <div className='container relative -translate-y-1/2 top-1/2 flex flex-col !items-start gap-6'>
                <h1 className='text-[120px] font-black font-sans leading-[100%] text-light mb-4'>WaterClip</h1>
                <div className='h-full flex flex-row'>
                    <div className='text-light text-2xl flex justify-between  gap-8'>
                        <p className='w-2/3'>Bienvenue dans ce voyage interactif pour découvrir l'impact de nos actions sur la Terre, et plus particulièrement sur ses océans.Depuis la révolution industrielle, l'homme a modifié la planète à une vitesse jamais vue, provoquant un réchauffement climatique mondial. Les océans, qui couvrent 70% de la surface de la Terre, régulent notre climat, absorbent le dioxyde de carbone, et soutiennent une biodiversité vitale. Mais, tout comme notre corps, la planète dépend d'un système circulatoire sain – celui des océans. Si nous ne prenons pas conscience de leur fragilité et n'agissons pas rapidement, les conséquences seront dramatiques.Accompagnez-nous, afin de comprendre l'importance de préserver un océan en bonne santé et garantir un avenir durable</p>
                        <img src={img} alt="" className='w-96 rounded-lg' />
                    </div>
                </div>
            </div>
            <a href='#activity' className='absolute animate-bounce bottom-6 left-1/2 -translate-x-1/2 text-light'>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-chevron-double-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                    <path fill-rule="evenodd" d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
            </a>
        </header>
    );
};

export default Header;