import React, { useState } from "react";
import { ListCard } from "./ListCard";
import { useDataResults } from "./useDataResults";
import ReactPaginate from "react-paginate";

const items_per_page = 4;

export const SearchResult = ({ searchKeyword }: { searchKeyword: string }) => {
  const [page, setPage] = useState(1); // State for the current page
  const { data, isLoading, error } = useDataResults(
    page,
    items_per_page,
    searchKeyword
  ); // Fetch the data for the search results

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  }; // Function to handle the page change

  console.log(data?.items);

  return (
    <div>
      {data?.items.map((item, index) => (
        <ListCard
          key={item.identifier || index}
          cardItem={{
            id: item.identifier,
            date: item.date,
            title: item.title,
            description: item.description,
          }}
        />
      ))}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        breakLabel={"..."}
        pageCount={Math.ceil(200 / items_per_page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        forcePage={page - 1}
        containerClassName={"flex justify-center space-x-2 mt-4"}
        pageClassName={
          "px-4 py-2 bg-white rounded-full hover:bg-blue-200 hover:text-white transition-colors"
        }
        activeClassName={
          "text-white rounded-full !bg-blue-600 pointer-events-none"
        }
        previousClassName={
          "px-4 py-2 bg-white rounded-full hover:bg-blue-100 hover:text-white"
        }
        nextClassName={
          "px-4 py-2 bg-white rounded-full hover:bg-blue-100 hover:text-white"
        }
        disabledClassName={"opacity-50 cursor-not-allowed"}
        breakClassName={"text-white"}
      />
    </div>
  );
};
