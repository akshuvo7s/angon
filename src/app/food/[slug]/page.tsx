import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getStaticParamsForCategory } from "@/lib/content";
import CommunityPlaceholder from "@/components/CommunityPlaceholder";

const CATEGORY = "food" as const;

export function generateStaticParams() {
  return getStaticParamsForCategory(CATEGORY);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(CATEGORY, params.slug);
  return { title: post ? `${post.title} | Angon` : "Post not found" };
}

export default function FoodPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(CATEGORY, params.slug);
  if (!post) notFound();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-wide text-amber-700">
        {post.cuisine ?? "Traditional Lifestyle"}
      </p>
      <h1 className="mt-2 text-4xl font-bold text-stone-900">{post.title}</h1>
      <p className="mt-3 text-sm text-stone-500">
        By {post.author} · {post.date}
      </p>

      <article className="prose prose-stone mt-10 max-w-none prose-headings:font-semibold prose-a:text-amber-700">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      <CommunityPlaceholder />
    </main>
  );
}
