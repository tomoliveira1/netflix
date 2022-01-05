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
          <a href="https://www.instagram.com/_misaellzx/">
              <img src="https://occ-0-1050-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABRmtNzyg7zV6EC3TQGMQqbhKrAGB42lxYLSPWRqTJ_yxIx8W7rL-Abhyr7Goh0TCHU6f2b66nJAZ3sKpsYqw0HIr61mR.png?r=125" alt="Usuário"></img>
          </a>
      </div>
    </header>
  );
};
