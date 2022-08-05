import styles from '../../styles/Button.module.css'

function ActionButton({ type, action }) {
  switch (type) {
    case 'done':
      return (
        <button
          className={`${styles.buttonAction} ${styles.checked}`}
          onClick={action}
        >
          &#10003;
        </button>
      )
    case 'notDone':
      return (
        <button
          className={`${styles.buttonAction} ${styles.unchecked}`}
          onClick={action}
        >
          &#10003;
        </button>
      )

    case 'edit':
      return (
        <button className={styles.buttonAction} onClick={action}>
          ✏️
        </button>
      )

    case 'delete':
      return (
        <button className={styles.buttonAction} onClick={action}>
          🗑️
        </button>
      )

    default:
      break
  }
}

export default ActionButton
