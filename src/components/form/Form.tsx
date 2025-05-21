import { useState } from "react";
import { InputButton } from "../ui/InputButton";

interface FormProps {
  handleButtonClick: (value: string) => void;
  placeholder: string;
  buttonLabel: string;
  inputType: string;
  initialInput: string;
}

/**
 * Controlled form component with an input and submit button.
 *
 * Props:
 * - handleButtonClick: Callback fired on form submit with the current input value.
 * - placeholder: Placeholder text for the input field.
 * - buttonLabel: Label text for the submit button.
 * - inputType: Type attribute for the input (e.g., "text", "email").
 * - initialInput: Initial value for the input field (default is empty string).
 *
 */
export const Form = ({
  handleButtonClick,
  placeholder,
  buttonLabel,
  inputType,
  initialInput = "",
}: FormProps) => {
  const [inputValue, setInputValue] = useState(initialInput);
  const handleInputChange = (value: string) => {
    setInputValue(value);
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleButtonClick(inputValue);
  };
  return (
    <form onSubmit={handleSubmit} className="flex justify-center w-full">
      <InputButton
        placeholder={placeholder}
        buttonLabel={buttonLabel}
        inputType={inputType}
        handleInputChange={handleInputChange}
        inputValue={inputValue}
      />
    </form>
  );
};
