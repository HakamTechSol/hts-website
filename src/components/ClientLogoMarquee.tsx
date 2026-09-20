import angelopoulosLogo from "@/assets/client-logos/angelopoulos.png";
import chronosLogo from "@/assets/client-logos/chronos.jpeg";
import clearSkyPowerLogo from "@/assets/client-logos/clearshky-power.png";
import dwsLogo from "@/assets/client-logos/DWS.webp";
import eliteDentalCareersLogo from "@/assets/client-logos/elite-dental-careers.jpeg";
import enfixoLogo from "@/assets/client-logos/enfixo.webp";
import grantsBakeryLogo from "@/assets/client-logos/grants-bakery.png";
import hayyakLogo from "@/assets/client-logos/hayyak.png";
import jnclmLogo from "@/assets/client-logos/jnclm.png";
import khyratnaLogo from "@/assets/client-logos/khyratna.png";
import klsLogo from "@/assets/client-logos/kls.png";
import notaryLogo from "@/assets/client-logos/notary.png";
import nrgLogo from "@/assets/client-logos/NRG.jpeg";
import nrgAiLogo from "@/assets/client-logos/NRG-AI.png";
import nugalValleySchoolLogo from "@/assets/client-logos/nugal-valley-school.png";
import pestIqLogo from "@/assets/client-logos/pestiqlgo.png";
import pureWaterLogo from "@/assets/client-logos/pure-water.png";
import sweetRideCafeLogo from "@/assets/client-logos/sweet-ride-cafe.png";
import techbyteInnovationsLogo from "@/assets/client-logos/techbyte-innovations.png";
import verifixedLogo from "@/assets/client-logos/verifixed.png";
import waysLogo from "@/assets/client-logos/ways.png";
import xitLogo from "@/assets/client-logos/xit.png";

const clientLogos = [
  { src: angelopoulosLogo, alt: "Angelopoulos" },
  { src: chronosLogo, alt: "Chronos" },
  { src: clearSkyPowerLogo, alt: "ClearSky Power" },
  { src: dwsLogo, alt: "DWS" },
  { src: eliteDentalCareersLogo, alt: "Elite Dental Careers" },
  { src: enfixoLogo, alt: "Enfixo" },
  { src: grantsBakeryLogo, alt: "Grants Bakery" },
  { src: hayyakLogo, alt: "Hayyak" },
  { src: jnclmLogo, alt: "JNCLM" },
  { src: khyratnaLogo, alt: "Khyratna" },
  { src: klsLogo, alt: "KLS" },
  { src: notaryLogo, alt: "Notary" },
  { src: nrgLogo, alt: "NRG" },
  { src: nrgAiLogo, alt: "NRG AI" },
  { src: nugalValleySchoolLogo, alt: "Nugal Valley School" },
  { src: pestIqLogo, alt: "Pest IQ" },
  { src: pureWaterLogo, alt: "Pure Water" },
  { src: sweetRideCafeLogo, alt: "Sweet Ride Cafe" },
  { src: techbyteInnovationsLogo, alt: "Techbyte Innovations" },
  { src: verifixedLogo, alt: "Verifixed" },
  { src: waysLogo, alt: "Ways" },
  { src: xitLogo, alt: "XIT" },
];

const LogoSet = () => (
  <div className="client-logo-marquee__set" aria-hidden="true">
    {clientLogos.map((logo) => (
      <div key={logo.alt} className="client-logo-marquee__logo">
        <img src={logo.src} alt="" className="client-logo-marquee__image" />
      </div>
    ))}
  </div>
);

const ClientLogoMarquee = () => (
  <section className="client-logo-marquee" aria-label="Our clients">
    <div className="client-logo-marquee__track">
      <LogoSet />
      <LogoSet />
    </div>
  </section>
);

export default ClientLogoMarquee;
