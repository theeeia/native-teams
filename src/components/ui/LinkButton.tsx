import Link from "next/link";
interface LinkButtonProps {
  label: string;
  href: string;
}

/**
 * A styled link button with a label and right arrow icon.
 *
 * Props:
 * - label: Text to display inside the button.
 * - href: Destination URL.
 */
export const LinkButton = ({ label, href }: LinkButtonProps) => {
  return (
    <Link
      href={href}
      className="text-main flex items-center gap-3 font-bold hover:opacity-80 cursor-pointer"
    >
      {label}
      <img
        src="/images/right-arrow.svg"
        alt="Arrow icon"
        className="w-5 h-6 inline"
      />
    </Link>
  );
};
