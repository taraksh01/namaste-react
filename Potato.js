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
      <div className="restaurant-container">
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
        <Restaurant />
      </div>
    </div>
  );
};

const Restaurant = () => {
  return (
    <div className="restaurant">
      <div className="restaurant-image">
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/s6osrxqumlqssg6wvu65"
          alt="image"
        />
      </div>
      <p className="restaurant-name">Restaurant Name</p>
      <p className="restaurant-rating">4.4⭐️</p>
      <p className="restaurant-cousine">Cousine</p>
    </div>
  );
};

const Footer = () => {
  return <div className="footer">@taraksh01</div>;
};

export default Potato;
