export default function Header() {
  return (
    <header className="bg-white drop-shadow-sm">
      <div className="container">
        <div className="flex justify-between items-center h-[56px] relative">
          <div className="user">
            <img
              src="https://universeofmemory.com/wp-content/uploads/2020/06/Man-Placeholder.png"
              alt="user"
              className="rounded-full w-[50px] cursor-pointer"
            />
            <ul className="list absolute top-[90%] hidden opacity-0 z-5 transition-all bg-white py-3 px-3">
              <li className="cursor-pointer">Profile</li>
              <li className="cursor-pointer">Favourits</li>
              <li className="cursor-pointer">Settings</li>
              <li className="cursor-pointer">Log out</li>
            </ul>
          </div>
          <ul className="flex items-center h-full">
            <li className="cursor-pointer mr-5">Home</li>
            <li className="cursor-pointer mr-5">Games</li>
            <li className="cursor-pointer mr-5">Sign up</li>
            <li className="cursor-pointer">Sign in</li>
          </ul>
        </div>
      </div>
    </header>
  );
}
