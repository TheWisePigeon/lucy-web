import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaAlignJustify } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
function Navbar() {
  return (
    <div className="bg-slate-50 top-0 h-[4.5rem] max-h-[5rem] resize-none border-b border-neutral-700/80">
      <div className="max-width-container">
        <div className="flex min-h-[4.5rem] justify-between items-center">
          <div className="flex gap-5 items-center px-4 py-4">
            <FaAlignJustify />
            <span>Dashboard</span>
            <span>Catégories</span>
            <span>Utilisateurs</span>
            <span>Products</span>
          </div>
          <div className="flex gap-5 items-center px-4 py-4">
            <div className="search">
              <input type="text" placeholder="Search" />
              <IoSearch className="search-icon" />
            </div>

            <IoSettingsOutline className="icon-navabr" />
            <IoMdNotificationsOutline className="icon-navabr" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
