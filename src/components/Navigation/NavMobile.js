import { createPortal } from 'react-dom'
import navStyle from './navStyle.module.scss'

const NavMobile = ({ setIsShowModal, children }) => {
  const onMenuClick = (event) => {
    console.log(event)
    event.stopPropagation()
    setTimeout(() => setIsShowModal(false), 300)
  }
  return (
    <>
      {createPortal(
        <button
          className={navStyle.navModal__overlay}
          onClick={() => setIsShowModal(false)}
        >
          <button className={navStyle.navModal__wrapper} onClick={onMenuClick}>
            {children}
          </button>
        </button>,
        document.body
      )}
    </>
  )
}
export default NavMobile
