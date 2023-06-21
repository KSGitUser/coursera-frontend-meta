const Nav = ({ className }) => {
  const menu = [
    { text: 'Home', href: '#' },
    { text: 'About', href: '#' },
    { text: 'Menu', href: '#' },
    { text: 'Reservations', href: '#' },
    { text: 'Order online', href: '#' },
    { text: 'Login', href: '#' },
  ];

  return (
    <nav className="nav">
      <ul className={['menu', className?.split(' ')].join(' ')}>
        {menu.map(({ text, href }) => (
          <li className="menu-item" key={text}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
