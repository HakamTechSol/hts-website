import { Globe2, Monitor } from "lucide-react";

export type ProjectPlatform = "appStore" | "googlePlay" | "webPortal" | "desktop";

const AppleIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 384 512" aria-hidden="true" className={className} fill="currentColor">
    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 76.1-17.9 32.1 0 48.5 17.9 76.7 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.8-31-62.3-89.9-62.3-91.9zM262.1 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
  </svg>
);

const GooglePlayIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 512 512" aria-hidden="true" className={className}>
    <path fill="#00a0ff" d="M49 38.5c-6.4 6.8-10 16.8-10 29.5v376c0 12.7 3.6 22.7 10 29.5L276.2 256 49 38.5z" />
    <path fill="#ff3a44" d="m302.1 281 75.3-75L276.2 109 49 38.5 302.1 281z" />
    <path fill="#ffe000" d="m49 473.5 227.2-217.5 101.2 97-75.3 75L49 473.5z" />
    <path fill="#00d084" d="m463.9 231.4-86.5-50-75.3 75 75.3 75 86.7-50.1c29.5-17 29.5-32.9-.2-49.9z" />
  </svg>
);

const platformDetails: Record<ProjectPlatform, { label: string; className: string }> = {
  appStore: { label: "App Store", className: "bg-slate-900 text-white" },
  googlePlay: { label: "Google Play", className: "bg-white text-slate-900 border border-slate-200" },
  webPortal: { label: "Web Portal", className: "bg-[#0f6cbd] text-white" },
  desktop: { label: "Desktop", className: "bg-[#0f6cbd] text-white" },
};

interface PlatformBadgesProps {
  platforms: ProjectPlatform[];
  size?: "compact" | "default";
}

export const PlatformBadges = ({ platforms, size = "default" }: PlatformBadgesProps) => {
  const sizeClasses = size === "compact"
    ? "gap-1 px-2.5 py-1 rounded-lg text-[11px]"
    : "gap-2 px-4 py-2 rounded-xl text-xs shadow-md";
  const iconClasses = size === "compact" ? "h-3.5 w-3.5" : "h-4 w-4";

  return (
    <div className={size === "compact" ? "flex flex-wrap gap-1.5" : "flex flex-wrap items-center gap-3"}>
      {platforms.map((platform) => {
        const detail = platformDetails[platform];
        return (
          <span key={platform} className={`inline-flex items-center font-bold ${sizeClasses} ${detail.className}`}>
            {platform === "appStore" && <AppleIcon className={iconClasses} />}
            {platform === "googlePlay" && <GooglePlayIcon className={iconClasses} />}
            {platform === "webPortal" && <Globe2 className={iconClasses} aria-hidden="true" />}
            {platform === "desktop" && <Monitor className={iconClasses} aria-hidden="true" />}
            <span>{detail.label}</span>
          </span>
        );
      })}
    </div>
  );
};
