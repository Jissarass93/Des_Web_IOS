import { FaToggleOn } from 'react-icons/fa';

const TaskOpen = ({ task, onDelete }) => {
    return (
        <div className="task">
            <h3>
                {task.text}
                <FaToggleOn
                    style={{ color: 'red', cursor: 'pointer' }}
                    onClick={() => onDelete(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default TaskOpen