import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold gap-4 flex-wrap">
        {/* Left Controls */}
        <div className="flex items-center gap-2">
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt="left"
            onClick={() => navigate(-1)}
          />
          <img
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt="right"
            onClick={() => navigate(+1)}
          />
        </div>

        {/* Search Bar */}
        <div className="hidden sm:flex justify-center w-1/3 mx-6">
          <input
            type="text"
            placeholder="Search for songs, artists, albums..."
            className="w-full px-4 py-1 rounded-2xl bg-[#2c2c2c] text-white placeholder-gray-400 focus:outline-none"
          />
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <a
  href="https://www.spotify.com/premium"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white text-black text-[14px] px-3 py-1 rounded-2xl hidden md:block cursor-pointer"
>
  Explore Premium
</a>

          <a
  href="https://www.spotify.com/download"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-black py-1 px-3 rounded-2xl text-[14px] cursor-pointer"
>
  Install App
</a>

          <p className="bg-blue-500 text-black w-7 h-7 rounded-full flex items-center justify-center cursor-pointer">
            M
          </p>
        </div>
      </div>

      {/* Category Tabs with NavLinks */}
      <div className="flex items-center gap-2 mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-1 rounded-2xl cursor-pointer ${
              isActive ? "bg-white text-black" : "bg-[#242424] text-white"
            }`
          }
        >
          All
        </NavLink>

        <NavLink
          to="/music"
          className={({ isActive }) =>
            `px-4 py-1 rounded-2xl cursor-pointer ${
              isActive ? "bg-white text-black" : "bg-[#242424] text-white"
            }`
          }
        >
          Music
        </NavLink>

        <NavLink
          to="/podcasts"
          className={({ isActive }) =>
            `px-4 py-1 rounded-2xl cursor-pointer ${
              isActive ? "bg-white text-black" : "bg-[#242424] text-white"
            }`
          }
        >
          Podcasts
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
