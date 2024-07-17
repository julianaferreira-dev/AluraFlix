import React, { useState } from 'react';
import { CategoriasVideo } from 'components/CategoriasVideo';
import { Formulario } from './components/Formulario';
import { Cabecalho } from './components/Cabecalho';
import { Rodape } from './components/Rodape';
import { Banner } from './components/Banner';
import './App.css';


export function App() {

  const categoria = [
    {
      nome: 'Front-End',
      corTitulo: 'var(--frontend)',
      corBorda: 'var(--frontend)'
    },
    {
      nome: 'Back-End',
      corTitulo: 'var(--backend)',
      corBorda: 'var(--backend)'
    },
    {
      nome: 'Mobile',
      corTitulo: 'var(--mobile)',
      corBorda: 'var(--mobile)',
    },
  ];

  const [cards, setCards] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const novoCardVideo = (cardvideo) => {
    setCards([...cards, cardvideo]);
    setMostrarFormulario(false); // 
  };

  return (
    <div className="App">
      <Cabecalho verFormulario={() => setMostrarFormulario(true)} />
      <Banner />

      <section className='categorias'>
        {categoria.map(categoria => <CategoriasVideo
          key={categoria.nome}
          nome={categoria.nome}
          corTitulo={categoria.corTitulo}
          corBorda={categoria.corBorda}
          cards={cards.filter(cardvideo => cardvideo.categoria === categoria.nome)}
        />)}
      </section>

      {mostrarFormulario && (
        <Formulario 
          times={categoria.map(categoria => categoria.nome)} 
          cardCadastrado={cardvideo => novoCardVideo(cardvideo)} 
        />
      )}

      <Rodape />
    </div>
  );
}

export default App;
