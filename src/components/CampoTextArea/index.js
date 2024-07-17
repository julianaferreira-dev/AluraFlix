import './CampoTextArea.css'

export function CampoTextArea(props) {

    const textodigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <fieldset className="campo-textArea">

            <label>
                {props.nome}
            </label>

            <textarea style={{"borderColor": props.borderColor, "height": props.height, "color": props.color, "caretColor": props.caretColor}}
                placeholder={props.placeholder} 
                required={props.required}
                value={props.valor}
                onChange={textodigitado}
            >  
            </textarea>

        </fieldset>
    )
}