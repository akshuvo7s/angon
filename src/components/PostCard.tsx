import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostSummary, Category } from "@/lib/content";

interface PostCardProps {
  post: PostSummary;
  category: Category;
}

export default function PostCard({ post, category }: PostCardProps) {
  const titleBn = post.title_bn as string | undefined;
  const excerptBn = post.excerpt_bn as string | undefined;

  return (
    <Link
      href={`/${category}/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-stone-100">
        {post.coverImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.coverImage as string}
            alt={titleBn ?? post.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-stone-400">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-amber-700">
          {post.date}
        </span>

        {/* Bangla — primary */}
        <h3 className="font-bangla text-lg font-semibold text-stone-900 group-hover:text-amber-800">
          {titleBn ?? post.title}
        </h3>
        {/* English — secondary */}
        {titleBn && <p className="text-xs text-stone-400">{post.title}</p>}

        <p className="font-bangla line-clamp-2 flex-1 pt-1 text-sm text-stone-600">
          {excerptBn ?? post.excerpt}
        </p>

        <div className="mt-2 flex items-center gap-1 text-sm font-medium text-amber-700">
          <span className="font-bangla">আরও পড়ুন</span>
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
