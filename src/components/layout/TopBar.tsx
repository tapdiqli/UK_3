import { ShieldIcon } from "@/components/ui/Icons";

export function TopBar() {
  return (
    <div className="bg-ruby text-white">
      <div className="container-page flex items-center justify-center gap-2 py-1.5 text-center text-[11px] font-medium tracking-wide sm:text-xs">
        <ShieldIcon className="hidden h-3.5 w-3.5 sm:block" />
        <span>
          18+ only. Gambling can be addictive — please play responsibly. Free help at{" "}
          <a
            href="https://www.begambleaware.org"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-2"
          >
            BeGambleAware.org
          </a>
        </span>
      </div>
    </div>
  );
}
