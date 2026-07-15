import { Compass, Music4, UtensilsCrossed } from "lucide-react";
import Hero from "@/components/Hero";
import CategoryCard from "@/components/CategoryCard";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="font-bangla text-3xl font-bold text-stone-900">
            ঘুরে দেখার তিনটি পথ
          </h2>
          <p className="mt-1 text-sm font-medium text-stone-500">
            Three Ways to Explore
          </p>
          <p className="font-bangla mt-3 text-stone-600">
            আঙনের প্রতিটি কোণ গড়ে উঠেছে জীবন্ত ঐতিহ্যের একেকটি অংশ ঘিরে।
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CategoryCard
            href="/travel"
            titleBn="ঐতিহ্য ও ভ্রমণ"
            title="Heritage & Travel"
            descriptionBn="ঐতিহাসিক স্থান, লুকানো পথ আর অঞ্চল জুড়ে ভ্রমণকাহিনি।"
            description="Historical spots, hidden trails, and travel stories from across the region."
            icon={Compass}
          />
          <CategoryCard
            href="/music"
            titleBn="লোকসংগীত"
            title="Folk Music"
            descriptionBn="লালন, শাহ আবদুল করিম, বাদ্যযন্ত্র আর প্রজন্মের কণ্ঠে বয়ে চলা কথা।"
            description="Lalon, Shah Abdul Karim, instruments, and the lyrics that carry generations."
            icon={Music4}
          />
          <CategoryCard
            href="/food"
            titleBn="চিরায়ত জীবনধারা"
            title="Traditional Lifestyle"
            descriptionBn="পুরনো দিনের জিনিসপত্র আর প্রজন্ম থেকে প্রজন্মে চলে আসা রেসিপি।"
            description="Vintage goods and traditional recipes passed down through households."
            icon={UtensilsCrossed}
          />
        </div>
      </section>
    </main>
  );
}
