import { Link } from "react-router-dom";

export default function Footer() {
  const footerNavs = [
    {
      href: "/",
      name: "Home",
    },
    {
      href: "/games",
      name: "Games",
    },
    {
      href: "javascript:void()",
      name: "",
    },
    {
      href: "/signup",
      name: "Sign up",
    },
    {
      href: "/sign in",
      name: "Sign in",
    },
  ];

  return (
    <footer className="text-gray-500 px-4 py-5 max-w-screen-xl mx-auto">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img
          src="https://www.wifi4games.com/css/img/logo_md.png"
          className="w-32 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => {
          return (
            <li className=" hover:text-gray-800">
              <Link key={idx} to={item.href}>
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-8 items-center justify-center sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; {new Date().getFullYear()} Stream Games All rights reserved.
        </div>
      </div>
      <style jsx>{`
        .svg-icon path,
        .svg-icon polygon,
        .svg-icon rect {
          fill: currentColor;
        }
      `}</style>
    </footer>
  );
}
