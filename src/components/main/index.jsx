import styles from './main.module.css'

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
        <div className={styles.todoApp__body}>
            {tasks.map((task, index) => (
                <div className={styles.todoApp__item}>
                    <div className={styles.todoApp__itemText}>
                        <p key={index}>{task}</p>
                    </div>
                    <div className={styles.todoApp__itemActions}>
                        <div className={styles.todoApp__editItem}>
                            <button onClick={() => changeItem(index)} className={`${styles.todoApp__button} ${styles.todoApp__buttonEdit}`}><i
                                className="fa-solid fa-pen-to-square"></i></button>
                        </div>
                        <div className={styles.todoApp__removeItem}>
                            <button onClick={() => removeItem(index)} className={`${styles.todoApp__button} ${styles.todoApp__buttonRemove}`}><i
                                className="fa-solid fa-trash"></i></button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Main;


