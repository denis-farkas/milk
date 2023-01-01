import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './navigation.css';
import './mobile-navigation.css';

const Navigation = () => {
  return (
    <div className="navbar">
      <div className="navbar-nav">
        <Link to="/#Accueil" className="nav">
          <div className="nav-item">Accueil</div>
        </Link>
        <Link to="/#Mode" className="nav">
          <div className="nav-item">Modes de consommation</div>
        </Link>
        <Link to="/#Consommation" className="nav">
          <div className="nav-item">Recommandations</div>
        </Link>
        <Link to="/#Theme" className="nav">
          <div className="nav-item">Thèmes</div>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
