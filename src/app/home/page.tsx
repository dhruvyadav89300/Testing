function Home() {
  return (
          <div className="flex">
                  <div className="w-64 h-screen bg-gray-800 p-5 space-y-6">
                      <div className="flex items-center space-x-2">
                          {/* <div className="rounded-full bg-zinc-800 p-3">
                              
                          </div> */}
                        <div>
                        <input className="bg-black text-sm rounded-md pl-2 py-1 focus:outline-none w-full" placeholder="Enter your URL"
                              type="text" />
                    <button className="bg-black-500 text-white-900 hover:bg-black hover:text-yellow-500 py-1 font-semibold text-xs px-1 rounded">
                        Go
                    </button>
                        </div>
                         <div>
                         <input className="bg-black text-sm  rounded-md pl-2 py-1 focus:outline-none w-full" placeholder="Search"
                    type="text" />
                    
                    <button className="bg-black-500 text-white-900 hover:bg-black hover:text-yellow-500 py-1 font-semibold text-xs px-1 rounded">
                        Submit
                    </button>
                          </div> 
                    
                    {/* 
                      </div>
                      <input className="bg-black text-sm  rounded-md pl-2 py-1 focus:outline-none w-full" placeholder="Search"
                    type="text" />

                    <button className="bg-black-500 text-white-900 hover:bg-black hover:text-yellow-500 py-1 font-semibold text-xs px-1 rounded">
                        Submit
                    </button> */}
                  </div>
                </div>
          </div>
  );
}

export default Home;