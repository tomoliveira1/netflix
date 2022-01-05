import react from "react";
import "./Header.css";

export default () => {
  return (
    <header className="black">
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
              <img src="https://occ-0-1050-1380.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAAFMAEDzrjFngWzmfzjBwDCp5aArul_aesBXbpYZgdo9FSha3M71rrn_IpfzTfPwpJIAN_zMpj9UOfJXwvOnvDL3OFCA.png?r=f16" alt="Usuário"></img>
          </a>
      </div>
    </header>
  );
};
