import { FaPenFancy } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

function BookCard({ book }) {
  return (
    <div className="flex flex-col justify-center items-center shadow-md m-4 rounded-lg p-4 bg-[#fdfdfd] relative cursor-pointer">
      <span className="text-xs mb-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-60 self-start text-[#a1a1a1] flex">
      <FaBookOpen  className="ml-2"/>    ناشر: {book.publisher || "نامعلوم"}
      </span>
      <div>
        <img
          src={`https://testv5.parslib.com:7443/develop/faces${book.largeThumbnailPath}`}
          alt={book.title}
          id={`img-${book.id}`}
          className="max-w-none w-60 h-80"
          onError={(e) => (e.target.src = "/images/book.png")}
        />
      </div>
      <h3 className="whitespace-nowrap overflow-hidden text-ellipsis max-w-60 mt-2 mb-5">
        {book.title}
      </h3>
      <span className="text-xs mb-1 whitespace-nowrap overflow-hidden text-ellipsis max-w-60 self-start text-[#a1a1a1] absolute bottom-1 right-2  flex">
         <FaPenFancy className="ml-2"/> نویسنده: {book.author || "نامعلوم"}
      </span>
    </div>
  );
}

export default BookCard;
