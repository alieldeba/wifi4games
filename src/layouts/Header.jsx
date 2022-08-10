import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileDropDown from "../components/ProfileDropDown";

export default function Header() {
  // return (
  // <header className="bg-white drop-shadow-sm">
  //   <div className="container">
  //     <div className="flex justify-between items-center h-[56px] relative">
  //       <div className="user">
  //         <img
  //           src="https://universeofmemory.com/wp-content/uploads/2020/06/Man-Placeholder.png"
  //           alt="user"
  //           className="rounded-full w-[50px] cursor-pointer"
  //         />
  //         <ul className="list absolute top-[90%] hidden opacity-0 z-5 transition-all bg-white py-3 px-3">
  //           <li className="cursor-pointer">Profile</li>
  //           <li className="cursor-pointer">Favourits</li>
  //           <li className="cursor-pointer">Settings</li>
  //           <li className="cursor-pointer">Log out</li>
  //         </ul>
  //       </div>
  //       <ul className="flex items-center h-full">
  //         <li className="cursor-pointer mr-5">
  //           <Link to="/">Home</Link>
  //         </li>
  //         <li className="cursor-pointer mr-5">
  //           <Link to="/games">Games</Link>
  //         </li>
  //         <li className="cursor-pointer">
  //           <Link to="/signin">Sign in</Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </header>
  // );

  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Games", path: "/games" },
    { title: "Sign in", path: "/signin" },
  ];
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <img
              src="https://www.wifi4games.com/css/img/logo_md.png"
              width={50}
              height={10}
              alt="Float UI logo"
            />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-white absolute z-20 w-full top-16 left-0 p-4 border-b lg:static lg:block lg:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-gray-900">
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t lg:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
            <ProfileDropDown class="hidden lg:block" />
            <button
              className="outline-none text-gray-400 block lg:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

