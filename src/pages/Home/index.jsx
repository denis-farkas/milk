import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="main">
      <div className="section-text">
        <div className="subtitle">Controverse</div>
        <div className="title">
          <h1>Le lait est-il notre ami pour la vie ?</h1>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            ducimus esse dolorum minus assumenda eveniet, corrupti ipsum placeat
            enim atque tempora iure? Ipsa accusantium ut officiis cumque,
            numquam sit nesciunt.
          </p>
        </div>
        <Link to="/modes">
          <button className="plus">En savoir plus ...</button>
        </Link>
      </div>
      <div className="section-image">
        <img src="../../assets/images/milk.jpg" alt="milk" />
        <h3 className="first-legend">Calcium: 2mg/l</h3>
        <h3 className="second-legend">Magnesium: 2mg/l</h3>
      </div>
    </div>
  );
}

export default Home;
