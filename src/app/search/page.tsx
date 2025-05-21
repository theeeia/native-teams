"use client";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { SearchSection } from "@/components/sections/SearchSection";
import { useArticleStore } from "@/store/useArticleStore";
import { useSyncStoreWithUrl } from "@/utils/useSyncStoreWithUrl";
import { useEffect } from "react";

/**
 * Search page that displays search input, breadcrumb navigation,
 * categories, and a list of articles filtered by the current category.
 *
 * Synchronizes the article store with the URL and fetches initial articles
 * whenever the selected category changes.
 */
const SearchPage = () => {
  const { category, fetchArticles } = useArticleStore();
  useEffect(() => {
    fetchArticles(category);
  }, [category]);
  useSyncStoreWithUrl();
  return (
    <>
      <SearchSection />
      <div className="container-padding ">
        <div className="container-width my-10">
          <Breadcrumb title="Search results" category="Home" />
        </div>
      </div>
      <CategoriesSection />
      <ArticlesSection />
    </>
  );
};

export default SearchPage;
