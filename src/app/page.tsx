import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import Main from "@/components/Main";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-2xl w-full h-full flex relative">
        {/* left sidebar */}
        <LeftSidebar />
        <Main />
        {/* <section></section> */}
      </div>
    </div>
  );
};

export default Home;
