import { useState } from "react";
import Menu from "../assets/icons/Menu";
import Star from "../assets/icons/Star";

const menuItems = ["Services", "Community", "About"];

const Header = () => {
  const [open, setOpen] = useState(false);

  const openMenuHandler = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={`${open ? " bg-darkBlue" : ""}`}>
        <div className="flex justify-between lg:grid grid-cols-2 h-14 items-center pt-6">
          <div className="flex justify-items-start">
            <span className="font-semibold text-xl sm:text-2xl">REST</span>
            <Star />
          </div>
          <div className="hidden lg:flex justify-between items-center">
            {menuItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <button className="h-10 w-28 bg-gradient-to-r from-orange to-lightOrange rounded-full">
              Log In
            </button>
          </div>
          <div className="flex flex-col lg:hidden">
            <button onClick={openMenuHandler}>
              <Menu />
            </button>
          </div>
        </div>
        {open && (
          <div className="bg-darkBlue shadow-md flex flex-col justify-around h-56 px-4">
            {menuItems.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
