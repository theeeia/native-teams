"use client";

interface ButtonProps {
  text: string;
  handleClick?: (value: string) => void;
  colorMain?: boolean;
  paddingX?: string;
  paddingY?: string;
  mobileWidth?: boolean;
}

export const Button = ({
  text,
  handleClick,
  colorMain = false,
  paddingX = "24px",
  paddingY = "14px",
  mobileWidth = false,
}: ButtonProps) => {
  return (
    <button
      value={text}
      onClick={(e) => handleClick?.(e.currentTarget.value)}
      className={`rounded-[50px] py-[14px] px-[24px] text-base font-medium cursor-pointer capitalize hover:brightness-130 transition-all 
        ${colorMain ? "bg-main text-white" : "bg-lighter-gray text-black"} ${
        mobileWidth ? "w-full sm:w-auto" : ""
      }`}
      style={{ padding: `${paddingY} ${paddingX}` }}
      type="submit"
    >
      {text}
    </button>
  );
};
