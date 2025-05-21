"use client";
import { useEffect, useState } from "react";
import { LatestArticle } from "../article/LatestArticle";
import { useArticleStore } from "@/store/useArticleStore";
import { Article } from "@/types/types";

/**
 * Displays the most recent article for the selected category.
 *
 * It listens to articles and category from the global article store,
 * sorts articles by publication date, and shows the latest one.
 *
 */
export const LatestSection = () => {
  const { articles, category } = useArticleStore();
  const [latestArticle, setLatestArticle] = useState<Article | null>(null);

  useEffect(() => {
    const getLatest = async () => {
      let articlesCategory = articles[category];

      if (!articles) {
        return;
      }

      if (articlesCategory && articlesCategory.length) {
        const sorted = [...articlesCategory].sort((a, b) => {
          const dateA = new Date(a.publishedAt ?? "");
          const dateB = new Date(b.publishedAt ?? "");

          const timeA = isNaN(dateA.getTime()) ? 0 : dateA.getTime();
          const timeB = isNaN(dateB.getTime()) ? 0 : dateB.getTime();

          return timeB - timeA;
        });
        setLatestArticle(sorted[0]);
      }
    };

    getLatest();
  }, [articles, category]);

  return (
    <main className="container-padding ">
      <section className="rounded-[20px] container-width bg-ice-cold py-[70px] sm:px-[100px] px-[30px] flex min-h-[560px] ">
        {latestArticle ? (
          <LatestArticle article={latestArticle} />
        ) : (
          <p className="my-10 text-center ">Loading...</p>
        )}
      </section>
    </main>
  );
};
