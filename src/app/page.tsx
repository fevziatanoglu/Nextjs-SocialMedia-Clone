import { PostItem } from "@/components/client-components/postitem";
import LeftSideBar from "@/components/leftsidebar";
import { MainComponent } from "@/components/maincomponent";
import Link from "next/link";


export default function Home() {
  return (
    <div className=" px-20 relative  bg-black flex flex-row ">
      {/* side bar */}
      <LeftSideBar />
      {/* time line */}
      <MainComponent/>
    </div>
  );
}
