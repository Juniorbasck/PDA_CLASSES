import { useState } from 'react';
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

    const [nome, setNome] = useState(''); 
    const [cargo, setCargo] = useState(''); 
    const [imagem, setImagem] = useState(''); 
    const [time, setTime] = useState(''); 

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('formulario submetido =>  ', nome, cargo, cargo, imagem, time)
    }

    return (
        <selection className="container">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                     obrigatorio={true} 
                     label="Nome" 
                     placeholder="Digite seu nome"
                     valor={nome}
                     aoAlterado={valor => setNome(valor)}
                     />
                <CampoTexto 
                    obrigatorio={true} 
                    label="cargo" 
                    placeholder="Digite seu caro"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    />
                <CampoTexto 
                    label="imagem" 
                    placeholder="Digite o enderço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    />
                <ListaSuspensa
                     obrigatorio={true} 
                     label="Time" 
                     itens={times}
                     valor={time}   
                     aoAlterado={valor => setTime(valor)}
                     />
                <Botao>
                    Criar card!
                </Botao>
            </form>
        </selection>
    )
}

export default Formulario; 