import Logo from './Logo';
import Nav from './Navigation/Nav';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo></Logo>
        <Nav className="menu--vertical" isShowMobileMenu={false}></Nav>
      </div>
    </footer>
  );
};

export default Footer;
