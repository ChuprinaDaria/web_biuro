import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Biuro Rachunkowe ATBalance - Profesjonalne Usługi Księgowe",
  description = "Kompleksowa obsługa księgowa dla firm. Księgowość, kadry, płace, ZUS, deklaracje podatkowe. Doświadczenie, terminowość, konkurencyjne ceny.",
  keywords = "biuro rachunkowe, księgowość, usługi księgowe, rozliczenia ZUS, deklaracje podatkowe, księgowa, rachunkowość",
  ogImage = null,
  url = "https://atbalance.pl"
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      {ogImage && <meta property="twitter:image" content={ogImage} />}

      {/* Schema.org markup for Google */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "name": "Biuro Rachunkowe ATBalance",
          "description": description,
          "url": url,
          "telephone": "+48453516366",
          "email": "biuro@atbalance.pl",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "PL",
            "addressLocality": "Warszawa"
          },
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday"
            ],
            "opens": "09:00",
            "closes": "17:00"
          },
          "priceRange": "$$",
          "areaServed": {
            "@type": "Country",
            "name": "Poland"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
