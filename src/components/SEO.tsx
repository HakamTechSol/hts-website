import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  noindex?: boolean;
  schema?: object;
}

const SEO = ({
  title,
  description,
  keywords = "custom software development, web development, mobile app development, Shopify development, React Native development, Flutter development, digital marketing, SEO services, SaaS development, UI/UX design, staff augmentation, enterprise software development",
  ogImage = "https://lovable.dev/opengraph-image-p98pqg.png",
  ogType = "website",
  canonicalUrl = "https://hakamtechsol.com",
  noindex = false,
  schema,
}: SEOProps) => {
  const fullTitle = title.includes("HakamTechSol") ? title : `${title} | HakamTechSol`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="HakamTechSol" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@HakamTechSol" />
      <meta name="twitter:creator" content="@HakamTechSol" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="googlebot" content={noindex ? "noindex, nofollow" : "index, follow"} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0f6cbd" />
      
      {/* Schema Markup */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;