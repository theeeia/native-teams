import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  category: string;
}

export const Breadcrumb = ({ title, category }: BreadcrumbProps) => {
  return (
    <nav aria-label="breadcrumb" className="w-full  flex justify-left">
      <Link href="/" className="hover:underline capitalize">
        {category}
      </Link>
      <span className="px-2">{">"}</span>

      <span
        className="text-main truncate overflow-hidden whitespace-nowrap"
        title={title}
      >
        {title}
      </span>
    </nav>
  );
};
