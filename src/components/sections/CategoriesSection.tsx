"use client";
import { categories } from "@/utils/constants";
import { Button } from "../ui/Button";
import { useRouter, useSearchParams } from "next/navigation";
import { useArticleStore } from "@/store/useArticleStore";

export const CategoriesSection = () => {
  const queryParams = useSearchParams();
  const { category } = useArticleStore();
  const router = useRouter();

  const handleClick = (value: string) => {
    const params = new URLSearchParams(queryParams.toString());

    params.set("category", value);
    params.set("page", "1");

    router.push(`/?${params.toString()}`);
  };

  return (
    <section className="relative my-10 container-padding ">
      <div className="flex gap-5 overflow-x-auto whitespace-nowrap flex-nowrap sm:flex-wrap container-width">
        {categories.map((cat) => {
          return (
            <Button
              key={cat}
              handleClick={handleClick}
              text={cat}
              colorMain={cat === category}
            />
          );
        })}
      </div>
    </section>
  );
};
