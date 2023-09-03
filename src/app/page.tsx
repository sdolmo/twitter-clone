import React from "react";
import LeftSidebar from "@/components/LeftSidebar";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-2xl w-full h-full flex relative">
        {/* left sidebar */}
        <LeftSidebar />
        <main className="ml-[275px] p-6 mx-2 flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold">Home</h1>
          <div className="border-t-[0.5px] border-b-[0.5px] border-gray-600 h-32 relative flex flex-row">
            <div className="w-10 h-10 bg-slate-400 rounded-full"></div>
            <div className="flex flex-col">
              <div className="border-b-[0.5] border-gray-600">
                <input
                  className="w-full h-full bg-transparent border-b-[0.5] border-gray-600 p-4 outline-none border-none"
                  type="text"
                  placeholder="What is happening?"
                />
              </div>
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[400px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-fit text-sm text-white font-semibold hover:bg-primaryHover transition duration-200">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        {/* <section></section> */}
      </div>
    </div>
  );
};

export default Home;
