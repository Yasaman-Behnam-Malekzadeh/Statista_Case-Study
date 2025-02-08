import React from "react";
import { useState } from "react";

export const SearchBox = ({
  sendSearchKeyword,
}: {
  sendSearchKeyword: (data: string) => void;
}) => {
  const [searchField, setSearchField] = useState("");
  const handleSearch = () => {
    sendSearchKeyword(searchField);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <div className="w-[500px] rounded-md mb-10">
      <input
        className="border border-white pl-3 pb-2 pt-1 w-5/6 "
        width={"200px"}
        type="search"
        placeholder="Search statistic"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        aria-label="Search statistics"
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className=" w-1/6 text-white bg-blue-500 pb-2 pt-1"
        onClick={() => sendSearchKeyword(searchField)}
      >
        Search
      </button>
    </div>
  );
};
