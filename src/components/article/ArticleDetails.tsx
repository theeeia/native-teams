import { Article } from "@/types/types";
import { ArticleContent } from "./ArticleContent";
import { ArticleAuthor } from "./ArticleAuthor";
interface ArticleDetailsProps {
  article: Article | null;
}

export const ArticleDetails = ({ article }: ArticleDetailsProps) => {
  const parsedDate = new Date(article?.publishedAt ?? "");
  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="flex flex-col gap-5">
      <ArticleContent
        title={article?.title ?? ""}
        imageUrl={article?.urlToImage ?? ""}
        formattedDate={formattedDate}
        description={article?.description ?? ""}
        content={article?.content ?? ""}
      />
      <ArticleAuthor author={article?.author ?? ""} />
    </div>
  );
};
