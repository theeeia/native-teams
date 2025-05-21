import { useArticleStore } from "@/store/useArticleStore";
import { Category } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export const useSyncStoreWithUrl = () => {
  const queryParams = useSearchParams();
  const router = useRouter();
  const { setCategory, setQuery, setCurrentPage, category, currentPage } =
    useArticleStore();

  useEffect(() => {
    const params = new URLSearchParams(queryParams.toString());
    let updatedParams = false;

    const categoryUrl = queryParams.get("category") as Category;
    const pageUrl = queryParams.get("page");
    const searchQueryUrl = queryParams.get("q");

    if (!categoryUrl && category) {
      params.set("category", category);
      updatedParams = true;
    }

    if (!pageUrl && currentPage) {
      params.set("page", currentPage.toString());
      updatedParams = true;
    }

    if (updatedParams) {
      router.replace(`/?${params.toString()}`);
      return;
    }

    if (categoryUrl) setCategory(categoryUrl);
    if (pageUrl) setCurrentPage(parseInt(pageUrl));
    if (searchQueryUrl) setQuery(searchQueryUrl);
  }, [queryParams]);
};
