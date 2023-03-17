import React from "react";

export const HeroBanner = () => {
  //const logo = "https://cdn-icons-png.flaticon.com/128/187/187879.png";
  //https://cdn.auth0.com/blog/developer-hub/react-logo.svg

  return (
    <div className="hero-banner">
      {/* <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="company logo" />
      </div> */}
      {/* <h1 className="hero-banner__headline">Work Match DR</h1> */}
      <p className="hero-banner__description">
        <h1 className="home-barner">Construimos</h1>
        <h1 className="home-barner">un mejor</h1>
        <h1 className="home-barner">futuro para ti</h1>
      </p>
      <div className="button-div">
        <a
          id="code-sample-link"
          target="_blank"
          rel="noopener noreferrer"
          href="/"
          className="button button--secondary"
        >
          Conoce nuestras propuestas →
        </a>
      </div>
    </div>
  );
};
