import React from 'react'
import '../Search/style.css'
import Button from '@mui/material/Button';
import { IoMdSearch } from "react-icons/io";

const Search = () => {
  return (
    <div className="w-full">
      <div className="searchBox relative w-full max-w-full h-[45px] sm:h-[50px] border border-gray-300 rounded-[5px] overflow-hidden flex">
        {/* Input */}
        <input
          type="text"
          placeholder="Search Product Here..."
          className="flex-1 h-full px-3 sm:px-4 text-[14px] sm:text-[15px] outline-none bg-transparent"
        />

        {/* Search Button */}
        <Button
          className="!w-[35px] sm:!w-[37px] !h-full !min-w-[35px] sm:!min-w-[37px] !rounded-full !absolute right-1 top-1 sm:top-[1px] flex items-center justify-center"
        >
          <IoMdSearch className="text-[#4e4e4e] text-[20px] sm:text-[22px]" />
        </Button>
      </div>
    </div>
  )
}

export default Search