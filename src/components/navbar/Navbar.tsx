import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="logo" />
        <span>E-Shop</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="search" className="icon" />
        <img src="/app.svg" alt="app" className="icon" />
        <img src="/expand.svg" alt="expend" className="icon" />
        <div className="notifications">
          <img src="/notifications.svg" alt="notifications" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://leocheffi.com/images/leo.jpg" alt="" />
          <span>Léo</span>
        </div>
        <img src="/settings.svg" alt="settings" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
