import { useState } from "react";
import { Form } from "../form/Form";
import { Popout } from "../ui/Popout";

interface NewsletterSectionProps {
  darkTheme?: boolean;
}

export const NewsletterSection = ({
  darkTheme = false,
}: NewsletterSectionProps) => {
  const [showPopout, setShowPopout] = useState(false);

  const handleTogglePopout = () => {
    setShowPopout((prev) => !prev);
  };
  return (
    <section
      className={`h-[450px]   
        container-padding
        sm:container-padding-off
        flex
        flex-col
        items-center
        justify-center
        gap-10      
        ${darkTheme ? "bg-midnight-blue text-white" : "bg-white text"}  
        border-t-[12px] border-t-light-lilac 
        relative
        `}
    >
      <h1 className="text-4xl sm:text-5xl font-bold text-center ">
        Never miss out our <br className="md:hidden" />
        <span className="text-main">latest news</span>
      </h1>

      <Form
        handleButtonClick={handleTogglePopout}
        placeholder="Email Address"
        buttonLabel="Sign up"
        inputType="email"
        initialInput=""
      />

      <div className="text-lg max-w-3xl text-center z-10">
        By submitting this form, you will receive emails from Native Teams.
        <br /> For details, view our Privacy Policy.
      </div>
      <img
        src={"/images/star.png"}
        alt="Icon"
        className="absolute sm:bottom-10 mdm:right-20 sm:right-10 hidden md:inline lg:scale-[1] md:scale-[0.5]"
      />
      {showPopout && <Popout handleClosePopout={handleTogglePopout} />}
    </section>
  );
};
