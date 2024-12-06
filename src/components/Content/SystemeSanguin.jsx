// Peau.jsx
import React from 'react';

const SystemeSanguin = () => {

    const handleVisitArticles = () => {
        window.location.href = "/article";
    };

    return (
        <div>
            <div className="container !pt-48 text-primary-dark gap-8">
                <h2 className='text-8xl font-bold'>Les poumons</h2>
                <p className='max-w-[70%]'>
                    Les courants marins, tout comme le système sanguin humain, jouent un rôle vital dans la régulation et la distribution des éléments essentiels à la vie. Ils transportent des nutriments, de l'oxygène et redistribuent la chaleur à travers les océans, soutenant ainsi l’équilibre et la vitalité des écosystèmes marins.

                </p>
            </div>
            <div className="container">
                <img src="https://picsum.photos/800/600" alt="Random" className="w-full max-h-[600px] object-cover mt-6" />
            </div>
            <div className="container text-primary-dark">
                <div className="flex flex-col gap-6 mx-auto max-w-[70%] mt-6 mb-20">
                    <p>
                        Cependant, le réchauffement climatique provoque une fonte accrue des calottes polaires, libérant une grande quantité d’eau douce dans les océans. Cette eau douce réduit la salinité, modifiant la densité de l’eau et affaiblissant les courants marins.
                        Tout comme un système sanguin affaibli empêche le corps humain de nourrir ses organes, privant ces derniers d’oxygène et de nutriments, l’affaiblissement des courants marins limite la capacité des océans à alimenter la vie marine. Les conséquences de ce phénomène sont désastreuses : les écosystèmes marins, privés des nutriments et de l’oxygène nécessaires, se dégradent progressivement, Impactant toute la vie sur terre.
                    </p>
                    <button className="btn-primary w-fit mx-auto" onClick={handleVisitArticles}>
                        Retourner aux activités
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SystemeSanguin;