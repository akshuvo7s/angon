import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata = {
  title: "ঐতিহ্য ও ভ্রমণ | আঙন",
};

export default function TravelPage() {
  const posts = getAllPosts("travel");

  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <header className="mb-10">
        <h1 className="font-bangla text-3xl font-bold text-stone-900">
          ঐতিহ্য ও ভ্রমণ
        </h1>
        <p className="mt-1 text-sm font-medium text-stone-500">
          Heritage &amp; Travel
        </p>
        <p className="font-bangla mt-2 text-stone-600">
          ঐতিহাসিক স্থান আর দক্ষিণ এশিয়া জুড়ে ভ্রমণকাহিনি।
        </p>
      </header>

      {posts.length === 0 ? (
        <p className="font-bangla text-stone-500">
          এখনো কোনো লেখা যোগ হয়নি — শীঘ্রই আসছে।
        </p>
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
