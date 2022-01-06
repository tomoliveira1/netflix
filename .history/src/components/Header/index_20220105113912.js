import react from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="https://www.netflix.com/">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="netflix"
          ></img>
        </a>
      </div>

      <div className="header--user">
          <a href="#">
              <img src="https://occ-0-1050-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBn2zjQtllskB3t8dY2fDDcErehJKNM-wmubGjHlBZJ3J5CxjCC7RZXS6HLUR-OzWk4iyEifj0bkxn9qBdaY4mWFVQ.png?r=870" alt="Usuário"></img>
          </a>
      </div>
    </header>
  );
};
