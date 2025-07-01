import styles from './footer.module.css'

function Footer({tasks, setTasks}) {

    const clearAll = () => {
        setTasks([]);
    }

    return (
        <div className={styles.todoApp__footer}>
            <div className={styles.todoApp__information}>
                <p className={styles.todoApp__textInfo}></p>
                {tasks.length > 0 && (
                    <button onClick={clearAll} className={`${styles.todoApp__button} ${styles.todoApp__buttonClear}`}>Clear All</button>
                )}
            </div>
        </div>
    );
}

export default Footer;