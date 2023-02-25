import React from "react";
import { PageFooterHyperlink } from "./page-footer-hyperlink";

export const PageFooter = () => {
  const resourceList = [
    {
      path: "/",
      label: "¿Por qué Work Match?",
    },
    {
      path: "/",
      label: "¿Cómo trabajamos?",
    },
    {
      path: "/",
      label: "Blog de solicitantes",
    },
    {
      path: "/",
      label: "Conecta con nosotros",
    },
  ];

  return (
    <footer className="page-footer">
      <div className="page-footer-grid">
        <div className="page-footer-grid__info">
          <div className="page-footer-info__message">
            <p className="page-footer-message__headline">
              <span>Esta pagina ha sido desarrollada con el 💙 por&nbsp;</span>
              <PageFooterHyperlink path="/"> Work Match DR</PageFooterHyperlink>
            </p>
            <p className="page-footer-message__description">
              <PageFooterHyperlink path="/">
                <span>
                  Esta es una plataforma segura y facil de usar en la cual
                  puedes construir tu perfil profesional&nbsp;
                </span>
                <u> en menos de 10 minutos</u>
              </PageFooterHyperlink>
            </p>
          </div>
          <div className="page-footer-info__button">
            <a
              id="create-account-button"
              className="button button--secondary"
              href="/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Crea Un Perfil Profesional
            </a>
          </div>
          <div className="page-footer-info__resource-list">
            {resourceList.map((resource) => (
              <div
                key={resource.path}
                className="page-footer-info__resource-list-item"
              >
                <PageFooterHyperlink path={resource.path}>
                  {resource.label}
                </PageFooterHyperlink>
              </div>
            ))}
          </div>
        </div>
        <div className="page-footer-grid__brand">
          <div className="page-footer-brand">
            <img
              className="page-footer-brand__logo"
              src="https://cdn-icons-png.flaticon.com/64/128/187879.png"
              alt="Auth0"
              width="20"
              height="22.22"
            />
            <PageFooterHyperlink path="/">
              Wrok Match DR Inc
            </PageFooterHyperlink>
          </div>
        </div>
      </div>
    </footer>
  );
};
