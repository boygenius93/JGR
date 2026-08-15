import { Button } from "@/components/Button";

export function RecruitingAssessmentCTA({
  headline,
  copy,
  primaryLabel,
  primaryHref,
  primaryTrackId,
  secondaryLabel,
  secondaryHref,
  secondaryTrackId,
}: {
  headline: string;
  copy: string;
  primaryLabel: string;
  primaryHref: string;
  primaryTrackId?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  secondaryTrackId?: string;
}) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-8 text-center sm:p-12">
      <h3 className="text-2xl leading-snug text-ink sm:text-3xl">{headline}</h3>
      <p className="mx-auto mt-4 max-w-xl text-stone-600">{copy}</p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button href={primaryHref} size="lg" trackId={primaryTrackId}>
          {primaryLabel}
        </Button>
        {secondaryLabel && secondaryHref ? (
          <Button href={secondaryHref} variant="secondary" size="lg" trackId={secondaryTrackId}>
            {secondaryLabel}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
