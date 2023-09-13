const Potato = () => {
  return (
    <div className="potato">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">🥔 Potato</h1>
      <nav className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </nav>
    </header>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" className="search-box" placeholder="potato" />
        <button className="search-text">search</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">@taraksh01</div>;
};

export default Potato;
