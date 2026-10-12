import angelopoulosLogo from "@/assets/client-logos/angelopoulos.png";
import brothersConsultantsLogo from "@/assets/client-logos/brothers-consultants.png";
import chronosLogo from "@/assets/client-logos/chronos.png";
import clearSkyPowerLogo from "@/assets/client-logos/clearshky-power.png";
import cytrusLogicLogo from "@/assets/client-logos/cytrus-logic.jpg.jpeg";
import dwsLogo from "@/assets/client-logos/DWS.webp";
import eliteDentalCareersLogo from "@/assets/client-logos/elite-dental-careers.jpeg";
import enfixoLogo from "@/assets/client-logos/enfixo.png";
import grantsBakeryLogo from "@/assets/client-logos/grants-bakery.png";
import hayyakLogo from "@/assets/client-logos/hayyak.png";
import hrAssessorAuditLogo from "@/assets/client-logos/hr-assessor-audit.png";
import jnclmLogo from "@/assets/client-logos/jnclm.png";
import khyratnaLogo from "@/assets/client-logos/khyratna.png";
import klsLogo from "@/assets/client-logos/kls.png";
import notaryLogo from "@/assets/client-logos/notary.png";
import nrgLogo from "@/assets/client-logos/NRG.jpeg";
import nrgAiLogo from "@/assets/client-logos/NRG-AI.png";
import nugalValleySchoolLogo from "@/assets/client-logos/nugal-valley-school.png";
import parxLogo from "@/assets/client-logos/parx.png";
import pestIqLogo from "@/assets/client-logos/pestiqlgo.png";
import pureWaterLogo from "@/assets/client-logos/pure-water.png";
import sweetRideCafeLogo from "@/assets/client-logos/sweet-ride-cafe.png";
import techbyteInnovationsLogo from "@/assets/client-logos/techbyte-innovations.png";
import verifixedLogo from "@/assets/client-logos/verifixed.png";
import waysLogo from "@/assets/client-logos/ways.png";
import xitLogo from "@/assets/client-logos/xit.png";
import nataMartLogo from "@/assets/client-logos/nata-mart.png";
import studyAlQuranLogo from "@/assets/client-logos/study-al-quran.png";
import texasMedicalLogo from "@/assets/client-logos/texas-medical.png";
import ismMartLogo from "@/assets/client-logos/ism-mart.png";
import mate10Logo from "@/assets/client-logos/mate-10.png";
import profHelpLogo from "@/assets/client-logos/profhelp.png";
import interactiveBrokersLogo from "@/assets/client-logos/interactive-brokers.png";
import idealzLogo from "@/assets/client-logos/idealz.png";

const clientLogos = [
  { src: angelopoulosLogo, alt: "Angelopoulos" },
  { src: ismMartLogo, alt: "ISM Mart" },
  { src: brothersConsultantsLogo, alt: "Brothers Consultants" },
  { src: studyAlQuranLogo, alt: "Study Al Quran" },
  { src: chronosLogo, alt: "Chronos" },
  { src: nataMartLogo, alt: "Nata Mart" },
  { src: clearSkyPowerLogo, alt: "ClearSky Power" },
  { src: texasMedicalLogo, alt: "Texas Medical" },
  { src: cytrusLogicLogo, alt: "Cytrus Logic" },
  { src: eliteDentalCareersLogo, alt: "Elite Dental Careers" },
  { src: dwsLogo, alt: "DWS" },
  { src: grantsBakeryLogo, alt: "Grants Bakery" },
  { src: enfixoLogo, alt: "Enfixo" },
  { src: hayyakLogo, alt: "Hayyak" },
  { src: hrAssessorAuditLogo, alt: "HR Assessor & Audit" },
  { src: jnclmLogo, alt: "JNCLM" },
  { src: khyratnaLogo, alt: "Khyratna" },
  { src: notaryLogo, alt: "Notary" },
  { src: nrgLogo, alt: "NRG" },
  { src: nrgAiLogo, alt: "NRG AI" },
  { src: klsLogo, alt: "KLS" },
  { src: nugalValleySchoolLogo, alt: "Nugal Valley School" },
  { src: parxLogo, alt: "Parx Industries International" },
  { src: pestIqLogo, alt: "Pest IQ" },
  { src: pureWaterLogo, alt: "Pure Water" },
  { src: sweetRideCafeLogo, alt: "Sweet Ride Cafe" },
  { src: techbyteInnovationsLogo, alt: "Techbyte Innovations" },
  { src: verifixedLogo, alt: "Verifixed" },
  { src: waysLogo, alt: "Ways" },
  { src: xitLogo, alt: "XIT" },
  { src: mate10Logo, alt: "Mate 10" },
  { src: profHelpLogo, alt: "Prof Help" },
  { src: interactiveBrokersLogo, alt: "Interactive Brokers" },
  { src: idealzLogo, alt: "Idealz" },
];

const LogoSet = ({ duplicate = false }: { duplicate?: boolean }) => (
  <div className={`client-logo-marquee__set${duplicate ? " client-logo-marquee__set--duplicate" : ""}`} aria-hidden={duplicate} role={duplicate ? undefined : "list"}>
    {clientLogos.map((logo) => (
      <div key={logo.alt} className="client-logo-marquee__logo" role={duplicate ? undefined : "listitem"}>
        <img src={logo.src} alt={duplicate ? "" : logo.alt} className="client-logo-marquee__image" />
      </div>
    ))}
  </div>
);

const ClientLogoMarquee = () => (
  <section className="client-logo-marquee" aria-label="Our clients">
    <div className="client-logo-marquee__track">
      <LogoSet />
      <LogoSet duplicate />
    </div>
  </section>
);

export default ClientLogoMarquee;
