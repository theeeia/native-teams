import Link from "next/link";
interface LinkButtonProps {
  label: string;
  href: string;
}

export const LinkButton = ({ label, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="text-main flex items-center gap-3 font-bold hover:opacity-80 cursor-pointer"
    >
      {label}
      <img
        src="/images/right-arrow.svg"
        alt="arrow icon"
        className="w-5 h-6 inline"
      />
    </Link>
  );
};
