import Nav from './Navigation/Nav'
import Logo from './Logo'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='container'>
          <Link to='/'><Logo /></Link>
          <Nav />
        </div>
      </header>
    </>
  )
}

export default Header
