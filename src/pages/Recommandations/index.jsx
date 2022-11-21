import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './recommandations.css';
import './recommandations-mobile.css';
import data from '../../data/data.json';

function Recommandations() {
  const [currentActor, setCurrentActor] = useState(0);
  const [currentAge, setCurrentAge] = useState(0);

  function isActived(i) {
    if (currentActor === i) {
      return true;
    } else {
      return false;
    }
  }

  function logoIsActived(j) {
    if (currentAge === j) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className="main recommandations">
      <div className="subtitle">
        Recommandations selon les âges et les acteurs
      </div>
      <div className="section-ages">
        <div className="ages">
          {data.recommandations.map((age, j) => {
            return (
              <div
                className={`card-age ${logoIsActived(j) ? ' active' : ''}`}
                key={j}
                tabIndex={j}
                onClick={() => {
                  setCurrentAge(j);
                  logoIsActived(j);
                }}
              >
                <div className="age">
                  <img src={age.logo} alt={age.name} />
                </div>
                <div className="legend-age">
                  <h5>{age.name + ' ' + age.description}</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="section-ages-body">
        <div className="section-bread">
          <div className="bread">
            <div className="breadcrumb flat">
              {data.recommandations[currentAge].recommande.map((acteur, i) => {
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
                      <img src={acteur.logo} alt={acteur.name} />
                    </div>
                    <div className="avatar-text">
                      <p>{acteur.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="section-info">
          <div className="jumbotron">
            <div className="jumbotron-aside">
              <div className="jumbotron-aside-header">
                <div className="jumbotron-img">
                  <img
                    src={
                      data.recommandations[currentAge].recommande[currentActor]
                        .logo
                    }
                    alt={data.acteurs[currentActor].name}
                  />
                </div>
              </div>
              <div className="jumbotron-aside-body">
                <h2>
                  <span>
                    {
                      data.recommandations[currentAge].recommande[currentActor]
                        .name
                    }
                  </span>
                </h2>
              </div>
            </div>
            <div className="jumbotron-body">
              <div className="jumbotron-description">
                <ul className="liste">
                  {data.recommandations[currentAge].recommande[
                    currentActor
                  ].texte.map((text, index) => {
                    return (
                      <li key={index}>
                        <span>
                          <img src={text.image} alt={text.alt} />
                        </span>
                        {text.description}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommandations;
