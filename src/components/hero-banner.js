import React from "react";

export const HeroBanner = () => {
  const logo = "https://cdn-icons-png.flaticon.com/128/3800/3800024.png";
  //https://cdn.auth0.com/blog/developer-hub/react-logo.svg

  return (
    <div className="hero-banner hero-banner--pink-yellow">
      <div className="hero-banner__logo">
        <img className="hero-banner__image" src={logo} alt="company logo" />
      </div>
      <h1 className="hero-banner__headline">Work Match DR</h1>
      <p className="hero-banner__description">
        Somos una plataforma en línea que conecta a las empresas con nuevos
        talentos, centrándonos en los conocimientos de los candidatos y no en su
        <strong>experiencia.</strong>
      </p>
      <a
        id="code-sample-link"
        target="_blank"
        rel="noopener noreferrer"
        href="/"
        className="button button--secondary"
      >
        Explora nuestras propuestas →
      </a>
    </div>
  );
};
