import './CampoTexto.css'

export function CampoTexto(props) {

    const placeholderModificada = `${props.placeholder}`

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return (
        <fieldset className="campo-texto">
            
            <label>
                {props.label}
            </label>

            <input style={{"borderColor": props.borderColor, "color": props.color, "caretColor": props.caretColor}}
                type={props.type}                
                placeholder={placeholderModificada}
                required={props.required} 
                value={props.valor}
                onChange={aoDigitado}
            />
        </fieldset>
    )
}