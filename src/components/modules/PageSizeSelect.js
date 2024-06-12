import { useContext } from "react";
import { BooksContext } from "../../context/BooksContext";

function PageSizeSelect() {
  const { parameters, setParameters } = useContext(BooksContext);

  return (
    <div>
      <span>تعداد در صفحه: </span>
      <select
        className="w-20 text-center rounded-md cursor-pointer"
        value={parameters.pageSize}
        onChange={(e) =>
          setParameters({ ...parameters, pageSize: e.target.value })
        }
      >
        <option value={12}>12</option>
        <option value={24}>24</option>
        <option value={48}>48</option>
      </select>
    </div>
  );
}

export default PageSizeSelect;
