import buttonStyles from '../../styles/Button.module.css'

function PrimaryButton({ label, action }) {
  return (
    <button className={buttonStyles.primary} onClick={action}>
      {label}
    </button>
  )
}

export default PrimaryButton
