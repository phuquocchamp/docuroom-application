import { IoDocumentTextOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineHome } from "react-icons/hi";
import { HiUserGroup } from "react-icons/hi2";
import { RiAccountBoxLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [activeLink, setActiveLink] = useState(0); // Đặt giá trị mặc định là id đầu tiên (1)

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Home", icon: <HiOutlineHome /> },
    { id: 2, path: "/document", name: "Document", icon: <IoDocumentTextOutline /> },
    { id: 3, path: "/studygroup", name: "StudyGroup", icon: <HiUserGroup /> },
    { id: 4, path: "/myaccount", name: "Account", icon: <RiAccountBoxLine /> },
    { id: 5, path: "/setting", name: "Setting", icon: <IoSettingsOutline /> },
    { id: 6, path: "/help", name: "Help", icon: <FiHelpCircle /> },
  ];

  return (
    <div className="w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/*logo*/}
      <div className="mb-8">
        <img src="/logodocuroom.png" alt="logo" className="w-28 hidden md:flex" />
        <img src="/minilogo.png" alt="minilogo" className="w-8 flex md:hidden" />
      </div>
      {/*logo*/}

      {/* Navigation Links */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link) => (
          <li
            key={link.id}
            className={`font-medium rounded-md py-2 px-5 hover:bg-primary-blue hover:text-white 
              ${activeLink === link.id ? "bg-primary-blue text-white" : ""}`}
          >
            <Link
              to={link.path}
              className="flex justify-center md:justify-start items-center md:space-x-5"
              onClick={() => handleLinkClick(link.id)}
            >
              <span>{link.icon}</span>
              <span className={`text-sm hidden md:flex ${activeLink === link.id ? "text-white" : "text-gray-500"} hover:text-white`}>
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      {/* Navigation Links */}

      <div className="w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-blue-400 to-indigo-600 rounded-full">
          {" "}
          <span>?</span> <span>Need Help</span>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
