import React from "react";
import { NavLink } from "react-router-dom";
import tornPaper from "../images/error_page2_m.jpg";

const ErrorPage = () => {
  return (
    <div className="page error">
      <img src={tornPaper} alt="Pusta strona" className="error__window" />
      <div className="error__text">
        <div>Strona o podanym adresie nie istnieje.</div>
        <NavLink to="/" exact className="error__text--link">
          Przejdź do strony głównej
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
