import { MARQUEE_ITEMS } from "@/data/site";

export function Marquee() {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {MARQUEE_ITEMS.map((item) => (
        <li key={item} className="flex items-center">
          <span className="px-6 text-label font-bold uppercase">{item}</span>
          <span aria-hidden className="text-label font-bold">
            *
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-hidden border-b-2 border-ink bg-lime py-2">
      <p className="sr-only">Stack: {MARQUEE_ITEMS.join(", ")}</p>
      <div className="flex w-max animate-marquee motion-reduce:animate-none" aria-hidden>
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
