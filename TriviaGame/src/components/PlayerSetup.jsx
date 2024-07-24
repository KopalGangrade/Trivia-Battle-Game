import React from "react";
import { Link } from 'react-router-dom';

const PlayerSetup = () => {
  return (
    <>
      <div className="container">
        <h1>TRIVIA BATTLE GAME</h1>
        <div className="input-box">
          <input type="text" placeholder="User Name..." className="input" />
          <input type="text" placeholder="User Name..." className="input" />
        </div>
        <div className="btn">
        <Link to="/category">
          <button>START</button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default PlayerSetup;
