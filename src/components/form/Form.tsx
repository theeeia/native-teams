import { useState } from "react";
import { InputButton } from "../ui/InputButton";

interface FormProps {
  handleButtonClick: (value: string) => void;
  placeholder: string;
  buttonLabel: string;
  inputType: string;
  initialInput: string;
}
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
