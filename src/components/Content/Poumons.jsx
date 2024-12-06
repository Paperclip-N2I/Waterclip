// Peau.jsx
import React from 'react';

const Poumons = () => {

    const handleVisitArticles = () => {
        window.location.href = "/article";
    };

    return (
        <div>
            <div className="container !pt-48 text-primary-dark gap-8">
                <h2 className='text-8xl font-bold'>Les poumons</h2>
                <p className='max-w-[70%]'>
                    Le phytoplancton, minuscule mais indispensable, est responsable de la production de la majorité de l’oxygène sur Terre, tout comme les poumons apportent de l’oxygène à notre corps. Ce sont les véritables poumons de la planète, assurant son système respiratoire.

                </p>
            </div>
            <div className="container">
                <img src="https://picsum.photos/800/600" alt="Random" className="w-full max-h-[600px] object-cover mt-6" />
            </div>
            <div className="container text-primary-dark">
                <div className="flex flex-col gap-6 mx-auto max-w-[70%] mt-6 mb-20">
                    <p>
                        Cependant, tout comme les poumons humains peuvent être gravement endommagés par la fumée de cigarette, le phytoplancton est menacé par l'acidification croissante des océans. Le CO₂, libéré en masse par les activités humaines, se dissout dans les océans, augmentant leur acidité de plus de 26%. Cette acidité réduit la quantité de calcaire disponible, une substance essentielle pour les planctons dotés d'un squelette calcaire. Sans calcaire, ces organismes ne peuvent plus se développer, mettant en péril l’équilibre des écosystèmes marins.
                        Les conséquences de la destruction du phytoplancton sont comparables à celles d’un corps humain privé de poumon. Si le phytoplancton disparaît, les océans s’asphyxient, manquant d’oxygène pour soutenir la vie marine. De plus, le phytoplancton est à la base de la chaîne alimentaire océanique : sa disparition entraînerait un effondrement des populations marines. Préserver le phytoplancton, c'est préserver les poumons de notre planète et garantir la survie de tous les êtres vivants qui en dépendent.
                    </p>
                    <button className="btn-primary w-fit mx-auto" onClick={handleVisitArticles}>
                        Retourner a l'accueil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Poumons;