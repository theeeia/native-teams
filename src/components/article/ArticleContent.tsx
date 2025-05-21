interface ArticleContentProps {
  title: string;
  formattedDate: string;
  imageUrl: string;
  description: string;
  content: string;
}

/**
 * Displays the detailed content of an article including title, date, image, description, and full content.
 *
 * Props:
 * - title: The article's title.
 * - formattedDate: The publication date, formatted as a string.
 * - imageUrl: URL of the article's main image.
 * - description: Short summary or description of the article.
 * - content: Full body content of the article.
 */
export const ArticleContent = ({
  title,
  formattedDate,
  imageUrl,
  description,
  content,
}: ArticleContentProps) => {
  return (
    <>
      <div className="w-full text-center px-4 mt-10">
        <div className=" sm:max-w-[80%] mx-auto ">
          <h1 className=" text-2xl sm:text-5xl font-bold mb-5 leading-[100%]">
            {title ?? ""}
          </h1>
          <div className="flex justify-center items-center gap-3 text-gray-500 text-sm">
            <p>{formattedDate}</p>
            <span>|</span>
            <p>6 min read</p>
          </div>
        </div>
      </div>

      {imageUrl && (
        <div className=" h-full sm:h-[500px] md:h-[615px] overflow-hidden">
          <img
            src={imageUrl}
            alt="Article image."
            className="h-full object-scale-down mx-auto"
          />
        </div>
      )}

      {description && <div>{description}</div>}
      {content && <div>{content}</div>}
    </>
  );
};
