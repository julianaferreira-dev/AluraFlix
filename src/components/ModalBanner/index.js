import React from 'react';
import './ModalBanner.css';

export function ModalBanner({ isOpen, onClose }) {

    if (!isOpen) {
        return null;
    }

    const fecharModal = (evento) => {
        if (evento.target.className === 'modal-banner') {
            onClose();
        }
    };

    return (
        <div className='modal-banner' onClick={fecharModal}>
            <div className='modal-conteudo'>
                <iframe
                    src="https://www.youtube.com/embed/ZY3-MFxVdEw?si=qdXi9DaclkrWROMA?controls='0'"
                    title="Vídeo do canal Alura no YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}
