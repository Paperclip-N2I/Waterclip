import React from 'react';

const Header = () => {
    return (
        <header className='relative w-full h-screen'>
            <div className='container relative -translate-y-1/2 top-1/2 flex flex-col !items-start gap-6'>
                <h1 className='text-[120px] font-black font-sans leading-[100%] text-light'>Le site de l'eau</h1>
                <div className='h-full flex flex-row'>
                    <div className='text-light text-2xl flex flex-col gap-8'>
                        <p>Les actions humaines ont transformé notre planète à un rythme jamais vu dans l’histoire. Depuis la révolution industrielle, la combustion des énergies fossiles, la déforestation massive et les activités agricoles intensives ont libéré d’énormes quantités de gaz à effet de serre dans l’atmosphère, provoquant un réchauffement climatique global. Ce phénomène bouleverse non seulement les écosystèmes naturels, mais met également en péril la stabilité de la vie sur Terre. Le climat change, les températures montent, et des événements extrêmes comme les vagues de chaleur, les tempêtes et les inondations deviennent de plus en plus fréquents. Nous sommes à un tournant : continuer sur cette voie pourrait rendre la Terre invivable pour les générations futures. Face à ce défi, il est essentiel de prendre conscience de notre impact et d’agir, avant qu’il ne soit trop tard.</p>
                        <p>Les océans couvrent 70% de la surface de la Terre, ce qui témoigne de leur importance majeure dans l'équilibre global. Ils régulent la température, absorbent une grande partie du dioxyde de carbone, et soutiennent une biodiversité essentielle à la vie sur Terre. Pour tenter de bien comprendre l'ampleur de leur rôle et la manière dont leurs dysfonctionnements peuvent affecter l'ensemble de la planète, nous allons les comparer au corps humain. Tout comme le corps humain repose sur des systèmes vitaux interconnectés, les océans agissent comme le système circulatoire de la Terre, régulant l’énergie, l'oxygène et les nutriments nécessaires à la vie. À travers ce parallèle, nous allons explorer comment les perturbations dans les océans, telles que la pollution, le réchauffement climatique, et la perte de biodiversité, sont analogues à des dysfonctionnements corporels qui menacent la santé de l'ensemble du système.</p>
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