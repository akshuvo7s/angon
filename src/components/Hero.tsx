export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-950 py-24 text-center text-white sm:py-32">
      {/* subtle background texture */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(217,119,6,0.25),transparent_60%)]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <span className="mb-4 inline-block rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm font-medium text-amber-400">
          আঙন · Angon
        </span>
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          South Asian Heritage &amp; Culture, Preserved
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-stone-300">
          Explore the destinations, the music, and the flavors that carry the
          soul of South Asia — one story at a time.
        </p>
      </div>
    </section>
  );
}
