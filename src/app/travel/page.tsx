import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "Heritage & Travel | Angon",
};

export default function TravelPage() {
  const posts = getAllPosts("travel");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-stone-900">
          Heritage &amp; Travel
        </h1>
        <p className="mt-2 text-stone-600">
          Historical spots and travel stories from across South Asia.
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="text-stone-500">No posts yet — check back soon.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} category="travel" />
          ))}
        </div>
      )}
    </main>
  );
}
