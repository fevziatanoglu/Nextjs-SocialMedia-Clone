import Link from "next/link";
import React from "react";
import { PostItem } from "./client-components/postitem";

export const MainComponent = () => {
  return (
    // timeline
    <main className="relative w-[660px]  border-gray-600 border-[.5px] border-t-0  ">
      {/* timeline header */}
      <div className="sticky top-0  w-full h-32  flex flex-col justify-between  backdrop-blur-lg  border-gray-600 border-b-[.5px] space-y-2">
        <h1 className="text-2xl font-bold p-3">Home</h1>
        <div className=" flex flex-row">
          {/* active button */}
          <button className="relative w-full flex flex-row justify-center items-center  font-bold hover:bg-white/10 ">
            For You
            <div className="fixed self-end  w-16 h-1 bg-primary rounded-full "></div>
          </button>
          <button className="w-full   py-4  text-gray-500 hover:bg-white/10">
            Following
          </button>
        </div>
      </div>

      {/* post input div */}
      <div className=" border-gray-600 border-b-[.5px] py-4 px-6 space-y-5">
        <div className="flex flex-row space-x-3">
          {/* user pp */}
          <Link
            href={"/userprofile"}
            className="w-10 h-10 bg-white rounded-full hover:opacity-80"
          ></Link>
          {/* input */}
          <input
            className="bg-transparent text-2xl"
            placeholder="What is happening?!"
          ></input>
        </div>

        {/* post button */}
        <div className="flex items-end justify-end">
          <button className="bg-primary py-2 px-5 font-bold rounded-full">
            Post
          </button>
        </div>
      </div>

      <PostItem></PostItem>
      <PostItem></PostItem>
    </main>
  );
};
