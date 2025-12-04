import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      menuOpen: false
    };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  }
  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (!this.props.sharedData || !this.props.resumeBasicInfo) {
      return null;
    }

    var name = this.props.sharedData.name;
    var cr=this.props.sharedData.cr;
    var profilepic = "images/profile.jpeg";
    var description = this.props.resumeBasicInfo.description;
    var hello = this.props.resumeBasicInfo.description_header;

    const resumeFileName = "Unnathi.pdf";
    const resumeFilePath = `/files/${resumeFileName}`;


    this.titles = this.props.sharedData.titles ? this.props.sharedData.titles.map(x => [x.toUpperCase(), 1500]).flat() : [];

    const themeSwitchComponent = (
      <Switch
        checked={this.state.checked}
        onChange={this.onThemeSwitchChange}
        offColor="#f4e7f5"
        onColor="#353535"
        className="react-switch"
        width={60}
        height={30}

        uncheckedIcon={
          <span className="iconify" data-icon="ri:moon-fill"
            style={{ display: "block", height: "100%", fontSize: 22, textAlign: "end", paddingRight: "5px", color: "#444" }}
          ></span>
        }

        checkedIcon={
          <span className="iconify" data-icon="ri:sun-fill"
            style={{ display: "block", height: "100%", fontSize: 22, textAlign: "start", paddingLeft: "5px", color: "#FDD835" }}
          ></span>
        }
        id="icon-switch"
      />
    );

    var networks = this.props.sharedData.social.map(function (network) {
      let url = network.name === 'gmail' ? network.url : network.url;
      let iconClass = network.name === 'gmail' ? 'fas fa-envelope' : network.class;
      if (network.name === 'instagram') iconClass = 'fab fa-linkedin-in';


      return (
        <span key={network.name} className="social-icon m-4">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <i className={iconClass}></i>
          </a>
        </span>
      );
    });


    return (
      <header id="home" className="merged-header-section">

        <nav id="nav-wrap" className="fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand smoothscroll" href="#home">
              {cr}
            </a>

            <button
              className={`navbar-toggler ${this.state.menuOpen ? "open" : ""}`}
              onClick={this.toggleMenu}
            >
              <i className="fas fa-bars"></i>
            </button>

            <ul id="nav" className={`nav ${this.state.menuOpen ? 'menu-is-open' : ''}`}>
              <li className="nav-item"><a className="smoothscroll" href="#about" onClick={this.toggleMenu}>About</a></li>
              <li className="nav-item"><a className="smoothscroll" href="#education" onClick={this.toggleMenu}>Education</a></li>
              <li className="nav-item"><a className="smoothscroll" href="#resume" onClick={this.toggleMenu}>Experience</a></li>
              <li className="nav-item"><a className="smoothscroll" href="#skills" onClick={this.toggleMenu}>Skills</a></li>
              <li className="nav-item"><a className="smoothscroll" href="#portfolio" onClick={this.toggleMenu}>Projects</a></li>
              <li className="nav-item">{themeSwitchComponent}</li>
            </ul>
          </div>
        </nav>

        <div className="merged-content-container">
          <span id="about" className="anchor-point"></span>
          <div className="row merge-row">

            <div className="col-md-7 header-text-col">
              <div className="header-intro-text">
                <h1
                  className="responsive-headline"
                  dangerouslySetInnerHTML={{ __html: name }}
                />


                <div className="about-text-preview">
                  <span className="wave">{hello}  </span>
                  <p>{description}</p>
                </div>

                <a
                  href={resumeFilePath}
                  download={resumeFileName}
                  className="download-button"
                >
                  Download Resume
                </a>

                <div className="social-links-container">
                  {networks}

                </div>

              </div>
            </div>

            <div className="col-md-5 header-image-col">
              <div className="polaroid profile-wrapper">
                <img
                  src={profilepic}
                  alt="Profile picture"
                  className="profile-image-large"
                />
              </div>
            </div>
          </div>
        </div>

      </header>
    );
  }
}

export default Header;