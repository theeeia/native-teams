"use client";

import { useArticleStore } from "@/store/useArticleStore";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export const Pagination = () => {
  const router = useRouter();
  const { currentPage, getTotalPages } = useArticleStore();
  const queryParams = useSearchParams();

  const handlePageChange = (value: { selected: number }) => {
    const newPage = value.selected + 1;
    const params = new URLSearchParams(queryParams.toString());
    params.set("page", newPage.toString());
    router.push(`/?${params.toString()}`);
  };

  if (getTotalPages() <= 1) return null;

  return (
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={getTotalPages()}
      onPageChange={handlePageChange}
      forcePage={currentPage - 1}
      containerClassName="flex justify-between items-center my-6 text-[16px] sm:text-[24px] font-bold text-main "
      pageLinkClassName="block px-2 "
      activeClassName="bg-ice-cold text-main rounded-md cursor-pointer"
      previousClassName="flex-1 text-left  hover:opacity-80"
      nextClassName="flex-1 text-right  hover:opacity-80"
      breakClassName="text-gray"
      pageClassName="text-center cursor-pointer text-gray hover:opacity-80"
      disabledClassName="cursor-not-allowed text-gray"
    ></ReactPaginate>
  );
};
