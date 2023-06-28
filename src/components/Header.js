import Nav from './Navigation/Nav'
import Logo from './Logo'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <Logo />
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header
