import './Cabecalho.css';

export function Cabecalho({ verFormulario }) {
  return (
    <header>
      <span className='cabecalho'>
        <div className='logo'>
          <img src="./images/logo.png" alt="Logo AluraFlix" />
        </div>
        <div className='novo-video'>
          <a href='#novo-video' onClick={verFormulario}>NOVO VÍDEO</a>
        </div>
      </span>
    </header>
  );
}
