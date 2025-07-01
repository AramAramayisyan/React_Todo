import React, {useState} from "react";

import styles from './header.module.css'
function Header({setTasks, tasks}) {

    const [task, setTask] = useState('');

    const newItem = () => {
        if (task.trim() === '') return;
        setTasks([...tasks, task]);
        setTask('');
    };

    return (
        <div className={styles.todoApp__header}>
            <h1 className={styles.todoApp__title}>Todo App</h1>
            <div className={styles.todoApp__addItem}>
                <input id="newItem"
                       type="text"
                       value={task}
                       placeholder="Add your new todo"
                       className={styles.todoApp__input}
                       onChange={(e) => setTask(e.target.value)}
                       onKeyDown={(e) => {
                           if (e.key === "Enter") newItem();
                       }}
                />
                <button onClick={newItem} className={`${styles.todoApp__button} ${styles.todoApp__buttonAdd}`}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
        </div>
    );
}

export default Header;