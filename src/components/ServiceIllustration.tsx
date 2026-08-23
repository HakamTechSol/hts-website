import React from "react";

type ServiceIllustrationType =
  | "mobile"
  | "software"
  | "web"
  | "cms"
  | "ai"
  | "design"
  | "marketing"
  | "cloud"
  | "team";

interface ServiceIllustrationProps {
  type: ServiceIllustrationType;
}

const Line = ({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#0f6cbd" strokeWidth="3" strokeLinecap="round" />
);

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({ type }) => {
  const shared = {
    fill: "none",
    stroke: "#0f6cbd",
    strokeWidth: 3,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const illustrations: Record<ServiceIllustrationType, React.ReactNode> = {
    mobile: <><rect x="48" y="12" width="36" height="72" rx="8" fill="#dff3ff" {...shared} /><rect x="55" y="22" width="22" height="36" rx="3" fill="#fff" stroke="#7dd3fc" strokeWidth="2" /><circle cx="66" cy="70" r="3" fill="#0f6cbd" /><rect x="76" y="25" width="31" height="56" rx="7" fill="#effaff" stroke="#38bdf8" strokeWidth="3" /><path d="M84 39h15M84 48h11M84 61h15" {...shared} /><circle cx="99" cy="31" r="3" fill="#38bdf8" /></>,
    software: <><rect x="30" y="18" width="80" height="51" rx="7" fill="#effaff" {...shared} /><path d="M39 31l8 7-8 7M57 47h13M76 31h22M76 39h15" {...shared} /><path d="M20 77h100" {...shared} /><path d="M54 69l-5 8h42l-5-8" fill="#dff3ff" {...shared} /><circle cx="102" cy="62" r="10" fill="#dff3ff" stroke="#38bdf8" strokeWidth="3" /><path d="M102 57v10M97 62h10" {...shared} /></>,
    web: <><rect x="25" y="16" width="91" height="62" rx="8" fill="#effaff" {...shared} /><path d="M25 31h91" {...shared} /><circle cx="35" cy="24" r="2" fill="#0f6cbd" /><circle cx="43" cy="24" r="2" fill="#38bdf8" /><path d="M37 42h33v25H37z" fill="#fff" stroke="#7dd3fc" strokeWidth="2" /><path d="M78 42h27M78 51h20M78 60h25" {...shared} /><circle cx="53" cy="55" r="8" fill="#dff3ff" stroke="#38bdf8" strokeWidth="2" /></>,
    cms: <><rect x="25" y="16" width="82" height="62" rx="8" fill="#effaff" {...shared} /><path d="M25 32h82M39 43h25M39 54h18M39 65h28" {...shared} /><rect x="75" y="42" width="20" height="23" rx="3" fill="#fff" stroke="#38bdf8" strokeWidth="2" /><circle cx="85" cy="53" r="4" fill="#dff3ff" stroke="#0f6cbd" strokeWidth="2" /><path d="M106 28l10-8M110 38h12" {...shared} /></>,
    ai: <><circle cx="67" cy="48" r="25" fill="#effaff" {...shared} /><circle cx="58" cy="41" r="4" fill="#38bdf8" /><circle cx="77" cy="38" r="4" fill="#38bdf8" /><circle cx="74" cy="58" r="4" fill="#0f6cbd" /><circle cx="56" cy="59" r="4" fill="#0f6cbd" /><Line x1={58} y1={41} x2={77} y2={38} /><Line x1={58} y1={41} x2={56} y2={59} /><Line x1={77} y1={38} x2={74} y2={58} /><Line x1={56} y1={59} x2={74} y2={58} /><circle cx="23" cy="33" r="6" fill="#dff3ff" stroke="#38bdf8" strokeWidth="2" /><circle cx="110" cy="31" r="6" fill="#dff3ff" stroke="#38bdf8" strokeWidth="2" /><circle cx="105" cy="70" r="6" fill="#dff3ff" stroke="#38bdf8" strokeWidth="2" /><Line x1={29} y1={35} x2={43} y2={41} /><Line x1={104} y1={34} x2={92} y2={41} /><Line x1={101} y1={67} x2={90} y2={58} /></>,
    design: <><rect x="29" y="16" width="70" height="63" rx="7" fill="#effaff" {...shared} /><rect x="39" y="28" width="22" height="20" rx="3" fill="#dff3ff" stroke="#38bdf8" strokeWidth="2" /><circle cx="78" cy="37" r="10" fill="#bfdbfe" /><path d="M70 59l18-20 8 8-18 19-11 3z" fill="#fff" {...shared} /><path d="M41 60h20M41 67h34" {...shared} /><circle cx="106" cy="68" r="10" fill="#dff3ff" stroke="#38bdf8" strokeWidth="3" /><circle cx="106" cy="68" r="3" fill="#0f6cbd" /></>,
    marketing: <><rect x="27" y="24" width="34" height="47" rx="6" fill="#effaff" {...shared} /><rect x="67" y="15" width="38" height="56" rx="6" fill="#dff3ff" stroke="#38bdf8" strokeWidth="3" /><path d="M35 43h18M35 51h12M75 30h22M75 39h16" {...shared} /><path d="M35 63l9-8 8 4M75 59l8-10 7 6 9-15" {...shared} /><path d="M100 38l-1 7-6-3" fill="#0f6cbd" /><circle cx="113" cy="25" r="9" fill="#fff" stroke="#0f6cbd" strokeWidth="3" /><path d="M109 25h8M113 21v8" {...shared} /></>,
    cloud: <><path d="M37 65h63a15 15 0 0 0 0-30 23 23 0 0 0-43-5 17 17 0 0 0-20 35z" fill="#effaff" {...shared} /><rect x="48" y="52" width="18" height="17" rx="3" fill="#fff" stroke="#38bdf8" strokeWidth="2" /><rect x="71" y="52" width="18" height="17" rx="3" fill="#fff" stroke="#38bdf8" strokeWidth="2" /><circle cx="54" cy="60" r="2" fill="#0f6cbd" /><circle cx="77" cy="60" r="2" fill="#0f6cbd" /><path d="M57 80v-7M80 80v-7M44 80h49" {...shared} /></>,
    team: <><circle cx="51" cy="32" r="10" fill="#bfdbfe" stroke="#0f6cbd" strokeWidth="3" /><circle cx="82" cy="28" r="10" fill="#dff3ff" stroke="#38bdf8" strokeWidth="3" /><circle cx="101" cy="49" r="8" fill="#bfdbfe" stroke="#0f6cbd" strokeWidth="3" /><path d="M35 72c1-15 29-15 31 0" fill="#effaff" {...shared} /><path d="M65 68c2-18 32-18 34 0" fill="#dff3ff" {...shared} /><path d="M90 73c1-11 20-11 22 0" fill="#effaff" {...shared} /><path d="M31 79h82" {...shared} /></>,
  };

  return <svg viewBox="0 0 132 96" role="img" aria-label="" className="h-full w-full max-w-[132px]" preserveAspectRatio="xMidYMid meet">{illustrations[type]}</svg>;
};

export type { ServiceIllustrationType };
