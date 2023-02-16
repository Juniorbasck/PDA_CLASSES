import CampoTexto from '../compoTexto';
import './formulario.css';

const Formulario = () => {
    return (
        <selection className="container">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="cargo" placeholder="Digite seu caro"/>
                <CampoTexto label="imagem" placeholder="Digite o enderço da imagem"/> 
            </form>
        </selection>
    )
}

export default Formulario; 