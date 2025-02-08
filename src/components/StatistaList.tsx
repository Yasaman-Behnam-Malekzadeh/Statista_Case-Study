import React from "react";
import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { SearchBox } from "./SearchBox";
import { Link } from "react-router-dom";

export const StatistaList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleSearch = (search: string) => {
    setSearchKeyword(search);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col h-7/8 bg-darkBlue w-screen pt-5">
        <Link
          to={"/"}
          className="absolute top-0 left-0 p-5 "
        >
          <img
            className="bg-white"
            alt="logo"
            src="https://cdn.statcdn.com/static/img/Statista-Logo-Color-Primary.png"
          />
        </Link>
        <SearchBox sendSearchKeyword={handleSearch} />
        <div className="flex flex-col justify-center">
          <SearchResult searchKeyword={searchKeyword} />
        </div>
      </div>
      <div className="homeHeader__shape ">
        <svg
          viewBox="0 0 1440 145"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M1440 0H0.00781546C-0.00946947 20.5685 0.00731001 53.2422 0.00731001 53.2422L574.873 135.465C664.252 148.178 775.529 148.178 864.927 135.465L1440 53.2422C1440 53.2422 1439.98 20.5596 1440 0Z"
            fill="#001327"
          ></path>
        </svg>
      </div>
      <div className="h-1/8"></div>
    </div>
  );
};
