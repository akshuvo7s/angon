import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { getPostBySlug, getStaticParamsForCategory } from "@/lib/content";
import CommunityPlaceholder from "@/components/CommunityPlaceholder";

const CATEGORY = "travel" as const;

// Required for static export: tells Next.js every slug to pre-render.
export function generateStaticParams() {
  return getStaticParamsForCategory(CATEGORY);
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(CATEGORY, params.slug);
  const title = (post?.title_bn as string | undefined) ?? post?.title;
  return { title: post ? `${title} | আঙন` : "পাওয়া যায়নি" };
}

export default function TravelPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(CATEGORY, params.slug);
  if (!post) notFound();

  const titleBn = post.title_bn as string | undefined;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-bangla text-sm font-medium uppercase tracking-wide text-amber-700">
        {(post.region as string | undefined) ?? "ঐতিহ্য ও ভ্রমণ"}
      </p>

      {/* Bangla — primary */}
      <h1 className="font-bangla mt-2 text-4xl font-bold text-stone-900">
        {titleBn ?? post.title}
      </h1>
      {/* English — secondary */}
      {titleBn && (
        <p className="mt-1 text-base font-medium text-stone-500">
          {post.title}
        </p>
      )}

      <p className="mt-3 text-sm text-stone-500">
        {post.author} · {post.date}
      </p>

      <article className="prose prose-stone mt-10 max-w-none prose-headings:font-semibold prose-a:text-amber-700">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>

      <CommunityPlaceholder />
    </main>
  );
}
