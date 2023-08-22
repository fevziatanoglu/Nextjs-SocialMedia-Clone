"use client";

import Link from "next/link";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineNotification,
  AiOutlineMessage,
  AiOutlineUser,
  AiOutlineMore,
} from "react-icons/ai";

import { ImCross } from "react-icons/im";

const NAV_ITEMS = [
  { title: "Home", icon: AiOutlineHome },
  { title: "Explore", icon: AiOutlineSearch },
  { title: "Notifications", icon: AiOutlineNotification },
  { title: "Messages", icon: AiOutlineMessage },
  { title: "Profile", icon: AiOutlineUser },
  { title: "More", icon: AiOutlineMore },
];

export default function LeftSideBar() {
  return (
    <section className="sticky left-0 top-0 h-screen w-72 bg-black flex  flex-col pb-6">
        <div className="h-full flex  flex-col items-start gap-3 py-2">
          {/* main nav button */}
          <Link
            className="flex flex-row items-center rounded-3xl hover:bg-white hover:bg-opacity-20 p-2"
            href={"/"}
          >
            <ImCross size={32} />
          </Link>

          {/* nav items */}
          {NAV_ITEMS.map((item) => {
            return (
              <Link
                className="flex flex-row items-center gap-5 text-2xl rounded-2xl hover:bg-white hover:bg-opacity-20 p-2"
                href={item.title.toLocaleLowerCase()}
                key={item.title}
              >
                <item.icon size={30} />
                {item.title}
              </Link>
            );
          })}

          {/* Post button */}
          <button className="bg-primary text-white text-center rounded-full py-4 w-60 font-bold text-lg hover:bg-opacity-90">
            Post
          </button>
        </div>

        {/* user profile button */}
        <button className="flex justify-between items-center w-64 ">
          <div className="flex flex-row items-center space-x-3">
            {/* user pp */}
            <div className="w-12 h-12 bg-white rounded-full"></div>
            {/* usernames */}
            <div className="text-start">
              <p className="font-semibold text-white">User Name</p>
              <p className="font-light text-gray-400">@username</p>
            </div>
          </div>
          {/* button icon */}
          <AiOutlineMore size={25} />
        </button>
      </section>
  )
}
