import { InputButton } from "./InputButton";

interface EmailFormProps {
  handleButtonClick: () => void;
}
export const EmailForm = ({ handleButtonClick }: EmailFormProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleButtonClick();
      }}
      className="flex justify-center w-full"
    >
      <InputButton
        placeholder="Email Address"
        buttonLabel="Sign up"
        inputType="email"
      />
    </form>
  );
};
