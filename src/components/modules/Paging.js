import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

function Paging({ count, current }) {
  const { parameters, setParameters } = useContext(BooksContext);

  const pages = [];
  for (let index = 1; index < count; index++) {
    pages.push(index);
  }

  const clickHandler = (from) => {
    setParameters({ ...parameters, from: from });
  };

  return (
    <div className="flex flex-row justify-center cursor-pointer  mb-20 mt-8">
      {pages.map((item) => (
        <div
          onClick={() => clickHandler((item - 1) * +parameters.pageSize)}
          key={item}
          style={{ backgroundColor: current === item ? "#bdbdbd" : "#fff" }}
          className="rounded-full mx-2 align-middle flex items-center justify-center w-8 h-8 text-s"
        >
          <span className="p-2">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default Paging;
