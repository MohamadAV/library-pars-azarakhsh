import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const [parameters, setParameters] = useState({
    from: 0,
    pageSize: 12,
    search: "تست",
  });
  const fetchData = async (from, pageSize, search) => {
    try {
      const response = await axios.get(
        `/develop/faces/rest/searchbiblio/multimediaList`,
        {
          params: {
            multimediaType: 4,
            fileExtension: "pdf",
            pageSize: pageSize,
            from: from,
            searchText: search === "" ? "تست" : search,
          },
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(parameters.from, parameters.pageSize, parameters.search);
  }, [parameters]);

  return (
    <BooksContext.Provider value={{ books, parameters, setParameters }}>
      {children}
    </BooksContext.Provider>
  );
};
