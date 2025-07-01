import styles from './main.module.css'

// Components
import Item from './item';

function Main({tasks, setTasks}) {
    const changeItem = (index) => {
        const newTask = prompt("change:", tasks[index]);
        if (newTask !== null && newTask.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
    };

    const removeItem = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <ul className={styles.todoApp__body}>
            {tasks.map((task, index) => (
                <li key={index} className={styles.todoApp__item}>
                    <Item
                        task={task}
                        index={index}
                        removeItem={removeItem}
                        changeItem={changeItem}
                    />
                </li>
            ))}
        </ul>
    );
}

export default Main;


