import React from "react";
import { useState } from "react";

export const SearchBox = ({
  sendSearchKeyword,
}: {
  sendSearchKeyword: (data: string) => void;
}) => {
  const [searchField, setSearchField] = useState(""); // State for the search field
  const handleSearch = () => {
    sendSearchKeyword(searchField);
  }; // Function to send the search keyword

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };// Function to handle the keydown event

  return (
    <div className="flex w-[600px] h-12 mb-10 rounded-md focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition p-1">
      <input
        className="border border-white pl-3 pb-2 pt-1 w-5/6 rounded-tl-md rounded-bl-md focus:outline-none"
        type="search"
        placeholder="Find statistics, forecasts and reports"
        value={searchField}
        onChange={(e) => setSearchField(e.target.value)}
        aria-label="Find statistics, forecasts and reports"
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className=" text-white bg-blue-600 pb-2 pt-1 rounded-tr-md rounded-br-md w-40 hover:bg-blue-700 transition"
        onClick={() => sendSearchKeyword(searchField)}
      >
        Statista Search
      </button>
    </div>
  );
};
