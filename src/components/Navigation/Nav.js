import { ReactComponent as MenuIcon } from '../../assets/img/Menu-icon.svg'
import { useState } from 'react'
import NavMobile from './NavMobile'

const Nav = ({ className, isShowMobileMenu = true }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const menu = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Menu', href: '#' },
    { text: 'Reservations', href: '#' },
    { text: 'Order online', href: '#' },
    { text: 'Login', href: '#' }
  ]

  const openModal = () => {
    setIsShowModal((currentState) => !currentState)
  }

  const MenuItems = ({ className }) => (
    <ul className={['menu', className?.split(' ')].join(' ')}>
      {menu.map(({ text, href }) => (
        <li className='menu-item' key={text}>
          <a href={href}>{text}</a>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className='nav'>
      <MenuItems className={className} />
      {isShowMobileMenu && (
        <MenuIcon className='menu--mobile' onClick={openModal} />
      )}
      {isShowModal && (
        <NavMobile setIsShowModal={setIsShowModal}>
          <MenuItems />
        </NavMobile>
      )}
    </nav>
  )
}

export default Nav
