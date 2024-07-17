import { useState, useEffect } from 'react';
import { CardVideo } from '../CardVideo';
import './CategoriasVideo.css';

export function CategoriasVideo(props) {
  const [cards, setCards] = useState(props.cards || []);

  useEffect(() => {
    if (props.cards) {
      setCards(props.cards);
    }
  }, [props.cards]);

  const excluirVideo = (videoId) => {
    const novosCards = cards.filter(card => card.id !== videoId);
    setCards(novosCards);
  };

  return (
    <div className='categorias-videos'>
      <h3 style={{ backgroundColor: props.corTitulo }}>{props.nome}</h3>
      <div className='categorias-cards'>
        {cards.length > 0 ? (
          cards.map(cardvideo => (
            <CardVideo
              key={cardvideo.id}
              id={cardvideo.id}
              video={cardvideo.video}
              corBorda={props.corBorda}
              aoExcluir={excluirVideo}
            />
          ))
        ) : (
          <p className='categoria-vazia'>
            Nenhum vídeo cadastrado.
          </p>
        )}
      </div>
    </div>
  );
}
