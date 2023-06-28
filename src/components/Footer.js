import Logo from './Logo'
import Nav from './Navigation/Nav'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <Logo />
        <Nav className='menu--vertical' isShowMobileMenu={false} />
      </div>
    </footer>
  )
}

export default Footer
