import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaSun, FaMoon } from "react-icons/fa";

export default class Navegacion extends React.Component {
  constructor(props) {
    super(props);
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode =
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    this.state = {
      isDarkMode: isDarkMode,
    };
  }

  componentDidMount = () => {
    if (this.state.isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  toggleTheme = () => {
    const newMode = !this.state.isDarkMode;
    this.setState({ isDarkMode: newMode });
    if (newMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  peticion = async () => {};

  render() {
    return (
      <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-lg-5">
        <a href="index.html" className="navbar-brand ml-lg-3"></a>

        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse px-lg-3" id="navbarCollapse">
          <div className="navbar-nav m-auto py-0">
            <Link
              className="menu nav-item nav-link"
              activeClass="active"
              to="Inicio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Inicio
            </Link>

            <Link
              className="nav-item nav-link menu"
              activeClass="active"
              to="Acerca"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Acerca de mi
            </Link>

            <Link
              className="nav-item nav-link menu"
              activeClass="active"
              to="Skills"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>

            <Link
              className="nav-item nav-link menu"
              activeClass="active"
              to="Cualidades"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Cualidades
            </Link>

            <Link
              className="nav-item nav-link menu"
              activeClass="active"
              to="Portafolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portafolio
            </Link>

            <Link
              className="nav-item nav-link menu"
              activeClass="active"
              to="Contacto"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contacto
            </Link>
          </div>

          <div className="d-flex align-items-center ml-lg-3 my-2 my-lg-0 justify-content-center">
            <button
              onClick={this.toggleTheme}
              className="btn-theme-toggle"
              aria-label="Cambiar modo de color"
              title={
                this.state.isDarkMode
                  ? "Cambiar a Modo Claro"
                  : "Cambiar a Modo Oscuro"
              }
            >
              {this.state.isDarkMode ? (
                <div className="theme-toggle-inner dark">
                  <FaSun className="theme-icon sun-icon" />
                  <span className="theme-text">Modo Claro</span>
                </div>
              ) : (
                <div className="theme-toggle-inner light">
                  <FaMoon className="theme-icon moon-icon" />
                  <span className="theme-text">Modo Oscuro</span>
                </div>
              )}
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

