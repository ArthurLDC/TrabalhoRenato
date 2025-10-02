// src/App.jsx

import { useState } from 'react';
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import ListaAlunos from './componentes/ListaAlunos';
import './App.css';

function App() {
  
  const [contador, setContador] = useState(0);

  
  const [alerta, setAlerta] = useState({ msg: '', tipo: '' });

  
  const handleButtonClick = () => {
    setContador(contador + 1);
  };

 
  const mostrarAlertaSucesso = () => {
    setAlerta({ msg: 'Ação realizada com sucesso!', tipo: 'sucesso' });
  };

  const mostrarAlertaErro = () => {
    setAlerta({ msg: 'Ocorreu um erro na operação!', tipo: 'erro' });
  };

  return (
    <div className="App">
      <Header />

      <main>
        
        <h2>Bem-vindo, Arthur!</h2>

        
        <button onClick={handleButtonClick}>
          Você clicou {contador} vezes
        </button>

        <hr />

        
        <div className="acoes">
          <h3>Botões de Ações</h3>
          <button onClick={mostrarAlertaSucesso}>Ativar Alerta Verde</button>
          <button onClick={mostrarAlertaErro}>Ativar Alerta Vermelho</button>
        </div>

        
        {alerta.msg && (
          <div className={`alerta ${alerta.tipo}`}>
            {alerta.msg}
          </div>
        )}

        <hr />

        <ListaAlunos />
      </main>

      <Footer />
    </div>
  );
}

export default App;