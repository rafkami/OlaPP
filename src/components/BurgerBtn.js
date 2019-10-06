import React from "react";

const BurgerBtn = props => (
  <button
    onClick={props.click}
    className={
      props.showSideMenu
        ? "btn__menu-burger btn__menu-burger--active"
        : "btn__menu-burger"
    }
  >
    <div className="btn__menu-burger--line btn__menu-burger--line1" />
    <div className="btn__menu-burger--line btn__menu-burger--line2" />
    <div className="btn__menu-burger--line btn__menu-burger--line3" />
  </button>
);

export default BurgerBtn;
