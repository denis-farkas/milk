import './header.css';
import './header-mobile.css';

const Header = () => {
  return (
    <>
      <div className="background" id="back"></div>
      <div className="header">
        <div className="header-left">
          <img src="assets/images/logo.jpg" alt="logo" />
          <div className="header-title">Le lait</div>
        </div>
        <div className="header-right">
          <img
            className="menu-mobile"
            src="assets/images/icon-menu.svg"
            alt="menu mobile"
            tabIndex={0}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
