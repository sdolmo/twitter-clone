import React from 'react'
import { BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineRetweet } from "react-icons/ai";
import { IoStatsChart, IoShareOutline } from "react-icons/io5";

const ICONS = [
  { title: "comment", icon: BsChat },
  { title: "reTweet", icon: AiOutlineRetweet },
  { title: "like", icon: AiOutlineHeart },
  { title: "analytics", icon: IoStatsChart },
  { title: "share", icon: IoShareOutline }
];

const Main = () => {
  return (
    <main className="ml-[275px] flex w-full max-w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-6 space-x-2 border-gray-600 relative">
            <div className="w-11 h-11 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
              <input
                  type="text"
                  className="w-full h-full text-2xl placeholder:text-gray-600 bg-transparent border-b-[0.5] border-gray-600 p-4 outline-none border-none"
                  placeholder="What is happening?"
                />
              <div className="w-full justify-between items-center flex">
                <div></div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-full text-sm text-white font-semibold hover:bg-primaryHover transition duration-200">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({ length:5 }).map((_,i) => (
                <div key={i} className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="flex space-x-1">
                        <div className="font-bold">Sylvia Dolmo</div>
                        <div className="text-gray-500">@sylviadolmo</div>
                        <div className="text-gray-500">
                          <BsDot/>
                        </div>
                        <div className="text-gray-500">1 hour ago</div>
                      </div>
                      <div className="text-gray-500">
                        <BsThreeDots/>
                      </div>
                    </div>
                    <div className="text-white text-lg ">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt architecto nostrum porro cupiditate iure voluptate quia. Minima, excepturi similique repudiandae expedita molestias temporibus dolores rem eaque voluptates. Cumque, necessitatibus porro.
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div>
                    <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                      {
                        ICONS.map((item) => (
                          <div className="rounded-full hover:bg-white/10 transition duration-200 p-2 cursor-pointer">
                            <item.icon/>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }

          </div>
        </main>
  )
}

export default Main