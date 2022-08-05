import buttonStyles from '../../styles/Button.module.css'

function SecondaryButton({ label, action }) {
  return (
    <button className={buttonStyles.secondary} onClick={action}>
      {label}
    </button>
  )
}

export default SecondaryButton
