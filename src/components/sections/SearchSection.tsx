"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Form } from "../form/Form";

/**
 * Displays the blog header and a search input form.
 *
 * On search input it updates the `q` query param in the URL and resets page to 1.
 */
export const SearchSection = () => {
  const queryParams = useSearchParams();

  const router = useRouter();

  const handleSearchClick = (value: string) => {
    const params = new URLSearchParams(queryParams.toString());

    if (value) {
      params.set("q", value);
    } else {
      params.delete("q");
    }
    params.set("page", "1");

    router.push(`/search/?${params.toString()}`);
  };
  return (
    <section className="relative my-10 container-padding sm:px-6 md:px-10 overflow:hidden ">
      <div className="container-width relative  overflow:hidden ">
        <div
          className="absolute            
            md:right-[13%]         
            sm:left-[5%]
            -left-[5%]
            sm:bottom-[45%] 
            md:bottom-[25%]
            w-[45px] h-[45px] 
            sm:w-[300px] sm:h-[120px]
            md:w-[600px] md:h-[180px]
            lg:w-[800px] lg:h-[220px] 
            bg-[url('/images/post-icon.png')]
            sm:bg-[url('/images/search-bg.png')] bg-cover bg-left "
        />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center mb-10">
          <h2 className="text-2xl md:text-3xl text-main font-bold mb-5">
            Native Teams Blog
          </h2>
          <h1 className="text-3xl md:text-5xl max-w-[1000px] font-bold">
            Resources, Tips and Tricks About the Modern Way of Working
          </h1>
        </div>

        <div className="flex justify-center">
          <Form
            placeholder="Search for posts"
            buttonLabel="Search"
            inputType="text"
            handleButtonClick={handleSearchClick}
            initialInput={queryParams.get("q") || ""}
          />
        </div>
      </div>
    </section>
  );
};
