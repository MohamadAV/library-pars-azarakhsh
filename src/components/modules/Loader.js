import "./Loader.css";

function Loader() {
  return (
    <div className="w-screen h-screen  z-10 bg-[#c3c3c35c] fixed">
      <div className="loader">
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
        <div className="loader-square"></div>
      </div>
    </div>
  );
}

export default Loader;
