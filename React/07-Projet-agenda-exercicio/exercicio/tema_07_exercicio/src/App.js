import './App.css';
import NewTasks from'./NewTasks';
import TasksOpen from'./Components/TasksOpen';
import TasksDone from './Components/TasksDone';
import { useState } from 'react';


function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Consulta médica',
      day: '5 de Fev as 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Reunião na Escola',
      day: '6 de Fev as 13:30',
      reminder: true,

    },
    {
      id: 3,
      text: 'Compras no Supermercado',
      day: '7 de Fev as 8:30',
      reminder: false,
    },
  ]);
  // Deletar tarefa 
  const deletaTarefa = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  // Alterar o reminder 
  const mudarReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
    console.log(id);
  };

  return (
    <div className="container">
      < NewTasks title="tarefas" />
      {TasksOpen.length > 0 ? (
        <TasksOpen
          NewTasks={tasks}
          onDelete={deletaTarefa}          
        />)(
        <TasksDone
        TasksDone={tasks}
          onToggle={mudarReminder}
          />
      ) : (
        'Você não tem tarefas, pode tirar férias!'
      )}
    </div>
  );}
  
      
export default App;
