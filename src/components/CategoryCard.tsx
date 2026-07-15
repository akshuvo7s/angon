import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  href: string;
  title: string; // English title
  titleBn: string; // Bangla title (primary)
  description: string; // English description
  descriptionBn: string; // Bangla description (primary)
  icon: LucideIcon;
}

export default function CategoryCard({
  href,
  title,
  titleBn,
  description,
  descriptionBn,
  icon: Icon,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-2xl border border-stone-200 bg-white p-8 transition hover:-translate-y-1 hover:border-amber-300 hover:shadow-xl"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-amber-700 transition group-hover:bg-amber-600 group-hover:text-white">
        <Icon className="h-6 w-6" />
      </div>

      {/* Bangla — primary */}
      <h3 className="font-bangla text-xl font-semibold text-stone-900">
        {titleBn}
      </h3>
      {/* English — secondary */}
      <p className="text-sm font-medium text-stone-500">{title}</p>

      <p className="font-bangla mt-3 flex-1 text-sm text-stone-600">
        {descriptionBn}
      </p>
      <p className="mt-1 text-xs text-stone-400">{description}</p>

      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-amber-700">
        <span className="font-bangla">দেখুন</span>
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
