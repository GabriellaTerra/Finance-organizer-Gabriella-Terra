import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import "./components/Form/style.css";
import "./components/Card/style.css";
import "./components/List/style.css";
import "./components/TotalMoney/style.css";


function App() {
  const [listTransactions, setlistTransactions] = useState([]);

  function handleTodo(itensRemove) {
    console.log(itensRemove);
    const tarefasConcluidas = listTransactions.filter(
      (itens) => itens !== itensRemove
    );

    setlistTransactions(tarefasConcluidas);
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="divApp">
          <h2 className="tituloApp">Nu</h2>
          <h2 className="tituloApp2">Kenzie</h2>
        </div>
        <div className="divBntInicio">
          <button className="bntInicio" >Início</button>
        </div>
      </header>
      <div className="divBnts">
        <h3 className="divTituloFiltros">Resumo financeiro</h3>
        <div className="divBntFiltros">
          <button className="filtroTodos">Todos</button>
          <button className="filtroEntradas">Entradas</button>
          <button className="filtroSaidas">Despesas</button>
        </div>
      </div>
      <main className="main">
        <Form
          setlistTransactions={setlistTransactions}
          listTransactions={listTransactions}
          handleTodo={handleTodo}
        />
      </main>
    </div>
  );
}

export default App;
