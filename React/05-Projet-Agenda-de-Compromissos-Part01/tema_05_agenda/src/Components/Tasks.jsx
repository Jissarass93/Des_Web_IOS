import TaskItem from './TaskItem';

const Tasks = ({ tasks, onDelete,  onToggle}) => {
    return (
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id}
                 task={task} 
                onDelete={onDelete} 
                onToggle={onToggle} /> 
            ))}
        </>
    );
};
//onDelete recebe o id como parametro e usa id para fazer o filtro se for diferente nao recebe a task

export default Tasks;


