import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "Biuro Rachunkowe ATBalance - Profesjonalne Usługi Księgowe",
  description = "Kompleksowa obsługa księgowa dla firm. Księgowość, kadry, płace, ZUS, deklaracje podatkowe. Doświadczenie, terminowość, konkurencyjne ceny.",
  keywords = "biuro rachunkowe, księgowość, usługi księgowe, rozliczenia ZUS, deklaracje podatkowe, księgowa, rachunkowość",
  ogImage = "https://atbalance.pl/og-image.jpg",
  url = "https://atbalance.pl"
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://atbalance.pl${url}`;
  const ogImageUrl = ogImage ? (ogImage.startsWith('http') ? ogImage : `https://atbalance.pl${ogImage}`) : "https://atbalance.pl/og-image.jpg";

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="ATBalance - Biuro Rachunkowe" />
      <meta property="og:locale" content="pl_PL" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      <meta name="twitter:image:alt" content={title} />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="ATBalance" />
      <meta name="language" content="Polish" />
      <meta name="geo.region" content="PL-MZ" />
      <meta name="geo.placename" content="Warszawa" />
      <meta name="geo.position" content="52.2297;21.0122" />
      <meta name="ICBM" content="52.2297, 21.0122" />

      {/* Schema.org markup for Google - LocalBusiness */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AccountingService",
          "@id": "https://atbalance.pl",
          "name": "Biuro Rachunkowe ATBalance",
          "alternateName": "ATBalance",
          "description": description,
          "url": "https://atbalance.pl",
          "logo": "https://atbalance.pl/logo.png",
          "image": ogImageUrl,
          "telephone": "+48453516366",
          "email": "biuro@atbalance.pl",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "",
            "addressLocality": "Warszawa",
            "addressRegion": "Mazowieckie",
            "postalCode": "",
            "addressCountry": "PL"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "52.2297",
            "longitude": "21.0122"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              "opens": "09:00",
              "closes": "17:00"
            }
          ],
          "priceRange": "$$",
          "areaServed": {
            "@type": "Country",
            "name": "Poland"
          },
          "sameAs": [
            "https://atbalance.pl"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48453516366",
            "contactType": "customer service",
            "email": "biuro@atbalance.pl",
            "availableLanguage": ["Polish"]
          }
        })}
      </script>

      {/* Schema.org markup - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://atbalance.pl/#organization",
          "name": "Biuro Rachunkowe ATBalance",
          "url": "https://atbalance.pl",
          "logo": "https://atbalance.pl/logo.png",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+48453516366",
            "contactType": "customer service",
            "email": "biuro@atbalance.pl"
          },
          "sameAs": [
            "https://atbalance.pl"
          ]
        })}
      </script>

      {/* Schema.org markup - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://atbalance.pl/#website",
          "url": "https://atbalance.pl",
          "name": "ATBalance - Biuro Rachunkowe",
          "description": description,
          "publisher": {
            "@id": "https://atbalance.pl/#organization"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://atbalance.pl/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
