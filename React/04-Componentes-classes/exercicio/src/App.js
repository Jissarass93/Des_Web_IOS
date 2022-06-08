import logo from './logo.svg';
import './App.css';
import Nota from './Nota';
import Nome from './Nome'

function App() {
  return (
    <div>
      <Nome aluno='Jissara'></Nome>
      <Nota notas={[5, 6, 7, 8]}></Nota>

      <Nome aluno='Durval'></Nome>
      <Nota notas={[10, 8, 7, 8]}></Nota>

      <Nome aluno='Diego'></Nome>
      <Nota notas={[1, 2, 5, 4]}></Nota>
    </div>
  );s
}

export default App;
