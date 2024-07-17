import { useState } from 'react';
import { Botao } from '../Botao';
import { CampoTexto } from '../CampoTexto';
import { ListaSuspensa } from '../ListaSuspensa';
import './Formulario.css';
import { CampoTextArea } from '../CampoTextArea';

export function Formulario(props) {
  const [titulo, setTitulo] = useState('');
  const [categoria, setCategoria] = useState('');
  const [imagem, setImagem] = useState('');
  const [video, setVideo] = useState('');
  const [texto, setTexto] = useState('');

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.cardCadastrado({
      titulo,
      categoria,
      imagem,
      video,
      texto
    });

    setTitulo('');
    setCategoria('');
    setImagem('');
    setVideo('');
    setTexto('');
  };

  const cores = [
    {
      corFonte: 'var(--verde)',
      corBorda: 'var(--verde)',
      corBoxShadows: 'var(--verde)'
    },
    {
      corFonte: '#FFFFFF',
      corBorda: '#FFFFFF'
    }
  ];

  return (
    <section className="novo-video">
      <div id='novo-video' className='titulo-formulario'>
        <h1>NOVO VÍDEO</h1>
        <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
      </div>

      <form className='formulario__novoVideo' onSubmit={aoSalvar}>
        <h2>CRIAR CARD</h2>

        <span className='primeiro-grupo'>
          <CampoTexto borderColor='#262626' color='#A5A5A5' caretColor='var(--verde)'
            label="Titulo"
            type='text'
            min-length='5'                        
            placeholder="Digite um título para o vídeo"
            required={true}
            valor={titulo}
            aoAlterado={valor => setTitulo(valor)}
          />

          <ListaSuspensa borderColor='#262626' color='#A5A5A5'
            label="Categoria"
            required={true}
            itens={props.times}
            valor={categoria}
            aoAlterado={valor => setCategoria(valor)}
          />
        </span>

        <span className='segundo-grupo'>
          <CampoTexto borderColor='#262626' color='#A5A5A5' caretColor='var(--verde)'
            label="Imagem"
            type='url'
            placeholder="Digite a URL da imagem de capa do vídeo"
            required={true}
            valor={imagem}
            aoAlterado={valor => setImagem(valor)}
          />

          <CampoTexto borderColor='#262626' color='#A5A5A5' caretColor='var(--verde)'
            label="Vídeo"
            type='url'
            placeholder="Digite a URL do vídeo"
            required={true}
            valor={video}
            aoAlterado={valor => setVideo(valor)}
          />
        </span>

        <span className='terceiro-grupo'>
          <CampoTextArea borderColor='#262626' height='150px' color='#A5A5A5' caretColor='var(--verde)'
            nome='Descrição'
            min-length='20'
            placeholder='Digite uma descrição para o vídeo'
            required={true}
            valor={texto}
            aoAlterado={valor => setTexto(valor)}
          />
        </span>

        <div className='novo-videoBtn'>
          <Botao
            key={cores[0].titulo}
            corBorda={cores[0].corBorda}
            corFonte={cores[0].corFonte}
            corBoxShadows={cores[0].corBoxShadows}
            nome='SALVAR'
          />

        </div>
      </form>
    </section>
  );
};