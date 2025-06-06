"use client";

import { ArticleCard } from "../article/ArticleCard";
import { Article } from "@/types/types";
import { Pagination } from "../pagination/Pagination";
import { useArticleStore } from "@/store/useArticleStore";

/**
 * Displays a paginated list of articles filtered by category.
 *
 * It handles loading and error states, shows a message if no articles are found,
 * and renders a card component for each article along with pagination controls.
 *
 * Uses global article store for data and state management.
 */
export const ArticlesSection = () => {
  const { getPaginatedArticles, loading, fetchError, category } =
    useArticleStore();

  if (loading) return <p className="my-10 text-center ">Loading...</p>;

  if (fetchError)
    return <p className="my-10 text-center"> Error: {fetchError}</p>;

  if (getPaginatedArticles().length === 0)
    return <p className="my-10 text-center">No posts found.</p>;

  return (
    <main className="container-padding">
      <section className="container-width mt-10 mb-20">
        <h1 className="text-3xl my-10 font-bold capitalize">
          {category} posts
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {getPaginatedArticles().map((article: Article) => (
            <ArticleCard article={article} key={article.url} />
          ))}
        </div>

        <Pagination />
      </section>
    </main>
  );
};
