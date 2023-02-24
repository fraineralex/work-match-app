import React from "react";
import { Auth0Feature } from "./auth0-feature";

export const Auth0Features = () => {
  const featuresList = [
    {
      title: "Muestra tus Habilidades",
      description:
        "Como solicitante serás evaluado por tus habilidades y no por tu experiencia en un entorno comodo e igualitario donde te ayudaremos a encontrar la empresa de tus sueños",
      icon: "https://cdn.auth0.com/blog/hello-auth0/identity-providers-logo.svg",
    },
    {
      title: "Perfiles de los Candidatos",
      description:
        "Donde presentarán sus habilidades, proyectos previos y demás aspectos relevantes para su carrera profesional y nosotros nos encargaremos de utilizar algoritmos avanzados para recomendar empleos y candidatos adecuados",
      icon: "https://cdn.auth0.com/blog/hello-auth0/mfa-logo.svg",
    },
    {
      title: "Validar Conocimientos",
      description:
        "La plataforma podrá incluir tests para validar las habilidades de los candidatos en áreas específicas para construir un perfil a partir de sus habilidades tecnicas y blandas en lugar de su experiencia.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/advanced-protection-logo.svg",
    },
    {
      title: "Búsqueda de Oportunidades Laborales",
      description:
        "Las empresas podrán buscar sus candidatos adecuados para sus necesidades y las empresas y a los candidatos comunicarse de manera efectiva.",
      icon: "https://cdn.auth0.com/blog/hello-auth0/private-cloud-logo.svg",
    },
  ];

  return (
    <div className="auth0-features">
      <h2 className="auth0-features__title">
        Explora nuestras caracteristicas
      </h2>
      <div className="auth0-features__grid">
        {featuresList.map((feature) => (
          <Auth0Feature
            key={feature.resourceUrl}
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};
