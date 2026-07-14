import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");

export type Category = "travel" | "music" | "food";

export interface PostFrontmatter {
  title: string;
  excerpt: string;
  coverImage?: string;
  author: string;
  date: string;
  tags?: string[];
  [key: string]: unknown; // allows category-specific fields (region, artist, cuisine, etc.)
}

export interface Post extends PostFrontmatter {
  slug: string;
  category: Category;
  content: string;
}

export type PostSummary = Omit<Post, "content">;

/**
 * Returns the absolute path for a given category's content folder.
 */
function categoryDir(category: Category): string {
  return path.join(CONTENT_DIR, category);
}

/**
 * Returns all post slugs (filenames without .md) for a category.
 * Returns an empty array if the folder doesn't exist yet, instead of throwing.
 */
export function getSlugsForCategory(category: Category): string[] {
  const dir = categoryDir(category);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

/**
 * Fetches and parses a single post by category + slug.
 * Returns null if the file doesn't exist (safe for generateStaticParams / notFound()).
 */
export function getPostBySlug(category: Category, slug: string): Post | null {
  const filePath = path.join(categoryDir(category), `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    slug,
    category,
    content,
    ...(data as PostFrontmatter),
  };
}

/**
 * Fetches all posts for a category, sorted newest-first by date.
 * Returns summaries only (no markdown body) — ideal for grid/list pages.
 */
export function getAllPosts(category: Category): PostSummary[] {
  const slugs = getSlugsForCategory(category);

  const posts = slugs
    .map((slug) => getPostBySlug(category, slug))
    .filter((post): post is Post => post !== null)
    .map(({ content, ...summary }) => summary);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Convenience helper for generateStaticParams across all category [slug] routes.
 */
export function getStaticParamsForCategory(category: Category) {
  return getSlugsForCategory(category).map((slug) => ({ slug }));
}
