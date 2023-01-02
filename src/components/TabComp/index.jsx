import { useState } from 'react';
import './tabcomp.css';
import './tabcomp-mobile.css';
import data from '../../data/data.json';

const TabComp = () => {
  const [currentTheme, setCurrentTheme] = useState(0);

  function logoIsActived(i) {
    if (currentTheme === i) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="main theme">
      <h1 className="title-mode">Thématiques</h1>
      <div className="section-theme">
        <div className="themes">
          {data.thematiques.map((theme, i) => {
            return (
              <div
                className={`card-theme ${logoIsActived(i) ? ' active' : ''}`}
                key={i}
                tabIndex={i}
                onClick={() => {
                  setCurrentTheme(i);
                  logoIsActived(i);
                }}
              >
                <div className="image-theme">
                  <img src={theme.logo} alt={theme.name} />
                </div>
                <div className="legend-theme">
                  <h5>{theme.name}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-theme-info">
        <div className="jumbotron">
          <div className="jumbotron-aside">
            <div className="jumbotron-aside-header">
              <div className="jumbotron-img">
                <img
                  src={data.thematiques[currentTheme].logo}
                  alt={data.thematiques[currentTheme].name}
                />
              </div>
            </div>
            <div className="jumbotron-aside-body">
              <h2>
                <span>{data.thematiques[currentTheme].name}</span>
              </h2>
            </div>
          </div>
          <div className="jumbotron-body">
            <div className="jumbotron-description">
              {data.thematiques[currentTheme].content.map((cont, i) => {
                return (
                  <p key={i} tabIndex={i}>
                    {cont.text}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabComp;
