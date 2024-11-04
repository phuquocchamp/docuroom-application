
function Home() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Groups Section */}
          <div className="xl:col-span-2">
            <div className="flex space-x-4 mb-6 overflow-x-auto">
              {["Korean", "Math Group", "Korean", "Korean"].map((group, index) => (
                <div key={index} className="bg-blue-100 rounded-lg p-6 text-center flex flex-col items-center w-40">
                  <div className="bg-blue-500 w-16 h-16 rounded-full mb-4"></div>
                  <h3 className="font-semibold">{group}</h3>
                  <p className="text-sm text-gray-500">35 lessons</p>
                  <button className="mt-4 bg-blue-600 text-white px-4 py-1 rounded-full">Join</button>
                </div>
              ))}
            </div>

            {/* Category Section */}
            <h2 className="font-semibold mb-4">Category</h2>
            <div className="flex space-x-4 mb-6">
              {["Korean", "Computer Network", "Software Technology", "English"].map((category, index) => (
                <div key={index} className="bg-white rounded-lg px-4 py-2 shadow-md flex items-center space-x-2">
                  <div className="bg-blue-200 w-8 h-8 rounded-full"></div>
                  <p>{category}</p>
                </div>
              ))}
            </div>

            {/* Document Section */}
            <h2 className="font-semibold mb-4">Document</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Giao trinh VDK", date: "12/10/2023", videos: 183 },
                { title: "How to Design Icon", date: "183 videos" },
                { title: "Video Editing 101", featured: true, videos: 831 },
                { title: "Coding Interview", videos: 51 },
              ].map((doc, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 flex flex-col">
                  <img src="/path/to/image.jpg" alt={doc.title} className="h-24 w-full object-cover rounded-md mb-4" />
                  <h3 className="font-semibold">{doc.title}</h3>
                  <p className="text-sm text-gray-500">{doc.date || `${doc.videos} videos`}</p>
                  {doc.featured && <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full mt-2">Featured</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Your Group Section */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Your Group</h3>
                <a href="#" className="text-blue-600 text-sm">View all</a>
              </div>
              <div className="flex space-x-4">
                {["AI Group", "Speaking Korean", "Learn Toeic"].map((group, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="bg-blue-500 w-12 h-12 rounded-full mb-2"></div>
                    <p className="text-xs text-center">{group}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Section */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Recent</h3>
                <a href="#" className="text-blue-600 text-sm">View all</a>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-blue-300 rounded-md"></div>
                <div>
                  <h4 className="font-semibold">Abstract 3D</h4>
                  <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home