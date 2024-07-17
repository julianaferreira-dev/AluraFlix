import React, { useState } from 'react';
import './ModalEditar.css';

export function ModalEditar({ isOpen, onClose, video, onSave }) {
  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagem, setImagem] = useState(video.imagem);
  const [descricao, setDescricao] = useState(video.descricao);
  const [videoUrl, setVideoUrl] = useState(video.video);

  const handleSave = () => {
    const updatedVideo = {
        ...video,
        titulo,
        categoria,
        imagem,
        descricao,
        video: videoUrl,
    };
    onSave(updatedVideo); 
    onClose(); 
};

  if (!isOpen) return null;

  return (
    <div className="modalEditar">
      <div className="modalEditar-container">

        <form className='modalEditar-formulario'>
        <h2 className='modalEditar-texto'>CRIAR CARD:</h2>
        
        <label className='modalEditar-titulo'>
          Título
          <input 
            type="text" 
            placeholder="Digite um título para o vídeo"
            value={titulo} 
            onChange={(e) => setTitulo(e.target.value)} />
        </label>
        <label className='modalEditar-categoria'>
          Categoria
          <select className='modalEditar-select'      
            value={categoria} 
            onChange={(e) => setCategoria(e.target.value)}>
            <option disabled>Selecione uma categoria</option>
            <option>Front-End</option>
            <option>Back-End</option>
            <option>Mobile</option>
        </select>
        </label>
        <label className='modalEditar-imagem'>
          Imagem
          <input 
            placeholder="Digite a URL da imagem de capa do vídeo"
            type="url" 
            value={imagem} 
            onChange={(e) => setImagem(e.target.value)} />
        </label>
        <label className='modalEditar-video'>
          URL do Vídeo
          <input 
            type="url" 
            placeholder="Digite a URL do vídeo"
            value={videoUrl} 
            onChange={(e) => setVideoUrl(e.target.value)} />
        </label>
        <label className='modalEditar-descricao'>
          Descrição
          <textarea 
            value={descricao} 
            onChange={(e) => setDescricao(e.target.value)} 
            placeholder='Digite uma descrição para o vídeo'/>
        </label>
        <span className='modalEditar-botoes'>
            <button className='modalEditar-salvar' type='submit' onClick={handleSave}>SALVAR</button>
            <button className='modalEditar-cancelar' onClick={onClose}>CANCELAR</button>
        </span>
        </form>
      </div>
    </div>
  );
}


