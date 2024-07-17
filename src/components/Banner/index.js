import { useState } from 'react'; 
import { ModalBanner } from '../ModalBanner'; 
import './Banner.css'

export function Banner() {

    const [mostrarModal, setMostrarModal] = useState(false);  

    const abrirModal = () => {  
        setMostrarModal(true);  
    }; 

    const fecharModal = () => {  
        setMostrarModal(false); 
    }; 
 
    return (
        <section className='banner'>
        <div className='banner-conteudo'>
            <span className='conteudo-destaque'>
                <h1>FRONT-END</h1>
                <h2>O que faz uma desenvolvedora FRONT-END?</h2>
                <p>O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa nesse episódio!</p>
                <button className='player-destaque' onClick={abrirModal}> 
                    <img src='./images/botao-play.png' alt='' />
                </button>
            </span>

            <span className='video-destaque'>
                <img src='/images/banner.png' alt='Banner do vídeo em destaque' />
            </span>
        </div>
        <ModalBanner isOpen={mostrarModal} onClose={fecharModal} /> 
    </section>

    )
}
