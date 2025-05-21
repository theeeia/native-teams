"use client";
import { categories } from "@/utils/constants";
import { Button } from "../ui/Button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useArticleStore } from "@/store/useArticleStore";

/**
 * Displays a horizontal list of category buttons.
 *
 * Clicking a category updates the URL query parameters to filter articles by that category
 * and resets the pagination to page 1.
 *
 */
export const CategoriesSection = () => {
  const queryParams = useSearchParams();
  const pathname = usePathname();
  const { category } = useArticleStore();
  const router = useRouter();

  const handleClick = (value: string) => {
    const params = new URLSearchParams(queryParams.toString());

    params.set("category", value);
    params.set("page", "1");

    const basePath = pathname.startsWith("/search") ? "/search" : "/";

    router.push(`${basePath}?${params.toString()}`);
  };

  return (
    <main className="relative my-10 container-padding ">
      <section className="flex gap-5 overflow-x-auto whitespace-nowrap flex-nowrap sm:flex-wrap container-width">
        {categories.map((cat) => {
          return (
            <Button
              key={cat}
              handleClick={handleClick}
              label={cat}
              colorMain={cat === category}
            />
          );
        })}
      </section>
    </main>
  );
};
