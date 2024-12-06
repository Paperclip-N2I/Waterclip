import React from 'react';

const Credits = () => {
    return (
        <div className="bg-blue-900 min-h-screen flex items-center justify-center p-6 pt-36">
                <div className="bg-blue-700 border-4 border-blue-500  p-8 max-w-4xl text-white shadow-lg pixelated">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl font-retro text-yellow-300 mb-4">
                            Oups, tu viens d’atterrir dans le passé !
                        </h1>
                        <p className="text-lg  text-white-200 mb-4">
                            Merci d’avoir exploré notre site jusqu’ici. Si tu es arrivé à cette page, cela signifie
                            probablement que tu es sensible à notre message et que tu as pris le temps de naviguer à travers nos contenus.
                        </p>
                        
                    </div>
    
                    <div className="mb-8">
                        <p className="text-lg text-white-200 mb-5">
                            Alors, avant de partir, replonge-toi une dernière fois dans une époque où :
                        </p>
                        <ul className="list-disc list-inside  text-white-300">
                            <li>Les océans étaient immenses et mystérieux.</li>
                            <li>Les récifs coralliens abritaient des milliers d’espèces colorées.</li>
                            <li>Les plages brillaient de sable fin, et non de déchets.</li>
                        </ul>
                    </div>
    
                    <div className="mb-8 text-center">
                        <p className="text-lg font-retro text-yellow-300 mb-4">
                            Aujourd’hui, les océans crient à l’aide. Pollution, réchauffement climatique, surpêche…
                            Leurs merveilles se ternissent, et leur équilibre est en péril.
                        </p>
                    </div>
                        <p className="text-lg text-white-300">
                            <strong>Le monde de demain sera façonné par nos choix d’aujourd’hui.</strong>
                            Ensemble, nous pouvons faire en sorte que les océans retrouvent leur grandeur d’antan.
                        </p>
    
                    <div className="text-center mb-8 mt-8">
                        <p className="text-lg text-white-400">
                            Nous espérons que ce voyage rétro t’as inspiré à réfléchir à l’avenir. Merci d’avoir pris le temps
                            d’explorer et de rêver avec nous.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-200 font-retro">L'Équipe :</h2>
                        <ul className="space-y-2">
                            <li>
                                <strong>Eliott Burkle</strong> -{' '}
                                <a
                                    href="https://github.com/eliooooooo"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Kevin Ellwanger</strong> -{' '}
                                <a
                                    href="https://github.com/Doumpy"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Tristan Gerber</strong> -{' '}
                                <a
                                    href="https://github.com/Tristan-stack"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Jeremy Deveney</strong> -{' '}
                                <a
                                    href="https://github.com/wav-rover"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Flavien Marteau</strong> -{' '}
                                <a
                                    href="https://github.com/Fley14"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Dylan Monteneri</strong> -{' '}
                                <a
                                    href="https://github.com/dymonte"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                            <li>
                                <strong>Julie Fromageat</strong> -{' '}
                                <a
                                    href="https://github.com/Chocoshed"
                                    className="text-green-300 hover:text-yellow-300 underline"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-8">
                        <h2 className="text-2xl font-bold mb-4 text-yellow-200 font-retro">Bonus :</h2>
                        <p>
                            Pour finir ce cour retour dans le passé. Test notre super générateur de qrcode en silouhette de pokemon !
                        </p>
                        
                    </div>
                    <div class="mt-4 text-center">
                        <a href="/qrcode" class="text-green-300 hover:text-yellow-300 underline font-retro" > - ICI -</a>
                    </div>
                </div>
        </div>
    );
};

export default Credits;
