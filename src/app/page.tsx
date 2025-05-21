"use client";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { InfoSection } from "@/components/sections/InfoSection";
import { LatestSection } from "@/components/sections/LatestSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { SearchSection } from "@/components/sections/SearchSection";
import { useSyncStoreWithUrl } from "@/utils/useSyncStoreWithUrl";
import { useArticleStore } from "@/store/useArticleStore";
import { useEffect } from "react";

/**
 * Home page component that has different sections
 *
 * Syncs the article store with the URL and fetches articles whenever the
 * selected category changes.
 */
export default function Home() {
  const { category, fetchArticles } = useArticleStore();

  useEffect(() => {
    fetchArticles(category);
  }, [category]);

  useSyncStoreWithUrl();

  return (
    <div>
      <SearchSection />
      <CategoriesSection />
      <LatestSection />
      <ArticlesSection />
      <InfoSection />
      <NewsletterSection darkTheme />
    </div>
  );
}
