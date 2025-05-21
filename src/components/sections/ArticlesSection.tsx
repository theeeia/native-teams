"use client";

import { ArticleCard } from "../article/ArticleCard";
import { Article } from "@/types/types";
import { Pagination } from "../pagination/Pagination";
import { useArticleStore } from "@/store/useArticleStore";

export const ArticlesSection = () => {
  const { getPaginatedArticles, loading, fetchError } = useArticleStore();

  if (loading) return <p className="my-10 text-center ">Loading...</p>;

  if (fetchError)
    return <p className="my-10 text-center"> Error: {fetchError}</p>;

  if (getPaginatedArticles().length === 0)
    return <p className="my-10 text-center">No posts found.</p>;

  return (
    <section className="container-padding">
      <div className="container-width mt-10 mb-20">
        <h1 className="text-3xl my-10 font-bold"> News posts</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center">
          {getPaginatedArticles().map((article: Article) => (
            <ArticleCard article={article} key={article.url} />
          ))}
        </div>

        <Pagination />
      </div>
    </section>
  );
};
