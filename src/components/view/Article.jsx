import React from 'react';
import { Link } from 'react-router-dom';
import Peau from '../Content/Peau';

const Article = () => {
  const cards = [
    {
      title: 'Peau',
      description: 'Découvrez comment la pollution affecte votre peau.',
      image: 'https://via.placeholder.com/300x200?text=Peau',
      link: '/peau'
    },
    {
      title: 'Poumons',
      description: 'Découvrez comment la pollution affecte vos poumons.',
      image: 'https://via.placeholder.com/300x200?text=Poumons',
      link: '/poumons'
    },
    {
      title: 'Système Sanguin',
      description: 'Découvrez comment la pollution affecte votre système sanguin.',
      image: 'https://via.placeholder.com/300x200?text=Système+Sanguin',
      link: '/systeme-sanguin'
    },
    {
      title: 'Pollution',
      description: 'Découvrez les effets de la pollution sur votre santé.',
      image: 'https://via.placeholder.com/300x200?text=Pollution',
      link: '/pollution'
    }
  ];

  return (
    <div className="container mx-auto py-12 mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p className="text-gray-700 mb-4">{card.description}</p>
              <Link to={card.link} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
                Voir le détail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;