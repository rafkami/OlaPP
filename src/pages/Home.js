import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChess,
  faComments,
  faGraduationCap
} from "@fortawesome/free-solid-svg-icons";
import PhotoAPP from "../images/personal_b&w1_m.jpg";

const Home = () => {
  return (
    <div className="page home">
      <div className="home__bcg">
        <div className="home__intro">
          <span className="home__intro--details">
            Zastanawiasz się na czym polega Twój cel?
          </span>
          <span className="home__intro--details">
            A może już wiesz, a nie bardzo wiesz jak się zebrać do drogi?
          </span>
          <span className="home__intro--details">
            Chciałabyś/chciałbyś dotrzeć do celu efektywniej i w mniejszym
            stresie?
          </span>
          <span className="home__intro--solution">
            Jeśli tak, to trafiłeś we własciwe miejsce.
          </span>
        </div>
        <div className="home__slogan">
          <Link to="/offer" className="home__single home__single--1">
            <FontAwesomeIcon
              icon={faComments}
              size="lg"
              className="home__single--icon"
            />
            <br /> Konsultacje
          </Link>
          <Link to="/offer" className="home__single home__single--2">
            <FontAwesomeIcon
              icon={faGraduationCap}
              size="lg"
              className="home__single--icon"
            />
            <br /> Szkolenia
          </Link>
          <Link to="/offer" className="home__single home__single--3">
            <FontAwesomeIcon
              icon={faChess}
              size="lg"
              className="home__single--icon"
            />
            <br />
            Doradztwo
          </Link>
        </div>
        <div className="home__card">
          <Link to="/about" className="home__card--about">
            <div className="home__card--imgWrapper">
              <img
                src={PhotoAPP}
                alt="Moje zdjęcie"
                className="home__card--myImage"
              />
            </div>
            <div className="home__card--container">
              <span className="home__card--name">
                Aleksandra Piotrowicz-Przyłuska
              </span>
              <span className="home__card--desc">nie-coach, nie-mentor</span>
              <span className="home__card--desc">
                - wszystko co najlepsze z obu światów
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
