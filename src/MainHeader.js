import { useNavigate } from "react-router-dom";

function MainHeader() {
  const navigate = useNavigate();
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div
          onClick={() => navigate("/")}
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer"
        >
          <span className="ml-3 text-xl">Apple Store</span>
        </div>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <span
            onClick={() => navigate("/iphone")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            iPhone
          </span>
          <span
            onClick={() => navigate("ipad")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            iPad
          </span>
          <span
            onClick={() => navigate("macbook")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            MacBook
          </span>
          <span
            onClick={() => navigate("acc")}
            className="mr-5 hover:text-white cursor-pointer"
          >
            Acc
          </span>
        </nav>
        <button
          onClick={() => navigate("login")}
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 cursor-pointer"
        >
          Sign in
        </button>
      </div>
    </header>
  );
}

export default MainHeader;
