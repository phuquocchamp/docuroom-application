import React, { useState } from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { HiOutlineDocumentArrowUp } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';

function MyDocument() {
  const [activePopup, setActivePopup] = useState(null); // Quản lý trạng thái popup

  const documents = [
    { title: "Giáo trình lập trình mạng", date: "12/10/2023", user: "Khanh Linh", imgSrc: "/doc/GiaoTrinhLTM.png", id: 1 },
    { title: "Bài tập giải tích", date: "12/10/2023", user: "Phu Quoc", imgSrc: "/doc/GiaiTich.jpg", id: 2 },
    { title: "Đề Thi tiếng Hàn", date: "12/10/2023", user: "Khanh Linh", imgSrc: "/doc/Korean.jpg", id: 3 },
    { title: "Tổng hợp ngữ pháp tiếng Anh cơ bản", date: "12/10/2023", user: "Phu Quoc", imgSrc: "/doc/TiengAnh.jpg", id: 4 },
  ];

  const handlePopupToggle = (id) => {
    setActivePopup((prev) => (prev === id ? null : id)); // Mở/đóng popup
  };

  const handleRename = (doc) => {
    console.log(`Rename ${doc.title}`);
    setActivePopup(null); // Đóng popup sau khi xử lý
  };

  const handleDelete = (doc) => {
    console.log(`Delete ${doc.title}`);
    setActivePopup(null); // Đóng popup sau khi xử lý
  };

  const navigate = useNavigate();

    const handleClick = () => {
        navigate('/home/addDocument'); // Điều hướng đến trang AddDocument
    };

  return (
    <div>
      {/* Document Section */}
      <div className="flex items-center justify-between p-4">
                <h2 className="font-semibold text-lg">My Document</h2>
                <button onClick={handleClick} 
                 className="flex items-center gap-2 px-4 py-2 bg-blue-500 shadow-md text-white font-medium rounded-full hover:bg-blue-600 transition">
                    <HiOutlineDocumentArrowUp className="text-xl" />
                    Upload Document
                </button>
            </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-6">
        {documents.map((doc) => (
          <div key={doc.id} className="relative bg-white rounded-lg shadow-lg p-6 flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out">
            {/* Image Placeholder */}
            <img src={doc.imgSrc} alt={doc.title} className="h-32 w-full object-cover rounded-md mb-4" />

            {/* Document Title */}
            <h3 className="font-semibold text-base text-gray-800 mb-2">{doc.title}</h3>

            {/* Document Details */}
            <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
              <p>{doc.date}</p>
              <p>Posted by {doc.user}</p>
            </div>

            {/* Three Dots Icon */}
            <div className="flex justify-end">
              <button
                onClick={() => handlePopupToggle(doc.id)}
                className="text-gray-600 hover:text-blue-500 transition duration-200"
              >
                <BsThreeDotsVertical className="w-5 h-5" />
              </button>

              {/* Popup */}
              {activePopup === doc.id && (
                <div className="absolute right-0 mt-6 bg-white border rounded-lg shadow-lg z-10 w-40">
                  <button
                    onClick={() => handleRename(doc)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(doc)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-sm text-red-500"
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyDocument;
