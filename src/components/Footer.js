import Logo from './Logo';
import Nav from './Nav';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Logo></Logo>
        <Nav className="menu--vertical"></Nav>
      </div>
    </footer>
  );
};

export default Footer;
