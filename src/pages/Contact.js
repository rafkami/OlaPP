import React from "react";
import ReactMapboxGl, {
  ScaleControl,
  ZoomControl,
  Marker
} from "react-mapbox-gl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookMessenger,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import busyBee from "../images/coworking_busybee.jpg";
import bLab from "../images/coworking_nowyswiat.png";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoicmFma2FtaSIsImEiOiJjanV2M2ZtZnMwbjk3NDRwaTcxZndqaDV6In0.Ir9V-RDPPvvT5giFhI9COw"
});

const Contact = () => {
  return (
    <div className="page contact">
      <div className="contact__heading ">
        <h3 className="heading-big">Skontaktuj się ze mną</h3>
        <p className="contact__heading--sub">
          - napisz do mnie ws. współpracy, zobacz też mój profil w mediach
          społecznościowych
        </p>
      </div>
      <div className="contact__it">
        <div className="contact__it--channel">
          <a
            href="mailto:olaprzyluska@gmail.com"
            className="contact__it--link btn"
          >
            <FontAwesomeIcon
              icon={faAt}
              size="lg"
              className="contact__it--icon"
            />
            Wyślij e-mail
          </a>
        </div>
        <div className="contact__it--channel">
          <a
            href="https://m.me/106049154072037"
            className="contact__it--link btn"
          >
            <FontAwesomeIcon
              icon={faFacebookMessenger}
              size="lg"
              className="contact__it--icon"
            />
            Wyślij wiadomość
          </a>
        </div>
        <div className="contact__it--channel">
          <a
            href="https://www.facebook.com/Spr%C4%99%C5%BCyna-wydarze%C5%84-razem-do-celu-106049154072037/"
            className="contact__it--link btn"
          >
            <FontAwesomeIcon
              icon={faFacebook}
              size="lg"
              className="contact__it--icon"
            />
            Sprężyna Wydarzeń
          </a>
        </div>
      </div>
      <div className="contact__address--heading">
        Zobacz lokalizacje, które polecam jako miejsca spotkań w ramach
        współpracy:
      </div>
      <div className="contact__address">
        <div className="contact__address--wrapper">
          <div className="contact__address--place">
            <a
              href="http://busy-bee.pl"
              className="heading-medium contact__address--placename"
            >
              <img
                src={busyBee}
                alt="logo Busy Bee"
                className="contact__address--logo"
              />
              Busy Bee
            </a>
            <p className="contact__address--details">
              ul. Libijska 10C
              <br />
              03-977 Warszawa
            </p>
          </div>
          <Map
            className="contact__map"
            center={[21.074601, 52.224372]}
            zoom={[15]}
            style={`mapbox://styles/mapbox/streets-v8`}
          >
            <ScaleControl />
            <ZoomControl />
            <Marker coordinates={[21.074601, 52.224372]}>
              <div className="contact__map--marker" />
            </Marker>
          </Map>
        </div>
        <div className="contact__address--wrapper">
          <div className="contact__address--place">
            <a
              href="https://business-lab.pl/"
              className="heading-medium contact__address--placename"
            >
              <img
                src={bLab}
                alt="logo Business Lab"
                className="contact__address--logo"
              />
              Business Lab
            </a>
            <p className="contact__address--details">
              ul. Nowy Świat 41A
              <br />
              00-042 Warszawa
            </p>
          </div>
          <Map
            className="contact__map"
            center={[21.0172719, 52.2344334]}
            zoom={[15]}
            style={`mapbox://styles/mapbox/streets-v8`}
          >
            <ScaleControl />
            <ZoomControl />
            <Marker coordinates={[21.0172719, 52.2344334]}>
              <div className="contact__map--marker" />
            </Marker>
          </Map>
        </div>
      </div>
    </div>
  );
};

export default Contact;