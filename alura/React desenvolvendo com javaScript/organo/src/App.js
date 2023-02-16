import Banner from './componetes/banner/banner.js';
import CampoTexto from './componetes/compoTexto';


function App() {
  return (
    <div className="App">
      <Banner/>
      <CampoTexto label="Nome"/>
      <CampoTexto label="cargo"/>
    </div>
  );
}

export default App;
