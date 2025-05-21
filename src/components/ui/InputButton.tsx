import { useState } from "react";
import { Button } from "./Button";
interface InputButtonProps {
  placeholder: string;
  buttonLabel: string;
  inputType: string;
  handleClick?: (value: string) => void;
  initialInput?: string;
}
export const InputButton = ({
  placeholder,
  buttonLabel,
  inputType = "text",
  handleClick,
  initialInput = "",
}: InputButtonProps) => {
  const [inputValue, setInputValue] = useState(initialInput);
  return (
    <div className="relative flex flex-col sm:flex-row w-full max-w-[580px]">
      <div className="flex flex-col sm:flex-row w-full max-w-[580px] bg-lighter-gray rounded-full gap-5 justify-between  ">
        <div className=" w-[100%] overflow-hidden pr-[0px] sm:pr-[50px] ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type={inputType}
            placeholder={placeholder}
            className="w-full py-[14px] px-[24px] bg-transparent outline-none text-black"
          />
        </div>
      </div>
      <div className="mt-2 sm:mt-0 w-full sm:w-auto ml-0 sm:-ml-15 whitespace-nowrap">
        <Button
          text={buttonLabel}
          colorMain
          paddingX="44px"
          mobileWidth
          handleClick={() => handleClick?.(inputValue)}
        />
      </div>
    </div>
  );
};
