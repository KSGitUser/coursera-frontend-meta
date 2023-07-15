import { ReactComponent as MenuIcon } from '../../assets/img/Menu-icon.svg'
import { useState } from 'react'
import NavMobile from './NavMobile'
import { Link } from 'react-router-dom'

const Nav = ({ className, isShowMobileMenu = true }) => {
  const [isShowModal, setIsShowModal] = useState(false)
  const menu = [
    { text: 'Home', href: '/', ariaLabel: 'See home page' },
    { text: 'About', href: '#', ariaLabel: 'Information about Little Lemon restaurant' },
    { text: 'Menu', href: '#', ariaLabel: 'Menu of Little Lemon restaurant' },
    { text: 'Reservations', href: '/booking', ariaLabel: 'Resrveation a table in Little Lemon restaurant' },
    { text: 'Order online', href: '#', ariaLabel: 'Order online from Little Lemon restaurant' },
    { text: 'Login', href: '#', ariaLabel: 'Login to account of Little Lemon restaurant' }
  ]

  const openModal = () => {
    setIsShowModal((currentState) => !currentState)
  }

  const MenuItems = ({ className }) => (
    <ul className={['menu', className?.split(' ')].join(' ')}>
      {menu.map(({ text, href, ariaLabel }) => (
        <li className='menu-item' key={text}>
          <Link aria-label={ariaLabel} to={href}>{text}</Link>
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
