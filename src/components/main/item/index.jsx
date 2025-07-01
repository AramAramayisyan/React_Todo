import styles from './item.module.css';

const Item = ({
    task,
    index,
    removeItem,
    changeItem,
}) => {
    return (
        <>
            <div className={styles.todoApp__itemText}>
                <p>{task}</p>
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
        </>
    )
}

export default Item