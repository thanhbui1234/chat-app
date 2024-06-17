import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import style from "./chatlist.module.scss";
import cslx from "clsx";
import { useState } from "react";
import UserChat from "./userChat";
const ChatList = () => {
  const [toogleAdd, setToggleAdd] = useState<boolean>(true);
  return (
    <div>
      <div className="flex justify-center p-[20px] gap-[20px] items-center">
        <div
          className={cslx(
            style.chatlistContainer,
            "flex gap-[10px] items-center  rounded-sm dark:bg-[#364a5e] "
          )}
        >
          <CiSearch className="py-1 cursor-pointer " size={24}></CiSearch>
          <input
            className="outline-none bg-transparent  text-white "
            type="text"
            placeholder="search"
            name=""
            id=""
          />
        </div>

        {toogleAdd ? (
          <>
            <CiCirclePlus onClick={() => setToggleAdd(!toogleAdd)} className="cursor-pointer" size={20} />
          </>
        ) : (
          <>
            <CiCircleMinus onClick={() => setToggleAdd(!toogleAdd)} className="cursor-pointer" size={20} />
          </>
        )}
      </div>

      <div className="">
        <UserChat></UserChat>
      </div>
    </div>
  );
};

export default ChatList;
