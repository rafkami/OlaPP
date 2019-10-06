import React from "react";
import Carousel from "re-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointDown } from "@fortawesome/free-solid-svg-icons";
import myImage from "../images/personal_color1_m.jpg";

const About = () => {
  return (
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
            przestaną mnie zadziwiać. Efektywna komunikacja to dla mnie podstawa
            dobrego zarządzania. Póki osiąganie celów powierzamy ludziom, a nie
            zaprogramowanym z góry robotom - zawsze można jeszcze lepiej, a
            jednocześnie - nigdy nie jest do końca "prosto".
          </p>
          <br />
          <br />
          <p className="about__description--paragraph">
            Od ponad 15 lat zarządzam - zespołami, pracą, projektami,
            programami, umowami - małymi i dużymi, w sektorze prywatnym i
            administracji. Skutecznie buduję sprawne zespoły sięgające "gwiazd"
            i pomagam rozwijać skrzydła.
          </p>
          <br />
          <br />
          <p className="about__description--paragraph">
            Zobacz, co inni mówią na mój temat
            <FontAwesomeIcon
              icon={faHandPointDown}
              size="lg"
              className="about__description--finger"
            />
          </p>
          <div className="about__carousel">
            <Carousel auto loop duration={500}>
              <div className="about__carousel--item">
                <div className="about__carousel--img about__carousel--img1"></div>
                <p className="about__carousel--opinion">
                  <span className="about__carousel--author">
                    Jan Kowalski, prezes małej firmy:
                  </span>
                  <span className="about__carousel--text">
                    Współpraca z Panią Olą to czysta przyjemność. Zawsze
                    przygotowana, zawsze aktywnie słuchająca, pomogła mi
                    spojrzeć inaczej na moją pracę.
                  </span>
                </p>
              </div>
              <div className="about__carousel--item">
                <div className="about__carousel--img  about__carousel--img2"></div>
                <p className="about__carousel--opinion">
                  <span className="about__carousel--author">
                    Zofia Nowak, emerytka:
                  </span>
                  <span className="about__carousel--text">
                    Dzięki Pani Aleksandrze potrafię wreszcie zaplanować swoje
                    wydatki tak, że wystarcza mi do pierwszego.
                  </span>
                </p>
              </div>
              <div className="about__carousel--item">
                <div className="about__carousel--img  about__carousel--img3"></div>
                <p className="about__carousel--opinion">
                  <span className="about__carousel--author">
                    Joanna Strzelecka, startupowiec:
                  </span>
                  <span className="about__carousel--text">
                    Mądra, wyważona, spokojna. Potrzebowałam kogoś takiego, aby
                    nabrać dystansu i spróbować innego podejścia do mojej
                    działalności.
                  </span>
                </p>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
