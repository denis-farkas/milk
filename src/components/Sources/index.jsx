import { useState } from 'react';
import './sources.css';
import './sources-mobile.css';
import data from '../../data/data.json';

const Sources = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="main-source">
        <button
          className="button-source"
          onClick={() => {
            setOpen(!open);
          }}
        >
          Sources
          <span className={`carret ${open ? 'rotat' : null}`}>
            <img src="../../assets/images/Vector.png" alt="carret" />
          </span>
        </button>
        <div className={`noOpen ${open ? 'open' : null}`}>
          <div className="section-source">
            <div className="sources">
              {data.sources.map((source, i) => {
                return (
                  <div className="legend-source" key={i}>
                    <p>{source.content}</p>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Sources;
