import { Link } from "react-router-dom";
import { IoSettings } from "react-icons/io5";
import { MdPersonPin, MdSpaceDashboard } from "react-icons/md";
import { HiDocumentText } from "react-icons/hi2";
import { BiSolidGroup } from "react-icons/bi";
import { TbHelpHexagonFilled } from "react-icons/tb";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white text-light-purpe flex flex-col justify-between">
      <nav className="mt-8">
        <div className="bg-white rounded border font-medium text-xl text-black p-4 my-4 rounded text-center">
          <div>Dashboard</div>
        </div>
        <ul className="space-y-4 px-4 text-lg">

          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <MdSpaceDashboard className="m-2"/>
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <HiDocumentText className="m-2"/>
            <Link to="/document">Document</Link>
          </li>
          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <BiSolidGroup className="m-2"/>
            <Link to="/study-group">Study Group</Link>
          </li>
          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <MdPersonPin className="m-2"/>
            <Link to="/account">My Account</Link>
          </li>
          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <IoSettings className="m-2"/>
            <Link to="/setting">Settings</Link>
          </li>
          <li className="hover:bg-fresh-blue hover:text-white rounded p-3 flex items-center">
            <TbHelpHexagonFilled className="m-2"/>
            <Link to="/help">Help</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-purple-600 p-4 m-4 rounded text-center">
        <button className="text-white font-bold">Get Pro Now!</button>
      </div>
    </div>
  );
}

export default Sidebar
