import styles from '../../styles/Input.module.css'

function DefaultInput({ type = 'text', placeholder = '', value, onChange }) {
  return (
    <input
      className={styles.default}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

export default DefaultInput
