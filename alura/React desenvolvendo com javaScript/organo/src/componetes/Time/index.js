import Membro from '../Membro';
import './Time.css'

const Time = props => {

    return(

        <section className='time' style={{ background: props.corSecundaria}}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <Membro />
        </section>
    )
}

export default Time; 



