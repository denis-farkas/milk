import React from 'react';
import { Link } from 'react-router-dom';
import './mode.css';

import data from '../../data/data.json';

function Mode() {
  return (
    <div className="main mode">
      <div className="section-bread">
        <div className="subtitle">Modes de consommation</div>
        <div className="bread">
          <div className="legend">
            <div className="legend-text">
              <h3>Prohibition</h3>
            </div>
            <div className="legend-text">
              <h3>Modération</h3>
            </div>
            <div className="legend-text">
              <h3>Promotion</h3>
            </div>
          </div>
          <div className="breadcrumb flat">
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[0].images.icon}
                  alt={data.acteurs[0].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[0].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[1].images.icon}
                  alt={data.acteurs[1].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[1].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[2].images.icon}
                  alt={data.acteurs[2].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[2].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[3].images.icon}
                  alt={data.acteurs[3].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[3].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[4].images.icon}
                  alt={data.acteurs[4].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[4].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[5].images.icon}
                  alt={data.acteurs[5].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[5].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[6].images.icon}
                  alt={data.acteurs[6].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[6].name}</p>
              </div>
            </div>
            <div className="bouton">
              <div className="avatar">
                <img
                  src={data.acteurs[7].images.icon}
                  alt={data.acteurs[7].name}
                />
              </div>
              <div className="avatar-text">
                <p>{data.acteurs[7].name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="section-info"></div>
      </div>
    </div>
  );
}
export default Mode;
