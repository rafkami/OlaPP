import React from "react";
import * as contentful from "contentful";
import SingleOffer from "./SingleOffer";

class Offer extends React.Component {
  state = {
    offer: []
  };

  client = contentful.createClient({
    space: `${process.env.REACT_APP_contenfulSpace}`,
    environment: "master",
    accessToken: `${process.env.REACT_APP_contenfulToken}`
  });

  componentDidMount() {
    this.fetchOffer()
      .then(this.setOffer)
      .catch(console.error);
  }

  fetchOffer = () => this.client.getEntries({ content_type: "olaPServices" });

  setOffer = response => {
    this.setState({
      offer: response.items
    });
  };

  render() {
    const serviceList = this.state.offer
      .sort((a, b) => (a.fields.order > b.fields.order ? 1 : -1))
      .map(({ fields }) => (
        <SingleOffer key={fields.shortName} fields={fields} />
      ));

    return (
      <div className="page offer">
        <div className="offer__intro">
          <h3 className="heading-big">
            Kiedy możesz potrzebować mojego wsparcia?
          </h3>
          <div className="offer__intro--reasons">
            <ul className="offer__intro--list">
              <li className="offer__intro--item">
                masz jakiś służbowy cel do zrealizowania, nowe wyzwanie, chcesz
                coś zmienić na lepsze, chciałabyś/chciałbyś lepiej zrozumieć
                czego oczekują twoi przełożeni
              </li>
              <li className="offer__intro--item">
                trudno Ci się odnaleźć w nowej roli np. po awansie, zmianie
                pracy czy wejściu do nowego zespołu, którego zadaniami masz
                zarządzać
              </li>
              <li className="offer__intro--item">
                trudno Ci zrozumieć dlaczego Twój zespół "stawia opór", kiedy
                chcesz wprowadzić zmianę
              </li>
              <li className="offer__intro--item">
                chcesz zbudować zespół - poczynając od rekrutacji lub zmian w
                już istniejącym zbiorze osób
              </li>
              <li className="offer__intro--item">
                chcesz, aby cele stawiane Twojemu zespołowi były realizowane
                efektywniej
              </li>
              <li className="offer__intro--item">
                chcesz efektywnie zakomunikować pracownikowi ocenę jego pracy
              </li>
              <li className="offer__intro--item">
                chcesz, żeby kierownicy/managerowie w Twojej organizacji lepiej
                komunikowali oczekiwania
              </li>
            </ul>
          </div>
          <p className="offer__intro--paragraph">
            Zapoznaj się z moją ofertą usług i napisz do mnie - wspólnie
            ustalimy, jaka forma współpracy będzie najlepiej odpowiadać Twoim
            potrzebom
          </p>
        </div>
        <div className="offer__container">{serviceList}</div>
      </div>
    );
  }
}

export default Offer;
