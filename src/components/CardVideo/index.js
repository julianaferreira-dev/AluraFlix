
 import { useState } from 'react';
 import './CardVideo.css';
 import { ModalEditar } from '../ModalEditar';

 export function CardVideo(props) {
   const { video, corBorda, aoExcluir, id , aoEditar} = props;
   const [mostrarModalEditar, setMostrarModalEditar] = useState(false);

   const abrirModalEditar = () => {
     setMostrarModalEditar(true);
   };

   const fecharModalEditar = () => {
     setMostrarModalEditar(false);
   };

   const excluirCardVideo = () => {
     if (aoExcluir) {
       aoExcluir(id);
     }
   };

   return (
     <div className='card'>
       <div className='card-video' style={{ borderColor: corBorda, boxShadow: `${corBorda} 0px 0px 17px 8px inset`, '--box-shadow-color': corBorda }}>
         <iframe 
           src={video} title={video.titulo} allowFullScreen 
         />
       </div>

       <div className='card-botoes' style={{ borderColor: corBorda }}>
         <span className='deletarBtn'>
           <button className='botao-deletar' onClick={excluirCardVideo}>
             <img className="icone-deletar" src="./images/deletar.png" alt='' />    
             DELETAR
           </button>
         </span>
        <span className='editarBtn'>
           <button className='botao-editar' onClick={abrirModalEditar}>
             <img className="icone-editar" src="./images/editar.png" alt='' />    
             EDITAR
           </button>
         </span>
         <ModalEditar isOpen={mostrarModalEditar}
          onClose={fecharModalEditar}
          video={video}
          onSave={aoEditar} />
       </div>
     </div>
   );
}