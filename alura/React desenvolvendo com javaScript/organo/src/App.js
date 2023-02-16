import Banner from './componetes/banner/banner.js';
import CampoTexto from './componetes/compoTexto';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome" placeholder="Digite seu nome"/>
      <CampoTexto label="cargo" placeholder="Digite seu caro"/>
      <CampoTexto label="imagem" placeholder="Digite o enderço da imagem"/>
    </div>
  );
}

export default App;
