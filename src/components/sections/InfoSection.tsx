import { Button } from "../ui/Button";
interface InfoSectionProps {
  darkTheme?: boolean;
}

/**
 * Displays a promotional section with heading, description, and a call-to-action button.
 *
 * Props:
 * - darkTheme: If true, applies dark background and white text styling.
 */
export const InfoSection = ({ darkTheme = false }: InfoSectionProps) => {
  return (
    <main
      className={`h-[450px]   
        bg-[position:right_center]
        sm:bg-[position:center_center] 
        bg-no-repeat
        sm:bg-[length:100%_450px] 
        bg-[length:200%_450px]
        ${
          darkTheme
            ? "bg-[url('/images/info-bg-dark.png')] text-white"
            : "bg-[url('/images/info-bg.jpg')]"
        }
        flex
        flex-col
        items-center
        justify-center
        gap-10
        container-padding sm:container-padding-off
        text-center
        `}
    >
      <h1 className="text-4xl sm:text-5xl font-bold ">
        Explore Native Teams today
      </h1>
      <div className="text-lg  max-w-3xl">
        Unlock the full potential of your teams and elevate your business or
        personal growth with Native Teams. Explore our platform today and start
        your journey towards success.
      </div>
      <Button label="Learn More" colorMain mobileWidth />
    </main>
  );
};
