import style from './styleButton.module.scss'

const Button = ({ children, ...props }) => {
  return (
    <button {...props} className={`${style.button} button__left ${props.className}`}>
      {children}
    </button>
  )
}

export default Button
