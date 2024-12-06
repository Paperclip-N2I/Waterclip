import React from 'react';

const Pollution = () => {

    const handleVisitArticles = () => {
        window.location.href = "/article";
    };

    return (
        <div>
            <div className="container !pt-48 text-primary-dark gap-8">
                <h2 className='text-8xl font-bold'>La pollution plastique</h2>
                <p className='max-w-[70%]'>
                    Les déchets plastiques rejetés par les humains dans les océans provoquent de nombreux effets néfastes sur la biodiversité marine.

                </p>
            </div>
            <div className="container">
                <img src="https://picsum.photos/800/600" alt="Random" className="w-full max-h-[600px] object-cover mt-6" />
            </div>
            <div className="container text-primary-dark">
                <div className="flex flex-col gap-6 mx-auto max-w-[70%] mt-6 mb-20">
                    <p>
                        L’un des plus importants est celui des microplastiques. Ces particules, issues de la dégradation des déchets plastiques, se dispersent dans l’environnement marin et sont ingérées par presque tous les organismes marins, des plus petits planctons aux plus grands prédateurs.
                        Les microplastiques causent des dommages graves et souvent irréversibles aux systèmes digestif et respiratoire des animaux marins, affaiblissant leur santé et perturbant les écosystèmes. Ce processus peut être comparé à un cancer dans le corps humain : une maladie qui s’installe, Souvent de manière invisible au départ, et qui détruit les tissus et les organes de l’intérieur.
                        De la même manière qu’un cancer peut se propager à tout l’organisme, affectant progressivement son fonctionnement, la pollution plastique s'infiltre dans tous les niveaux de l’écosystème marin. Elle contamine non seulement les espèces marines, mais remonte également la chaîne alimentaire pour affecter les humains, qui consomment ces organismes pollués. Cette pollution agit comme une métastase, menaçant la vie marine et, par extension, notre propre santé et bien-être. Lutter contre la pollution plastique, c’est s’attaquer à une des formes les plus insidieuses de destruction écologique, pour préserver la santé des océans et la nôtre. Surepêche? spermatozoïde ? NON! c’est pas cohérent avec le site car un parallèle pertinent avec le corp est compliqué.


                    </p>
                    <button className="btn-primary w-fit mx-auto" onClick={handleVisitArticles}>
                        Retourner a l'accueil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Pollution;