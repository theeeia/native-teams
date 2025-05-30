import { Article } from "@/types/types";
import { LinkButton } from "../ui/LinkButton";
import { titleToSlug } from "@/utils/utils";
import { useArticleStore } from "@/store/useArticleStore";

interface LatestArticleProps {
  article: Article;
}

/**
 * Displays the latest article with image, title, description,
 * reading time, and a link to read the full article.
 *
 */
export const LatestArticle = ({ article }: LatestArticleProps) => {
  const { category } = useArticleStore();
  return (
    <div className="flex flex-col sm:flex-row gap-15">
      <div className="order-2 sm:order-1 max-h-[400px] max-w-[480px] w-full overflow-hidden ">
        <img
          src={article?.urlToImage ?? "/images/placeholder.jpg"}
          alt="Article image"
          className="h-full object-scale-down mx-auto"
        />
      </div>
      <div className="order-1 sm:order-2 flex flex-col justify-around  gap-5">
        <div className="hidden sm:flex bg-main text-white h-[35px] w-[100px] items-center justify-center rounded-xl text-xs">
          6 min read
        </div>
        <h1 className="text-3xl font-bold">{article?.title ?? ""}</h1>
        <p>{article?.description ?? ""}</p>
        <LinkButton
          label="Read More"
          href={`/${category}/${titleToSlug(article?.title ?? "")}`}
        />
      </div>
    </div>
  );
};
