import React from 'react';
import './Botao.css';

export function Botao(props) {
    const estiloBotao = {
        borderColor: props.corBorda,
        color: props.corFonte,
        boxShadow: `0px 0px 12px 4px inset ${props.corBoxShadows}`
    };

    return (
        <button className='botao-padrao' style={estiloBotao}
            type={props.type}   
        >
            {props.children}
            {props.nome}
        </button>
    );
};
