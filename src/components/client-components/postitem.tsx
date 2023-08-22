import Link from "next/link";

import { BiMessageRounded, BiRefresh } from "react-icons/bi";
import { AiOutlineHeart , AiOutlineEye} from "react-icons/ai"

export const PostItem = () => {
  return (
    <div className="flex flex-row border-gray-600 border-b-[.5px] p-5 pb-2 space-x-3">
      <div>
        {/* user pp */}
        <Link
          href={"/userprofile"}
          className="block w-10 h-10 bg-white rounded-full hover:opacity-80"
        ></Link>
      </div>
      <div>
        {/* user infos */}
        <div className="flex flex-row space-x-3 text-gray-600">
          <Link
            href={"/userprofile"}
            className="hover: text-white font-semibold hover:opacity-80"
          >
            Username
          </Link>
          <p>@username</p>
          <p>- 23h</p>
        </div>
        {/* post */}
        <div className="flex flex-col space-y-4">
          {/* post text */}
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            natus magnam dicta! Iusto, itaque dolorem.
          </div>
          {/* post photo */}
          <div className="w-full h-80 bg-gray-500 rounded-xl"></div>
          {/* post buttons */}
          <div className="flex flex-row justify-start space-x-20 text-gray-500">
            {/* comment button */}
            <button className="flex flex-row justify-center items-start space-x-3 hover:bg-white/10 hover:text-primary py-2 px-1 rounded-full">
              <BiMessageRounded size={20}></BiMessageRounded> <p>123</p>
            </button>
            {/* share button */}
            <button className="flex flex-row justify-center items-center space-x-3 hover:bg-white/10 hover:text-green-500 py-2 px-1 rounded-full">
              <BiRefresh size={20}></BiRefresh> <p>123</p>
            </button>
            {/* like button */}
            <button className="flex flex-row justify-center items-center space-x-3 hover:bg-white/10 hover:text-red-500 py-2 px-1 rounded-full">
              <AiOutlineHeart size={20}></AiOutlineHeart> <p>123</p>
            </button>
            {/* view button */}
            <button className="flex flex-row justify-center items-center space-x-3 hover:bg-white/10 hover:text-primary py-2 px-1 rounded-full">
              <AiOutlineEye size={20}></AiOutlineEye> <p>123</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
