import { getAllPosts, type PostSummary } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "লোকসংগীত | আঙন",
};

interface Subsection {
  type: string;
  titleBn: string;
  title: string;
  descriptionBn: string;
}

const SUBSECTIONS: Subsection[] = [
  {
    type: "bangla-folk",
    titleBn: "বাংলা লোকগান",
    title: "Bangla Folk — Lyrics & Sargam",
    descriptionBn: "লালন, শাহ আবদুল করিমসহ বাংলার লোকগান আর তার কথা।",
  },
  {
    type: "learning",
    titleBn: "শেখার বিভাগ",
    title: "Learning Section — Dotara & Tabla",
    descriptionBn: "দোতারা ও তবলার প্রাথমিক পাঠ, একদম শুরু থেকে।",
  },
  {
    type: "artist-history",
    titleBn: "শিল্পীদের ইতিহাস",
    title: "Artist History",
    descriptionBn: "লোকসংগীতের কিংবদন্তি শিল্পীদের জীবন ও উত্তরাধিকার।",
  },
];

export default function MusicPage() {
  const posts = getAllPosts("music");

  const grouped = SUBSECTIONS.map((section) => ({
    ...section,
    posts: posts.filter((post) => post.type === section.type),
  }));

  // Posts without a matching "type" still show up here so nothing gets lost.
  const untagged = posts.filter(
    (post) => !SUBSECTIONS.some((s) => s.type === post.type)
  );

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-14">
        <h1 className="font-bangla text-3xl font-bold text-stone-900">
          সংগীত ও বাদ্যযন্ত্র
        </h1>
        <p className="mt-1 text-sm font-medium text-stone-500">
          Music &amp; Instruments
        </p>
        <p className="font-bangla mt-2 text-stone-600">
          লালন, শাহ আবদুল করিম, বাদ্যযন্ত্র আর প্রজন্মের কণ্ঠে বয়ে চলা কথা।
        </p>
      </header>

      <div className="space-y-16">
        {grouped.map((section) => (
          <section key={section.type}>
            <div className="mb-6 border-b border-stone-200 pb-3">
              <h2 className="font-bangla text-2xl font-semibold text-stone-900">
                {section.titleBn}
              </h2>
              <p className="text-sm font-medium text-stone-500">
                {section.title}
              </p>
              <p className="font-bangla mt-1 text-sm text-stone-600">
                {section.descriptionBn}
              </p>
            </div>

            {section.posts.length === 0 ? (
              <p className="font-bangla text-sm text-stone-400">
                এখনো কোনো লেখা যোগ হয়নি — শীঘ্রই আসছে।
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.posts.map((post: PostSummary) => (
                  <PostCard key={post.slug} post={post} category="music" />
                ))}
              </div>
            )}
          </section>
        ))}

        {untagged.length > 0 && (
          <section>
            <div className="mb-6 border-b border-stone-200 pb-3">
              <h2 className="font-bangla text-2xl font-semibold text-stone-900">
                অন্যান্য
              </h2>
              <p className="text-sm font-medium text-stone-500">Other</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {untagged.map((post) => (
                <PostCard key={post.slug} post={post} category="music" />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
