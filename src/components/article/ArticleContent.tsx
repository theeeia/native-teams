interface ArticleContentProps {
  title: string;
  formattedDate: string;
  imageUrl: string;
  description: string;
  content: string;
}

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
