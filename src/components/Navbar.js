import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkmodeContext.js";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext.js";

function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser, logout } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login")
  };

  return (
    <div
      className="flex justify-between items-center px-6 md:px-10 py-2 shadow-sm sticky 
      text-grey-800 dark:text-grey-100 top-0 bg-white dark:bg-grey-800 z-50 border-b-2 dark:border-grey-700"
    >
      <div className="flex gap-6 items-center justify-between ">
        <Link to="/" className="cursor-pointer">
          <div className="text-xl font-bold ">Social App</div>
        </Link>
        <HomeOutlinedIcon />
        {darkMode ? (
          <WbSunnyOutlinedIcon className="cursor-pointer" onClick={toggle} />
        ) : (
          <DarkModeOutlinedIcon className="cursor-pointer" onClick={toggle} />
        )}
        <div className="relative">
          <PersonOutlinedIcon
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer"
          />
          {menuOpen && (
            <button
              onClick={handleLogout}
              className="absolute top-9 right-0 font-semibold bg-red-500 px-3 py-2 rounded-lg"
            >
              Logout
            </button>
          )}
        </div>
        <div className="hidden lg:flex border border-grey-500 p-1  items-center gap-2 rounded-md">
          <SearchOutlinedIcon />
          <input
            placeholder="Search"
            className=" focus:outline-none cursor-pointer dark:bg-grey-800"
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <div className="hidden md:flex gap-5 items-center">
          <GridViewOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
        </div>
        <Link
          className="flex justify-between gap-3 items-center font-semibold"
          to={`/profile/${currentUser.id}`}
        >
          <img
            src={currentUser.profilePic}
            alt=""
            className="inline-block w-10 h-10 rounded-full object-cover"
          />
          <span className="hidden sm:block flex-1">{currentUser.name}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
