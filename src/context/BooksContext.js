import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/modules/Loader";
import { useSearchParams } from "react-router-dom";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [params, setParams] = useSearchParams();

  const [parameters, setParameters] = useState({
    from: 0,
    pageSize: 12,
    search: "تست",
  });

  const fetchData = async (from, pageSize, search) => {
    setIsLoading(true);
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
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };




  useEffect(() => {
    fetchData(parameters.from, parameters.pageSize, parameters.search);
  }, [parameters]);

  return (
    <BooksContext.Provider value={{ books, parameters, setParameters }}>
      {isLoading && <Loader />}
      {children}
    </BooksContext.Provider>
  );
};
