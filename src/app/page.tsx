import { Compass, Music4, UtensilsCrossed } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-stone-900">
            Three Ways to Explore
          </h2>
          <p className="mt-3 text-stone-600">
            Every corner of Angon is built around a piece of living heritage.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            href="/travel"
            title="Heritage & Travel"
            description="Historical spots, hidden trails, and travel stories from across the region."
            icon={Compass}
          />
          <CategoryCard
            href="/music"
            title="Folk Music"
            description="Lalon, Shah Abdul Karim, instruments, and the lyrics that carry generations."
            icon={Music4}
          />
          <CategoryCard
            href="/food"
            title="Traditional Lifestyle"
            description="Vintage goods and traditional recipes passed down through households."
            icon={UtensilsCrossed}
          />
        </div>
      </section>
    </main>
  );
}
