import PropTypes from 'prop-types';
import Button from './Button';


const NewTasks = ({ title }) => {
    const onClick = () => {
        alert('Clicou');
    };
    return (

        <header>
            <h1>Agenda de {title}</h1>
            <Button bgColor="green" text="Add" onClick={onClick} />
        </header>
    );
};

NewTasks.defaultProps = {
    title: 'Tarefas',
};

NewTasks.propTypes = {
    title: PropTypes.string.isRequired,
};

export default NewTasks; 