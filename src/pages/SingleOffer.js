import React from "react";
import ReactCardFlip from "react-card-flip";

class SingleOffer extends React.Component {
  state = {
    isFlipped: false
  };
  handleClick = e => {
    e.preventDefault();
    this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
  };
  render() {
    const fields = this.props.fields;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
        <div
          key="front"
          onClick={this.handleClick}
          className={`offer__single offer__single-front--${fields.shortName}`}
        >
          <h4 className="heading-medium offer__single--heading">
            {fields.serviceName}
          </h4>
          <div className="offer__single--desc">{fields.shortDesc}</div>
        </div>

        <div
          key="back"
          onClick={this.handleClick}
          className={`offer__single offer__single-back--${fields.shortName}`}
        >
          {" "}
          <h4 className="heading-medium single-offer__heading">
            {fields.serviceName}
          </h4>
          <div className="single-offer__details">
            <div className="single-offer__details--desc">
              {fields.detailedDesc}
            </div>
            <div className="single-offer__details--price">
              {fields.shortName === "Szkolenia" ||
              fields.shortName === "Doradztwo"
                ? `Cena ustalana indywidualnie`
                : `Cena za 1h spotkania: ${fields.price} zł`}
            </div>
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default SingleOffer;
