import { Article } from "@/types/types";
import { Label } from "../ui/Label";
import { LinkButton } from "../ui/LinkButton";
import { useArticleStore } from "@/store/useArticleStore";
import { titleToSlug } from "@/utils/utils";

interface ArticleCardProps {
  article: Article;
}

/**
 * Card component to display a summary of an article, including image, title, and a link to read more.
 *
 * Props:
 * - article: The article object.
 */
export const ArticleCard = ({ article }: ArticleCardProps) => {
  const { category } = useArticleStore();

  return (
    <div className="rounded-xl border border-light-gray w-full max-w-[390px] max-h-[400px]">
      <div className="relative">
        <img
          src={article?.urlToImage || "images/placeholder.jpg"}
          alt="cover"
          className="w-full h-[220px] object-cover rounded-t-xl"
        />
        <Label />
        <div className="mt-5 p-5">
          <h1 className="line-clamp mb-5 text-2xl font-bold ">
            {article.title}
          </h1>

          <LinkButton
            label="Read More"
            href={`/${category}/${titleToSlug(article.title)}`}
          />
        </div>
      </div>
    </div>
  );
};
