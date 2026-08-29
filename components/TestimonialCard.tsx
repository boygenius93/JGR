import type { Testimonial } from "@/lib/testimonials-data";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-stone-200 bg-white p-7">
      <span className="text-4xl leading-none text-accent/40" aria-hidden="true">
        &ldquo;
      </span>
      <p className="mt-2 flex-1 text-stone-700 leading-relaxed">{testimonial.quote}</p>
      <div className="mt-6 border-t border-stone-100 pt-4">
        <p className="text-sm font-semibold text-ink">{testimonial.name}</p>
        <p className="text-sm text-stone-500">
          {testimonial.title}, {testimonial.company}
        </p>
      </div>
    </div>
  );
}
