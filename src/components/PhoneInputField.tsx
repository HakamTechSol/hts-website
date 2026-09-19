import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Country data: name, ISO2, dial code, flag emoji                    */
/* ------------------------------------------------------------------ */
export interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  flag: string;
}

export const COUNTRIES: Country[] = [
  { name: "Afghanistan", iso2: "AF", dialCode: "+93", flag: "🇦🇫" },
  { name: "Albania", iso2: "AL", dialCode: "+355", flag: "🇦🇱" },
  { name: "Algeria", iso2: "DZ", dialCode: "+213", flag: "🇩🇿" },
  { name: "Andorra", iso2: "AD", dialCode: "+376", flag: "🇦🇩" },
  { name: "Angola", iso2: "AO", dialCode: "+244", flag: "🇦🇴" },
  { name: "Argentina", iso2: "AR", dialCode: "+54", flag: "🇦🇷" },
  { name: "Armenia", iso2: "AM", dialCode: "+374", flag: "🇦🇲" },
  { name: "Australia", iso2: "AU", dialCode: "+61", flag: "🇦🇺" },
  { name: "Austria", iso2: "AT", dialCode: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", iso2: "AZ", dialCode: "+994", flag: "🇦🇿" },
  { name: "Bahrain", iso2: "BH", dialCode: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", iso2: "BD", dialCode: "+880", flag: "🇧🇩" },
  { name: "Belarus", iso2: "BY", dialCode: "+375", flag: "🇧🇾" },
  { name: "Belgium", iso2: "BE", dialCode: "+32", flag: "🇧🇪" },
  { name: "Bolivia", iso2: "BO", dialCode: "+591", flag: "🇧🇴" },
  { name: "Bosnia and Herzegovina", iso2: "BA", dialCode: "+387", flag: "🇧🇦" },
  { name: "Brazil", iso2: "BR", dialCode: "+55", flag: "🇧🇷" },
  { name: "Brunei", iso2: "BN", dialCode: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", iso2: "BG", dialCode: "+359", flag: "🇧🇬" },
  { name: "Cambodia", iso2: "KH", dialCode: "+855", flag: "🇰🇭" },
  { name: "Cameroon", iso2: "CM", dialCode: "+237", flag: "🇨🇲" },
  { name: "Canada", iso2: "CA", dialCode: "+1", flag: "🇨🇦" },
  { name: "Chile", iso2: "CL", dialCode: "+56", flag: "🇨🇱" },
  { name: "China", iso2: "CN", dialCode: "+86", flag: "🇨🇳" },
  { name: "Colombia", iso2: "CO", dialCode: "+57", flag: "🇨🇴" },
  { name: "Costa Rica", iso2: "CR", dialCode: "+506", flag: "🇨🇷" },
  { name: "Croatia", iso2: "HR", dialCode: "+385", flag: "🇭🇷" },
  { name: "Cuba", iso2: "CU", dialCode: "+53", flag: "🇨🇺" },
  { name: "Cyprus", iso2: "CY", dialCode: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", iso2: "CZ", dialCode: "+420", flag: "🇨🇿" },
  { name: "Denmark", iso2: "DK", dialCode: "+45", flag: "🇩🇰" },
  { name: "Dominican Republic", iso2: "DO", dialCode: "+1-809", flag: "🇩🇴" },
  { name: "Ecuador", iso2: "EC", dialCode: "+593", flag: "🇪🇨" },
  { name: "Egypt", iso2: "EG", dialCode: "+20", flag: "🇪🇬" },
  { name: "El Salvador", iso2: "SV", dialCode: "+503", flag: "🇸🇻" },
  { name: "Estonia", iso2: "EE", dialCode: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", iso2: "ET", dialCode: "+251", flag: "🇪🇹" },
  { name: "Finland", iso2: "FI", dialCode: "+358", flag: "🇫🇮" },
  { name: "France", iso2: "FR", dialCode: "+33", flag: "🇫🇷" },
  { name: "Georgia", iso2: "GE", dialCode: "+995", flag: "🇬🇪" },
  { name: "Germany", iso2: "DE", dialCode: "+49", flag: "🇩🇪" },
  { name: "Ghana", iso2: "GH", dialCode: "+233", flag: "🇬🇭" },
  { name: "Greece", iso2: "GR", dialCode: "+30", flag: "🇬🇷" },
  { name: "Guatemala", iso2: "GT", dialCode: "+502", flag: "🇬🇹" },
  { name: "Honduras", iso2: "HN", dialCode: "+504", flag: "🇭🇳" },
  { name: "Hong Kong", iso2: "HK", dialCode: "+852", flag: "🇭🇰" },
  { name: "Hungary", iso2: "HU", dialCode: "+36", flag: "🇭🇺" },
  { name: "Iceland", iso2: "IS", dialCode: "+354", flag: "🇮🇸" },
  { name: "India", iso2: "IN", dialCode: "+91", flag: "🇮🇳" },
  { name: "Indonesia", iso2: "ID", dialCode: "+62", flag: "🇮🇩" },
  { name: "Iran", iso2: "IR", dialCode: "+98", flag: "🇮🇷" },
  { name: "Iraq", iso2: "IQ", dialCode: "+964", flag: "🇮🇶" },
  { name: "Ireland", iso2: "IE", dialCode: "+353", flag: "🇮🇪" },
  { name: "Israel", iso2: "IL", dialCode: "+972", flag: "🇮🇱" },
  { name: "Italy", iso2: "IT", dialCode: "+39", flag: "🇮🇹" },
  { name: "Jamaica", iso2: "JM", dialCode: "+1-876", flag: "🇯🇲" },
  { name: "Japan", iso2: "JP", dialCode: "+81", flag: "🇯🇵" },
  { name: "Jordan", iso2: "JO", dialCode: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", iso2: "KZ", dialCode: "+7", flag: "🇰🇿" },
  { name: "Kenya", iso2: "KE", dialCode: "+254", flag: "🇰🇪" },
  { name: "Kuwait", iso2: "KW", dialCode: "+965", flag: "🇰🇼" },
  { name: "Kyrgyzstan", iso2: "KG", dialCode: "+996", flag: "🇰🇬" },
  { name: "Laos", iso2: "LA", dialCode: "+856", flag: "🇱🇦" },
  { name: "Latvia", iso2: "LV", dialCode: "+371", flag: "🇱🇻" },
  { name: "Lebanon", iso2: "LB", dialCode: "+961", flag: "🇱🇧" },
  { name: "Libya", iso2: "LY", dialCode: "+218", flag: "🇱🇾" },
  { name: "Lithuania", iso2: "LT", dialCode: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", iso2: "LU", dialCode: "+352", flag: "🇱🇺" },
  { name: "Malaysia", iso2: "MY", dialCode: "+60", flag: "🇲🇾" },
  { name: "Maldives", iso2: "MV", dialCode: "+960", flag: "🇲🇻" },
  { name: "Mexico", iso2: "MX", dialCode: "+52", flag: "🇲🇽" },
  { name: "Moldova", iso2: "MD", dialCode: "+373", flag: "🇲🇩" },
  { name: "Mongolia", iso2: "MN", dialCode: "+976", flag: "🇲🇳" },
  { name: "Morocco", iso2: "MA", dialCode: "+212", flag: "🇲🇦" },
  { name: "Mozambique", iso2: "MZ", dialCode: "+258", flag: "🇲🇿" },
  { name: "Myanmar", iso2: "MM", dialCode: "+95", flag: "🇲🇲" },
  { name: "Nepal", iso2: "NP", dialCode: "+977", flag: "🇳🇵" },
  { name: "Netherlands", iso2: "NL", dialCode: "+31", flag: "🇳🇱" },
  { name: "New Zealand", iso2: "NZ", dialCode: "+64", flag: "🇳🇿" },
  { name: "Nicaragua", iso2: "NI", dialCode: "+505", flag: "🇳🇮" },
  { name: "Nigeria", iso2: "NG", dialCode: "+234", flag: "🇳🇬" },
  { name: "North Korea", iso2: "KP", dialCode: "+850", flag: "🇰🇵" },
  { name: "Norway", iso2: "NO", dialCode: "+47", flag: "🇳🇴" },
  { name: "Oman", iso2: "OM", dialCode: "+968", flag: "🇴🇲" },
  { name: "Pakistan", iso2: "PK", dialCode: "+92", flag: "🇵🇰" },
  { name: "Palestine", iso2: "PS", dialCode: "+970", flag: "🇵🇸" },
  { name: "Panama", iso2: "PA", dialCode: "+507", flag: "🇵🇦" },
  { name: "Paraguay", iso2: "PY", dialCode: "+595", flag: "🇵🇾" },
  { name: "Peru", iso2: "PE", dialCode: "+51", flag: "🇵🇪" },
  { name: "Philippines", iso2: "PH", dialCode: "+63", flag: "🇵🇭" },
  { name: "Poland", iso2: "PL", dialCode: "+48", flag: "🇵🇱" },
  { name: "Portugal", iso2: "PT", dialCode: "+351", flag: "🇵🇹" },
  { name: "Qatar", iso2: "QA", dialCode: "+974", flag: "🇶🇦" },
  { name: "Romania", iso2: "RO", dialCode: "+40", flag: "🇷🇴" },
  { name: "Russia", iso2: "RU", dialCode: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", iso2: "SA", dialCode: "+966", flag: "🇸🇦" },
  { name: "Senegal", iso2: "SN", dialCode: "+221", flag: "🇸🇳" },
  { name: "Serbia", iso2: "RS", dialCode: "+381", flag: "🇷🇸" },
  { name: "Singapore", iso2: "SG", dialCode: "+65", flag: "🇸🇬" },
  { name: "Slovakia", iso2: "SK", dialCode: "+421", flag: "🇸🇰" },
  { name: "Slovenia", iso2: "SI", dialCode: "+386", flag: "🇸🇮" },
  { name: "Somalia", iso2: "SO", dialCode: "+252", flag: "🇸🇴" },
  { name: "South Africa", iso2: "ZA", dialCode: "+27", flag: "🇿🇦" },
  { name: "South Korea", iso2: "KR", dialCode: "+82", flag: "🇰🇷" },
  { name: "Spain", iso2: "ES", dialCode: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", iso2: "LK", dialCode: "+94", flag: "🇱🇰" },
  { name: "Sudan", iso2: "SD", dialCode: "+249", flag: "🇸🇩" },
  { name: "Sweden", iso2: "SE", dialCode: "+46", flag: "🇸🇪" },
  { name: "Switzerland", iso2: "CH", dialCode: "+41", flag: "🇨🇭" },
  { name: "Syria", iso2: "SY", dialCode: "+963", flag: "🇸🇾" },
  { name: "Taiwan", iso2: "TW", dialCode: "+886", flag: "🇹🇼" },
  { name: "Tajikistan", iso2: "TJ", dialCode: "+992", flag: "🇹🇯" },
  { name: "Tanzania", iso2: "TZ", dialCode: "+255", flag: "🇹🇿" },
  { name: "Thailand", iso2: "TH", dialCode: "+66", flag: "🇹🇭" },
  { name: "Tunisia", iso2: "TN", dialCode: "+216", flag: "🇹🇳" },
  { name: "Turkey", iso2: "TR", dialCode: "+90", flag: "🇹🇷" },
  { name: "Turkmenistan", iso2: "TM", dialCode: "+993", flag: "🇹🇲" },
  { name: "Uganda", iso2: "UG", dialCode: "+256", flag: "🇺🇬" },
  { name: "Ukraine", iso2: "UA", dialCode: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", iso2: "AE", dialCode: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", iso2: "GB", dialCode: "+44", flag: "🇬🇧" },
  { name: "United States", iso2: "US", dialCode: "+1", flag: "🇺🇸" },
  { name: "Uruguay", iso2: "UY", dialCode: "+598", flag: "🇺🇾" },
  { name: "Uzbekistan", iso2: "UZ", dialCode: "+998", flag: "🇺🇿" },
  { name: "Venezuela", iso2: "VE", dialCode: "+58", flag: "🇻🇪" },
  { name: "Vietnam", iso2: "VN", dialCode: "+84", flag: "🇻🇳" },
  { name: "Yemen", iso2: "YE", dialCode: "+967", flag: "🇾🇪" },
  { name: "Zambia", iso2: "ZM", dialCode: "+260", flag: "🇿🇲" },
  { name: "Zimbabwe", iso2: "ZW", dialCode: "+263", flag: "🇿🇼" },
];

/* ------------------------------------------------------------------ */
/*  Per-country digit length rules (subscriber number digits only)     */
/* ------------------------------------------------------------------ */
const PHONE_RULES: Record<string, { min: number; max: number }> = {
  AF:{min:9,max:9}, AL:{min:9,max:9}, DZ:{min:9,max:9}, AD:{min:6,max:9},
  AO:{min:9,max:9}, AR:{min:10,max:11}, AM:{min:8,max:8}, AU:{min:9,max:9},
  AT:{min:7,max:13}, AZ:{min:9,max:9}, BH:{min:8,max:8}, BD:{min:10,max:10},
  BY:{min:9,max:11}, BE:{min:8,max:9}, BO:{min:8,max:8}, BA:{min:8,max:8},
  BR:{min:10,max:11}, BN:{min:7,max:7}, BG:{min:7,max:9}, KH:{min:8,max:9},
  CM:{min:9,max:9}, CA:{min:10,max:10}, CL:{min:9,max:9}, CN:{min:11,max:11},
  CO:{min:10,max:10}, CR:{min:8,max:8}, HR:{min:8,max:9}, CU:{min:8,max:8},
  CY:{min:8,max:8}, CZ:{min:9,max:9}, DK:{min:8,max:8}, DO:{min:10,max:10},
  EC:{min:9,max:9}, EG:{min:10,max:10}, SV:{min:8,max:8}, EE:{min:7,max:8},
  ET:{min:9,max:9}, FI:{min:7,max:10}, FR:{min:9,max:9}, GE:{min:9,max:9},
  DE:{min:10,max:11}, GH:{min:9,max:9}, GR:{min:10,max:10}, GT:{min:8,max:8},
  HN:{min:8,max:8}, HK:{min:8,max:8}, HU:{min:9,max:9}, IS:{min:7,max:7},
  IN:{min:10,max:10}, ID:{min:9,max:12}, IR:{min:10,max:10}, IQ:{min:10,max:10},
  IE:{min:7,max:9}, IL:{min:9,max:9}, IT:{min:9,max:10}, JM:{min:10,max:10},
  JP:{min:10,max:11}, JO:{min:9,max:9}, KZ:{min:10,max:10}, KE:{min:9,max:10},
  KW:{min:8,max:8}, KG:{min:9,max:9}, LA:{min:8,max:9}, LV:{min:8,max:8},
  LB:{min:7,max:8}, LY:{min:9,max:9}, LT:{min:8,max:8}, LU:{min:6,max:9},
  MY:{min:9,max:10}, MV:{min:7,max:7}, MX:{min:10,max:10}, MD:{min:8,max:8},
  MN:{min:8,max:8}, MA:{min:9,max:9}, MZ:{min:9,max:9}, MM:{min:8,max:10},
  NP:{min:10,max:10}, NL:{min:9,max:9}, NZ:{min:8,max:10}, NI:{min:8,max:8},
  NG:{min:10,max:10}, KP:{min:9,max:10}, NO:{min:8,max:8}, OM:{min:8,max:8},
  PK:{min:10,max:10}, PS:{min:9,max:9}, PA:{min:8,max:8}, PY:{min:9,max:9},
  PE:{min:9,max:9}, PH:{min:10,max:10}, PL:{min:9,max:9}, PT:{min:9,max:9},
  QA:{min:8,max:8}, RO:{min:10,max:10}, RU:{min:10,max:10}, SA:{min:9,max:9},
  SN:{min:9,max:9}, RS:{min:8,max:9}, SG:{min:8,max:8}, SK:{min:9,max:9},
  SI:{min:8,max:8}, SO:{min:8,max:9}, ZA:{min:9,max:9}, KR:{min:10,max:11},
  ES:{min:9,max:9}, LK:{min:9,max:9}, SD:{min:9,max:9}, SE:{min:7,max:10},
  CH:{min:9,max:9}, SY:{min:9,max:9}, TW:{min:9,max:10}, TJ:{min:9,max:9},
  TZ:{min:9,max:9}, TH:{min:9,max:9}, TN:{min:8,max:8}, TR:{min:10,max:10},
  TM:{min:8,max:8}, UG:{min:9,max:9}, UA:{min:9,max:9}, AE:{min:9,max:9},
  GB:{min:10,max:10}, US:{min:10,max:10}, UY:{min:8,max:9}, UZ:{min:9,max:9},
  VE:{min:10,max:10}, VN:{min:9,max:10}, YE:{min:9,max:9}, ZM:{min:9,max:9},
  ZW:{min:9,max:9},
};

export function validatePhone(dialCode: string, number: string, iso2: string): string | null {
  const digits = number.replace(/\D/g, "");
  if (digits.length === 0) return null; // optional — no error if empty
  const rule = PHONE_RULES[iso2] ?? { min: 6, max: 15 };
  if (digits.length < rule.min || digits.length > rule.max) {
    return `${dialCode} number must be ${
      rule.min === rule.max ? rule.min : `${rule.min}–${rule.max}`
    } digits`;
  }
  return null;
}

/* ------------------------------------------------------------------ */
/*  Component Props                                                     */
/* ------------------------------------------------------------------ */
interface PhoneInputFieldProps {
  /** Called with the full number e.g. "+92 3001234567" or "" */
  onChange: (fullNumber: string, isValid: boolean) => void;
  label?: string;
  required?: boolean;
  className?: string;
  /** "contact" = slate bg, rounded-2xl  |  "quote" = white bg, border, rounded-xl */
  variant?: "contact" | "quote";
}

/* ------------------------------------------------------------------ */
/*  PhoneInputField                                                     */
/* ------------------------------------------------------------------ */
export default function PhoneInputField({
  onChange,
  label = "Phone / WhatsApp",
  required = false,
  className = "",
  variant = "quote",
}: PhoneInputFieldProps) {
  const defaultCountry = COUNTRIES.find((c) => c.iso2 === "PK")!;
  const [selected, setSelected] = useState<Country>(defaultCountry);
  const [number, setNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = COUNTRIES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.dialCode.includes(search) ||
      c.iso2.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (open) setTimeout(() => searchRef.current?.focus(), 50);
  }, [open]);

  const notify = (c: Country, n: string) => {
    const err = validatePhone(c.dialCode, n, c.iso2);
    const full = n.trim() ? `${c.dialCode} ${n.trim()}` : "";
    onChange(full, err === null);
    return err;
  };

  const handleNumberChange = (val: string) => {
    const sanitized = val.replace(/[^\d\s\-()]/g, "");
    setNumber(sanitized);
    const err = notify(selected, sanitized);
    if (touched) setError(err);
  };

  const handleCountrySelect = (country: Country) => {
    setSelected(country);
    setOpen(false);
    setSearch("");
    const err = notify(country, number);
    if (touched) setError(err);
  };

  const handleBlur = () => {
    setTouched(true);
    setError(notify(selected, number));
  };

  const triggerBase =
    variant === "contact"
      ? "bg-slate-100/90 border-0 rounded-l-2xl"
      : "bg-white border border-slate-200 rounded-l-xl";

  const inputBase =
    variant === "contact"
      ? "bg-slate-100/90 border-0 rounded-r-2xl"
      : "bg-white border border-slate-200 border-l-0 rounded-r-xl";

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
          {label}
          {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
      )}

      <div className="flex relative" ref={dropdownRef}>
        {/* Country selector */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`flex items-center gap-1.5 px-3 py-3.5 shrink-0 ${triggerBase} text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all border-r border-slate-200/60`}
          aria-label="Select country code"
        >
          <span className="text-base leading-none">{selected.flag}</span>
          <span className="text-xs text-slate-600 hidden sm:inline">{selected.dialCode}</span>
          <ChevronDown
            size={13}
            className={`text-slate-400 transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>

        {/* Number input */}
        <input
          type="tel"
          required={required}
          placeholder="300 0000000"
          value={number}
          onChange={(e) => handleNumberChange(e.target.value)}
          onBlur={handleBlur}
          className={`flex-1 min-w-0 px-4 py-3.5 ${inputBase} text-slate-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#0f6cbd] transition-all`}
          aria-invalid={error ? "true" : "false"}
          aria-describedby="phone-error"
        />

        {/* Dropdown */}
        {open && (
          <div className="absolute top-full left-0 z-50 mt-1 w-72 bg-white border border-slate-200 rounded-2xl shadow-2xl shadow-slate-200/60 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2.5 border-b border-slate-100">
              <Search size={14} className="text-slate-400 shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search country or dial code…"
                className="flex-1 text-sm text-slate-800 outline-none placeholder:text-slate-400"
              />
            </div>
            <ul className="overflow-y-auto max-h-52 py-1">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-xs text-slate-400 text-center">No results</li>
              ) : (
                filtered.map((c) => (
                  <li key={c.iso2}>
                    <button
                      type="button"
                      onClick={() => handleCountrySelect(c)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-sky-50 transition-colors ${
                        selected.iso2 === c.iso2
                          ? "bg-sky-50 font-semibold text-[#0f6cbd]"
                          : "text-slate-700"
                      }`}
                    >
                      <span className="text-base">{c.flag}</span>
                      <span className="flex-1 truncate">{c.name}</span>
                      <span className="text-xs text-slate-400 shrink-0">{c.dialCode}</span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p id="phone-error" className="mt-1.5 text-xs text-red-500 font-medium">
          ⚠ {error}
        </p>
      )}
    </div>
  );
}
