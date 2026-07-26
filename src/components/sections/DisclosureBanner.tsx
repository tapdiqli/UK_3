import { LockIcon } from "@/components/ui/Icons";

export function DisclosureBanner() {
  return (
    <div className="container-page">
      <div className="flex items-start gap-3 rounded-xl border border-white/8 bg-ink-800/50 px-3 py-2.5 text-xs text-white/55">
        <LockIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-ruby-light" />
        <p>
          <span className="font-semibold text-white/80">Advertising disclosure.</span>{" "}
          BestBritCasinoList is free to use. We may earn a commission if you sign up with an operator
          through our links. This never affects our independent ratings, which are based only on our
          testing methodology. All offers are for new customers, 18+, and subject to the operator&apos;s
          terms.
        </p>
      </div>
    </div>
  );
}
