import { X } from 'lucide-react';
import React, { useState } from 'react';
import Modal from 'react-modal';
import items from '../modalData.json';

const ModalPage = () => {
  // État pour gérer l'ouverture des modales
  const [modalIsOpen, setModalIsOpen] = useState(Array(items.length).fill(false));

  // Fonction pour ouvrir une modale spécifique
  const openModal = (index) => {
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = true;
    setModalIsOpen(newModalIsOpen);
  };

  // Fonction pour fermer une modale spécifique
  const closeModal = (index) => {
    const newModalIsOpen = [...modalIsOpen];
    newModalIsOpen[index] = false;
    setModalIsOpen(newModalIsOpen);
  };

  return (
    <div className='w-full bg-gray-100 p-8'>
      <style>
        {`
          .custom-scrollbar::-webkit-scrollbar {
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: #f1f1f1;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 4px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #555;
          }
        `}
      </style>

      {/* Grille pour afficher les SVGs */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center'>
        {items.map((item, index) => (
          <div key={index} className='flex items-center justify-center'>

            {/* SVG Icon */}
            <svg
              onClick={() => openModal(index)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-blue-500 cursor-pointer hover:text-blue-700 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {/* remplacez par  SVG souhaité */}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.1 0-2 .9-2 2m0-2a2 2 0 110 4m0-4a2 2 0 012 2m-4 0a4 4 0 018 0 4 4 0 01-8 0z" />
            </svg>

            {/* Modal correspondante */}
            <Modal
              isOpen={modalIsOpen[index]}
              onRequestClose={() => closeModal(index)}
              contentLabel={item.titre}
              ariaHideApp={false}
              className="fixed inset-0 flex items-center justify-center z-50"
              overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
            >
              <div className="bg-white rounded-lg p-8 w-11/12 max-w-md space-y-4">
                {/* En-tête de la modal */}
                <div className='flex items-center justify-between'>
                  <h2 className="text-2xl font-bold">{item.titre}</h2>
                  <X
                    size={24}
                    onClick={() => closeModal(index)}
                    className='cursor-pointer hover:text-red-600 transition-colors'
                  />
                </div>

                {/* Description avec scrollbar personnalisée */}
                <div className="max-h-60 overflow-y-auto custom-scrollbar">
                  <p>{item.description}</p>
                </div>

                {/* Lien */}
                <button
                  onClick={() => window.open(item.lien, '_blank')}
                  className="text-white bg-blue-500 p-3 rounded-lg"
                >
                  En savoir plus
                </button>
              </div>
            </Modal>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModalPage;