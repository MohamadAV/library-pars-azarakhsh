import React, { useContext } from "react";
import BookCard from "../modules/BookCard";
import Paging from "../modules/Paging";
import PageSizeSelect from "../modules/PageSizeSelect";
import { BooksContext } from "../../context/BooksContext";

export default function HomePage() {
  const { books, parameters } = useContext(BooksContext);

  return (
    <>
      <div className="w-4/5 flex flex-col justify-center md:justify-between px-8 py-5 mx-auto md:flex-row text-center">
        <PageSizeSelect />
        {books.count > 0 ? (
          <span>{books.count} نتیجه یافت شد</span>
        ) : (
          <span>نتیجه ای یافت نشد</span>
        )}
      </div>

      <div className="flex w-4/5 m-auto flex-wrap justify-center ">
        {books?.multimediaDocument?.map((book, index) => (
          <BookCard book={book} key={index} />
        ))}
      </div>
      {books.count > +parameters.pageSize && (
        <Paging
          count={
            Math.round((+books.count / +parameters.pageSize) * 10) / 10 + 1
          }
          current={+parameters.from / +parameters.pageSize + 1}
        />
      )}
    </>
  );
}
