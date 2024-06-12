import React, { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";
import { FcSearch } from "react-icons/fc";

function SearchBar() {
  const { setParameters, parameters } = useContext(BooksContext);

  const changeHandler = (text) => {
    setParameters({ ...parameters, search: text });
  };

  return (
    <input
      type="text"
      className="w-50 p-1 text-center rounded-xl m-auto"
      placeholder="جست و جو"
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
}

export default SearchBar;
