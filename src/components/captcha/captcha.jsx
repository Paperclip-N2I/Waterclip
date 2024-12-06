import React, { useState } from 'react';
import CaptchaScene from './captcha-scene';

function Captcha() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <button 
        onClick={openModal} 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Valider le captcha
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-fit">
            <div className="flex justify-between items-center border-b pb-2">
              <h2 className="text-xl font-semibold">Réussissez le captcha pour continuer.</h2>
              <button 
                onClick={closeModal} 
                className="text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </div>
            <div className="mt-4 w-full">
              <CaptchaScene onSuccess={closeModal} />
            </div>
          </div>
        </div>
      )}
      </>
  );
}

export default Captcha;