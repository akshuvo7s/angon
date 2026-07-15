import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "চিরায়ত জীবনধারা | আঙন",
};

export default function FoodPage() {
  const posts = getAllPosts("food");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <h1 className="font-bangla text-3xl font-bold text-stone-900">
          চিরায়ত জীবনধারা
        </h1>
        <p className="mt-1 text-sm font-medium text-stone-500">
          Traditional Lifestyle
        </p>
        <p className="font-bangla mt-2 text-stone-600">
          পুরনো দিনের জিনিসপত্র আর প্রজন্ম থেকে প্রজন্মে চলে আসা রেসিপি।
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="font-bangla text-stone-500">
          এখনো কোনো লেখা যোগ হয়নি — শীঘ্রই আসছে।
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} category="food" />
          ))}
        </div>
      )}
    </main>
  );
}
