"use client";

import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { ArticleContainer } from "@/components/article/ArticleContainer";
import { useParams } from "next/navigation";
import { useArticleStore } from "@/store/useArticleStore";
import { useEffect, useState } from "react";
import { Article, Category } from "@/types/types";
import { InfoSection } from "@/components/sections/InfoSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";

/**
 * Article page component that fetches and displays a single article
 * based on the URL parameters `category` and `slug`.
 *
 * It shows a loading state while fetching the article, and
 * handles the case when the article is not found.
 *
 * Also renders breadcrumb navigation, article content, and
 * additional informational and newsletter sections.
 */
const ArticlePage = () => {
  const { category, slug }: { category: Category; slug: string } = useParams();
  const { fetchArticleByTitle } = useArticleStore();

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category && slug) {
      fetchArticleByTitle(category, slug).then((result) => {
        setArticle(result);
        setLoading(false);
      });
    }
  }, [category, slug]);

  if (loading) return <p className="my-10 text-center ">Loading...</p>;
  if (!article && !loading)
    return <p className="my-10 text-center ">Article not found.</p>;

  return (
    <>
      <div className="container-padding ">
        <div className="container-width my-10">
          <Breadcrumb title={article?.title ?? ""} category={category} />
          <ArticleContainer article={article} />
        </div>
      </div>
      <InfoSection darkTheme />
      <NewsletterSection />
    </>
  );
};

export default ArticlePage;
