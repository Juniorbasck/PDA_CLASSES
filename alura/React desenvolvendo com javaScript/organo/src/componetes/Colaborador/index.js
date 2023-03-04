import './Colaborador.css';


const Colaborador = (props) => {

    return(
        <div className='membro'>
            <div className='cabecalho'>
                <img src={props.imagem} alt={props.Colaborador}/>
            </div>

            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export  default Colaborador; 