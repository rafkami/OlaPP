import React from "react";
import { NavLink } from "react-router-dom";
import BurgerBtn from "./BurgerBtn";
import Backdrop from "./Backdrop";

class Menu extends React.Component {
  state = {
    showSideMenu: false,
    list: [
      { name: "strona główna", path: "/", exact: true },
      { name: "o mnie", path: "/about", exact: false },
      { name: "oferta", path: "/offer", exact: false },
      { name: "kontakt", path: "/contact", exact: false }
    ]
  };
  toggleMenu = () => {
    this.setState(prevState => {
      return { showSideMenu: !prevState.showSideMenu };
    });
  };
  backdropClose = () => {
    this.setState({
      showSideMenu: false
    });
  };
  menu = this.state.list.map(item => (
    <li
      key={item.name}
      className={this.state.showSideMenu ? "side-menu__item" : "menu__item"}
    >
      <NavLink
        to={item.path}
        exact
        className="menu__item--link"
        onClick={this.backdropClose}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  render() {
    return (
      <div className="menu-wrapper">
        <div className="btn__menu-burger-wrapper">
          <BurgerBtn
            click={this.toggleMenu}
            showSideMenu={this.state.showSideMenu}
          />
        </div>

        <nav
          className={
            this.state.showSideMenu
              ? "side-menu side-menu--active"
              : "side-menu"
          }
        >
          <ul className="side-menu__list">{this.menu}</ul>
        </nav>
        {this.state.showSideMenu ? null : (
          <nav className="menu">
            <ul className="menu__list">{this.menu}</ul>
          </nav>
        )}
        {this.state.showSideMenu ? (
          <Backdrop click={this.backdropClose} />
        ) : null}
      </div>
    );
  }
}

export default Menu;
