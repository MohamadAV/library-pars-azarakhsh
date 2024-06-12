import React from "react";
import SearchBar from "../modules/SearchBar";

function Header() {
  return (
    <div className="w-full bg-[#0f1678] flex ">
      <img src="/images/library-mini.png" className="mr-8 pb-2 pt-2" />
      <SearchBar />
    </div>
  );
}

export default Header;
