import react from "react";
import "./Header.css";

export default ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="#">
          <img
            src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"
            alt="netflix"
          ></img>
        </a>
      </div>

      <div className="header--user">
          <a href="#">
              <img src="https://occ-0-1050-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFBobc7fp6yrDz9-co-ad-tw1yCqfgUHJITWSdWNVuuBgUnpVEkHJ0LUBBw2OsASRcQCbMfNZsLUDA2B5NJ336B_TIw.png?r=6ab" alt="Usuário"></img>
          </a>
      </div>
    </header>
  );
};
