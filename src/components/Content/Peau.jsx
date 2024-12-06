// Peau.jsx
import React from 'react';

const Peau = () => {

    const handleVisitArticles = () => {
        window.location.href = "/article";
    };

    const handleQrCode = () => {
        window.location.href = "/qrcode";
    };

    return (
        <div>
            <div className="container !pt-48 text-primary-dark gap-8">
                <h2 className='text-8xl font-bold'>La peau</h2>
            </div>
            <div className="container">
                <img src="https://picsum.photos/800/600" alt="Random" className="w-full max-h-[600px] object-cover mt-6" />
            </div>
            <div className="container text-primary-dark">
                <div className="flex flex-col gap-6 mx-auto max-w-[70%] mt-6 mb-20">
                    <p>
                        Tout comme la peau protège le corps humain en formant une barrière essentielle contre les agressions extérieures, les récifs coralliens jouent un rôle de bouclier pour les océans. Ces structures vivantes absorbent l'énergie des vagues, protègent les côtes contre l'érosion et réduisent l'impact des tempêtes. Sans cette couche protectrice, les côtes seraient exposées à des destructions massives, tout comme un corps humain sans peau serait vulnérable aux infections et aux blessures.
                        Mais la peau, si elle est maltraitée ou exposée à des conditions extrêmes, se détériore. De même, les récifs coralliens sont extrêmement sensibles aux changements de leur environnement. Le réchauffement des océans, la pollution, et la surpêche endommagent ces écosystèmes, entraînant leur blanchissement et leur mort. Cela revient à comparer des lésions cutanées ou des brûlures sur le corps humain : une fois étendues, elles compromettent gravement la santé globale.
                        Les conséquences de la destruction des récifs coralliens vont bien au-delà de la perte d'un écosystème unique. Les récifs abritent près de 25 % des espèces marines, tout comme la peau contient une multitude de cellules et de tissus essentiels à la survie du corps. Leur disparition engendre une cascade de déséquilibres écologiques, menaçant la biodiversité et les populations humaines qui dépendent des récifs pour leur subsistance, leur protection, et leur économie.
                        Protéger les récifs coralliens, c’est préserver l’intégrité de la "peau" des océans, essentielle à la santé et à la résilience de la planète entière.

                    </p>
                        <button className="btn-primary w-fit mx-auto" onClick={handleVisitArticles}>
                        Retourner a l'accueil
                        </button>
                </div>
            </div>
        </div>
    );
};

export default Peau;