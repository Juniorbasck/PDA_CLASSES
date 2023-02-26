import { useState } from 'react';
import Banner from './componetes/banner/banner.js';
import Formulario from './componetes/formulario/index.js';
import Time from './componetes/Time/index.js';



function App() {

  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdd = (colaborador) => {
    console.log(colaborador)
    setColaborador([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner/>
      <Formulario aoColaboradoraCadastrado={colaborador => aoNovoColaboradorAdd(colaborador)}/>
      <Time nome="Programação"/>
      <Time nome="Front-End"/>
      <Time nome="Data-Science"/>
      <Time nome=""/>
    </div>
  );
}

export default App;









