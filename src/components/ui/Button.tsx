"use client";

interface ButtonProps {
  label: string;
  handleClick?: (value: string) => void;
  colorMain?: boolean;
  paddingX?: string;
  paddingY?: string;
  mobileWidth?: boolean;
}

/**
 * A button component.
 *
 * Props:
 * - label: Button label text.
 * - handleClick: Optional click handler. Receives value as an argument.
 * - colorMain: If true, uses main color styling; otherwise uses lighter-gray.
 * - paddingX: Horizontal padding (defaults to "24px").
 * - paddingY: Vertical padding (defaults to "14px").
 * - mobileWidth: If true, button spans full width on mobile.
 */
export const Button = ({
  label,
  handleClick,
  colorMain = false,
  paddingX = "24px",
  paddingY = "14px",
  mobileWidth = false,
}: ButtonProps) => {
  return (
    <button
      value={label}
      onClick={(e) => handleClick?.(e.currentTarget.value)}
      className={`rounded-[50px] py-[14px] px-[24px] text-base font-medium cursor-pointer capitalize hover:brightness-130 transition-all 
        ${colorMain ? "bg-main text-white" : "bg-lighter-gray text-black"} ${
        mobileWidth ? "w-full sm:w-auto" : ""
      }`}
      style={{ padding: `${paddingY} ${paddingX}` }}
      type="submit"
    >
      {label}
    </button>
  );
};
