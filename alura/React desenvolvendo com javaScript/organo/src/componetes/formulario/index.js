import Botao from '../Botao';
import ListaSuspensa from '../ListaSuspensa';
import CampoTexto from '../compoTexto';
import './formulario.css';

const Formulario = () => {
    
    const times = [
        'Programação',
        'FrontEnd',
        'Data Sciencia',
        'Devops',
        'Design', 
        'Mobile',
        'Inovação e gestão'
    ]

    return (
        <selection className="container">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="cargo" placeholder="Digite seu caro"/>
                <CampoTexto label="imagem" placeholder="Digite o enderço da imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
                <Botao texto="Criar card"/>
            </form>
        </selection>
    )
}

export default Formulario; 