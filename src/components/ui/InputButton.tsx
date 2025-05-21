import { Button } from "./Button";
interface InputButtonProps {
  placeholder: string;
  buttonLabel: string;
  inputType: string;
  inputValue: string;
  handleInputChange: (value: string) => void;
  handleClick?: (value: string) => void;
}

/**
 * A full-width input field with an attached button.
 *
 * Props:
 * - placeholder: Placeholder text for the input field.
 * - buttonLabel: Label text for the button.
 * - inputType: HTML input type (e.g., "text", "email").
 * - inputValue: The current input value.
 * - handleInputChange: Callback to update the input value.
 * - handleClick: Optional callback triggered on button click, receives current input value.
 */
export const InputButton = ({
  placeholder,
  buttonLabel,
  inputType = "text",
  handleClick,
  inputValue,
  handleInputChange,
}: InputButtonProps) => {
  return (
    <div className="relative flex flex-col sm:flex-row w-full max-w-[580px]">
      <div className="flex flex-col sm:flex-row w-full max-w-[580px] bg-lighter-gray rounded-full gap-5 justify-between  ">
        <div className=" w-[100%] overflow-hidden pr-[0px] sm:pr-[50px] ">
          <input
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            type={inputType}
            placeholder={placeholder}
            className="w-full py-[14px] px-[24px] bg-transparent outline-none text-black"
          />
        </div>
      </div>
      <div className="mt-2 sm:mt-0 w-full sm:w-auto ml-0 sm:-ml-15 whitespace-nowrap">
        <Button
          label={buttonLabel}
          colorMain
          paddingX="44px"
          mobileWidth
          handleClick={() => handleClick?.(inputValue)}
        />
      </div>
    </div>
  );
};
