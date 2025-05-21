import Image from "next/image";

interface PopoutProps {
  handleClosePopout: () => void;
}
export const Popout = ({ handleClosePopout }: PopoutProps) => {
  return (
    <div className="fixed inset-0 z-50 items-center flex justify-center backdrop-blur-sm bg-black/30 ">
      <div className="relative flex flex-col justify-between max-w-[330px] max-h-[400px] h-full bg-white py-10 px-5 rounded-xl shadow-xl max-w-sm w-full text-center">
        <button
          className="absolute top-5 right-5 text-gray-300 hover:text-gray-800 text-xl"
          aria-label="Close"
          onClick={() => handleClosePopout()}
        >
          X
        </button>

        <div className="mx-auto mb-4">
          <Image
            src={"/images/icon.png"}
            alt="Icon"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <h2 className="text-2xl font-semibold mx-auto w-[70%]">
          Thank you for signing up!
        </h2>
        <p className="text-gray-600">
          Your email has been added to our list.
          <br /> Stay tuned for more news, and be the first to hear from us.
        </p>
      </div>
    </div>
  );
};
