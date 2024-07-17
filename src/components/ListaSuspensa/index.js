import './ListaSuspensa.css'

export function ListaSuspensa(props) {
    
    return (

        <fieldset className='lista-suspensa'>

            <label>
                {props.label}
            </label>

            <select style={{ "borderColor": props.borderColor }}
                required={props.required}
                value={props.valor}
                onChange={evento => props.aoAlterado(evento.target.value)} 
            >
                <option>Selecione uma categoria</option>
                {props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>

        </fieldset>
    )
}
