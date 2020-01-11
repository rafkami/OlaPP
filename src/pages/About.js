import React from "react";
import { SRLWrapper } from "simple-react-lightbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import myImage from "../images/personal_color1_m.jpg";
import diplomaThumb1 from "../images/psychologiaszefa-thumb.jpg";
import diplomaImg1 from "../images/psychologiaszefa-1.jpg";
import diplomaThumb2 from "../images/tutor-1-thumb.jpg";
import diplomaImg2 from "../images/tutor-1.jpg";
import diplomaThumb3 from "../images/zarzadzaniepracazespolowa-1-thumb.jpg";
import diplomaImg3 from "../images/zarzadzaniepracazespolowa-1.jpg";
import diplomaThumb4 from "../images/zarzadzanieprojektami-1-thumb.jpg";
import diplomaImg4 from "../images/zarzadzanieprojektami-1.jpg";
import diplomaThumb5 from "../images/motywacja3-thumb.jpg";
import diplomaImg5 from "../images/motywacja3-1.jpg";
import diplomaThumb6 from "../images/kompetencje menadzerskie-thumb.jpg";
import diplomaImg6 from "../images/kompetencje menadzerskie-1.jpg";

const options = {
  overlayColor: "rgba(167, 213, 242,0.9)",
  transitionTimingFunction: "ease",
  transitionSpeed: 0,
  slideTransitionSpeed: 700,
  buttonsSize: "50px",
  buttonsIconPadding: "0px",
  buttonsIconColor: "rgb(128, 59, 0)",
  buttonsBackgroundColor: "transparent",
  enablePanzoom: false,
  captionColor: "rgb(128, 59, 0)",
  hideControlsAfter: 0,
  width: "50vw"
};

const About = () => {
  return (
    <SRLWrapper options={options}>
      <div className="page about">
        <div className="about__img-wrapper">
          <img
            src={myImage}
            alt="Aleksandra Piotrowicz-Przyłuska"
            className="about__img"
          />
        </div>
        <div className="about__block">
          <div className="about__description">
            <h3 className="heading-big about__description--heading">
              Kim jestem?
            </h3>
          </div>
          <div className="about__description">
            <p className="about__description--paragraph">
              Im więcej pracuję z ludźmi, tym bardziej ich lubię. Nigdy nie
              przestaną mnie zadziwiać. Efektywna komunikacja to dla mnie
              podstawa dobrego zarządzania. Póki osiąganie celów powierzamy
              ludziom, a nie zaprogramowanym z góry robotom - zawsze można
              jeszcze lepiej, a jednocześnie - nigdy nie jest do końca "prosto".
            </p>
            <br />
            <br />
            <p className="about__description--paragraph">
              Od ponad 15 lat zarządzam - zespołami, pracą, projektami,
              programami, umowami - małymi i dużymi, w sektorze prywatnym i
              administracji. Skutecznie buduję sprawne zespoły sięgające
              "gwiazd" i pomagam rozwijać skrzydła.
            </p>
            <br />
            <br />
            <p className="about__description--paragraph">
              Sprawdź moje kompetencje
              <FontAwesomeIcon
                icon={faHandPointDown}
                size="lg"
                className="about__description--finger"
              />
            </p>

            <div className="about__lightbox">
              <div className="about__lightbox--item">
                <a href={diplomaImg1} data-attribute="SRL">
                  <img
                    src={diplomaThumb1}
                    alt="Kontrakt OSH - Psychologia szefa"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
              <div className="about__lightbox--item">
                <a href={diplomaImg2} data-attribute="SRL">
                  <img
                    src={diplomaThumb2}
                    alt="Szkoła Liderów - Tutoring"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
              <div className="about__lightbox--item">
                <a href={diplomaImg3} data-attribute="SRL">
                  <img
                    src={diplomaThumb3}
                    alt="KSAP - Zarządzanie pracą zespołową"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
              <div className="about__lightbox--item">
                <a href={diplomaImg4} data-attribute="SRL">
                  <img
                    src={diplomaThumb4}
                    alt="SGH - Zarządzanie projektami"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
              <div className="about__lightbox--item">
                <a href={diplomaImg5} data-attribute="SRL">
                  <img
                    src={diplomaThumb5}
                    alt="KSAP - Motywacja"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
              <div className="about__lightbox--item">
                <a href={diplomaImg6} data-attribute="SRL">
                  <img
                    src={diplomaThumb6}
                    alt="Avenhansen - Rozwijanie kompetencji menedżerskich"
                    className="about__lightbox--img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SRLWrapper>
  );
};

export default About;
