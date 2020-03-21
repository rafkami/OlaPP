import React from "react";
import ReactCardFlip from "react-card-flip";
import * as Markdown from "react-markdown";

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
          className={`offer__single offer__single-back`}
        >
          {" "}
          <h4 className="heading-medium single-offer__heading">
            {fields.serviceName}
          </h4>
          <div className="single-offer__details">
            <Markdown
              source={fields.detailedDesc}
              className="single-offer__details--desc"
            />
          </div>
        </div>
      </ReactCardFlip>
    );
  }
}

export default SingleOffer;
