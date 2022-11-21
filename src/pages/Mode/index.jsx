import { useState } from 'react';
import { Link } from 'react-router-dom';
import './mode.css';
import './mode-mobile.css';

import data from '../../data/data.json';

function Mode() {
  const [currentActor, setCurrentActor] = useState(0);

  function isActived(i) {
    if (currentActor === i) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="main mode">
      <div className="subtitle">
        Modes de consommation selon le type d'acteur
      </div>
      <div className="section-bread">
        <div className="bread">
          <div className="breadcrumb flat">
            {data.acteurs.map((acteur, i) => {
              return (
                <div
                  key={i}
                  className={`bouton ${isActived(i) ? ' active' : ''}`}
                  tabIndex={i}
                  onClick={() => {
                    setCurrentActor(i);
                    isActived(i);
                  }}
                >
                  <div className="avatar">
                    <img src={acteur.images.icon} alt={acteur.name} />
                  </div>
                  <div className="avatar-text">
                    <p>{acteur.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="legend">
            <div className="legend-text first">
              <h3>Prohibition</h3>
            </div>
            <div className="legend-text second">
              <h3>Modération</h3>
            </div>
            <div className="legend-text third">
              <h3>Promotion</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="section-info">
        <div className="jumbotron">
          <div className="jumbotron-aside">
            <div className="jumbotron-aside-header">
              <div className="jumbotron-img">
                <img
                  src={data.acteurs[currentActor].images.icon}
                  alt={data.acteurs[currentActor].name}
                />
              </div>
            </div>
            <div className="jumbotron-aside-body">
              <h2>
                <span>{data.acteurs[currentActor].name}</span>
              </h2>
            </div>
          </div>
          <div className="jumbotron-body">
            <div className="jumbotron-description">
              <p>{data.acteurs[currentActor].commentaire}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Link to="/recommandations">
          <button className="plus">Selon les ages ...</button>
        </Link>
      </div>
    </div>
  );
}
export default Mode;
