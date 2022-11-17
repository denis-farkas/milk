import React from 'react';
import { NavLink } from 'react-router-dom';
import './navigation.css';
import './mobile-navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <NavLink
          to={`/`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Accueil</div>
        </NavLink>
        <NavLink
          to={`/modes`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Modes de consommation</div>
        </NavLink>
        <NavLink
          to={`/recommandations`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Recommandations</div>
        </NavLink>
        <NavLink
          to={`/themes`}
          className={(nav) => (nav.isActive ? 'nav active' : 'nav')}
        >
          <div className="nav-item">Thémes</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
