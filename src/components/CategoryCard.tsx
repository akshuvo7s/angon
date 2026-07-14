import Link from "next/link";
import { type LucideIcon, ArrowRight } from "lucide-react";

interface CategoryCardProps {
  href: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function CategoryCard({
  href,
  title,
  description,
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
      <h3 className="text-xl font-semibold text-stone-900">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-stone-600">{description}</p>
      <div className="mt-6 flex items-center gap-1 text-sm font-medium text-amber-700">
        Explore
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
