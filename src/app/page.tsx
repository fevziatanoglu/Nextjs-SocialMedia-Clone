import LeftSideBar from "@/components/leftsidebar";


export default function Home() {
  return (
    <div className="w-screen h-screen px-20 relative bg-black flex flex-row ">
      
      <LeftSideBar/>

      <section className=" bg-yellow-400">side bar</section>

      <section className=" bg-yellow-400">side bar</section>
    </div>
  );
}
