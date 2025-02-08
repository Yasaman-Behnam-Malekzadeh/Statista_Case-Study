import React, { useState } from "react";
import { ListCard } from "./ListCard";
import { useDataResults } from "./useDataResults"
import ReactPaginate from "react-paginate";

const items_per_page = 4;

export const SearchResult = ({searchKeyword}:{searchKeyword :string}) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, error } = useDataResults(page, items_per_page, searchKeyword);

  if (isLoading) return <p>Loading...</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  const handlePageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

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
        previousLabel={"<Previous"}
        nextLabel={"Next>"}
        breakLabel={"..."}
        pageCount={Math.ceil(200 / items_per_page)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageChange}
        forcePage={page - 1}
        containerClassName={"flex justify-center space-x-2 mt-4"}
        pageClassName={"px-4 py-2 bg-gray-200 rounded"}
        activeClassName={"bg-blue-600 text-white"}
        previousClassName={"px-4 py-2 bg-gray-300 rounded"}
        nextClassName={"px-4 py-2 bg-gray-300 rounded"}
        disabledClassName={"opacity-50 cursor-not-allowed"}
        breakClassName={"text-white"}
      />
    </div>
  );
};
