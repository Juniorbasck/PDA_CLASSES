import { useState } from 'react';
import Banner from './componetes/banner/banner.js';
import Formulario from './componetes/formulario/index.js';
import Time from './componetes/Time/index.js';




function App() {

  const times = [
    {
      nome: 'Programação', 
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'FrontEnd', 
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Sciencia', 
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Devops', 
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Design', 
      corPrimaria: '#D86EBF',
      corSecundaria: '#EAE9F5'
    },
    {
      nome: 'Mobile', 
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e gestão', 
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} aoColaboradoraCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      {times.map (time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria}
        
        />)} 

    </div>
  );
}

export default App;









