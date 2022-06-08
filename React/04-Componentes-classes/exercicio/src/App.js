import logo from './logo.svg';
import './App.css';
import Nota from './Nota';
import Nome from './Nome'

function App() {
  return (
    <div>
      <Nome pessoa='Jissara'></Nome>
      <Nota notas={[5, 6, 7, 8]}></Nota>

      <Nome pessoa='Durval'></Nome>
      <Nota notas={[10, 8, 7, 8]}></Nota>

      <Nome pessoa='Diego'></Nome>
      <Nota notas={[1, 2, 5, 4]}></Nota>

      <Nome pessoa='Maria'></Nome>
      <Nota notas={[7, 6, 6, 4]}></Nota>
    </div>
  );s
}

export default App;
