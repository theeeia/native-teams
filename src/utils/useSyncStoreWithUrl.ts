import { useArticleStore } from "@/store/useArticleStore";
import { Category } from "@/types/types";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

/**
 * Custom hook that syncs the article store state with the URL query parameters.
 *
 * - Reads `category`, `page`, and `q` (search query) parameters from the URL.
 * - Updates the Zustand article store with these values if present.
 * - If some parameters are missing from the URL but present in the store,
 *   updates the URL to include those parameters, preserving sync.
 * - Uses `router.replace` to update the URL without adding a new history entry.
 *
 */
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
