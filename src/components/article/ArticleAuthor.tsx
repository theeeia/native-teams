interface ArticleAuthorProps {
  author: string;
}

export const ArticleAuthor = ({ author }: ArticleAuthorProps) => {
  return (
    <div className="relative mt-[90px]">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img
          src={"/images/author.jpg"}
          alt="Author image"
          className="w-[150px] h-[150px] rounded-full object-cover 
             border-b-10 border-l-10 border-main"
        />
      </div>
      <div className="w-full min-h-[400px] bg-dark-blue rounded-2xl flex flex-col items-center justify-center p-20 pt-[95px] text-center text-white gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold ">{author}</h1>
        <h3 className="uppercase text-md font-bold">Author</h3>
        <p className="sm:mx-30">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};
