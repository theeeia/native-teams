import Link from "next/link";

interface BreadcrumbProps {
  title: string;
  category: string;
}

export const Breadcrumb = ({ title, category }: BreadcrumbProps) => {
  return (
    <nav className="w-full  flex justify-left">
      <Link href="/" className="hover:underline capitalize">
        {category}
      </Link>
      <span className="px-2">{">"}</span>

      <Link
        href={""}
        className="text-main truncate overflow-hidden whitespace-nowrap"
      >
        {title}
      </Link>
    </nav>
  );
};
