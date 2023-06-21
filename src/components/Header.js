import Nav from './Nav';
import Logo from './Logo';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <Logo></Logo>
          <Nav></Nav>
        </div>
      </header>
    </>
  );
};

export default Header;
