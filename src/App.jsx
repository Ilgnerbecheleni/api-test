import { useEffect, useState } from 'react';
import api from './service/api'; // Assuming your API configuration is in a file called api.js
import './App.css'; // Importando um arquivo CSS para estilização básica dos cards

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/categorias'); // Endpoint da API para obter categorias
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="app">
      <h1>Lista de Categorias</h1>
      <div className="card-container">
        {data ? (
          data.map((item) => (
            <div key={item.id} className="card">
              <h2>{item.NomeServico}</h2>
              <p>ID: {item.id}</p>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
