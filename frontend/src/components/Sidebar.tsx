import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col justify-between">
      <nav className="mt-8">
        <ul className="space-y-4 px-4">
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/">Dashboard</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/document">Document</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/study-group">Study Group</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/account">My Account</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link to="/setting">Settings</Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
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
