import React from "react";
import { BiHomeCircle } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { GoBell } from "react-icons/go";
import { FiMail } from "react-icons/fi";
import { PiNote } from "react-icons/pi";
import { PiBookmarkSimple } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { BsPerson, BsThreeDots, BsTwitter } from "react-icons/bs";
import { CiCircleMore } from "react-icons/ci";
import Link from "next/link";

const NAVIGATION_ITEMS = [
  { title: "Twitter", icon: BsTwitter },
  { title: "Home", icon: BiHomeCircle },
  { title: "Explore", icon: HiOutlineSearch },
  { title: "Notifications", icon: GoBell },
  { title: "Messages", icon: FiMail },
  { title: "Lists", icon: PiNote },
  { title: "Bookmarks", icon: PiBookmarkSimple },
  { title: "Communities", icon: MdPeopleOutline },
  { title: "Verified", icon: GoVerified },
  { title: "Profile", icon: BsPerson },
  { title: "More", icon: CiCircleMore },
];

const LeftSidebar = () => {
  return (
    <section className="fixed w-72 flex flex-col items-stretch h-screen text-white p-6">
      <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-white/10 transition duration-200 flex items-center justify-start space-x-4 rounded-3xl py-2 px-4 w-fit text-xl"
            key={item.title}
            href={`/${item.title.toLowerCase()}`}
          >
            <div>
              <item.icon className="text-2xl" />
            </div>
            {item.title !== "Twitter" && <div>{item.title}</div>}
          </Link>
        ))}
        <button className="rounded-full bg-primary px-2 py-3 text-lg text-white font-semibold hover:bg-primaryHover transition duration-200 w-5/6">
          Post
        </button>
      </div>

      <button className="rounded-full flex items-center justify-between space-x-2 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200 w-full">
        <div className="flex items-center space-x-4">
          <div className="rounded-full bg-slate-400 w-8 h-8"></div>
          <div className="text-left text-sm">
            <div className="font-semibold">User Name</div>
            <div className="text-xs">@username</div>
          </div>
        </div>
        <div>
          <BsThreeDots />
        </div>
      </button>
    </section>
  );
};

export default LeftSidebar;
