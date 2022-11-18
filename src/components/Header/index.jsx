import Navigation from '../Navigation';
import './header.css';
import './header-mobile.css';

export function myFunction() {
  const x = document.getElementById('topnav');
  const back = document.getElementById('back');
  if (x.className === 'topnav') {
    back.classList.remove('notVisible');
    back.className += ' visible';
    x.className += ' responsive';
  } else {
    back.classList.remove('visible');
    back.className += ' notVisible';
    x.className = 'topnav';
  }
}

const Header = () => {
  return (
    <>
      <div className="background" id="back"></div>
      <div className="header">
        <div className="header-left">
          <img src="assets/images/logo.jpg" alt="logo" />
          <div className="header-title">La consommation de lait</div>
        </div>
        <div className="header-right">
          <img
            className="menu-mobile"
            src="assets/images/icon-menu.svg"
            alt="menu mobile"
            tabIndex={0}
            onClick={myFunction}
          />

          <div className="topnav" id="topnav">
            <img
              className="close-mobile"
              src="assets/images/icon-close.svg"
              alt="close mobile"
              tabIndex={4}
              onClick={myFunction}
            />
            <Navigation />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
