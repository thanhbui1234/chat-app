import style from "./chat.module.scss";
import cslx from "clsx";
import { useContext } from "react";
import { FcAbout } from "react-icons/fc";
import { DarkModeContext } from "../../contexts/DarkmodeContext";
import { IoIosVideocam } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import EmojiPicker from 'emoji-picker-react';

const Chat = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('DarkModeToggle must be used within a DarkModeProvider');
  }

  const { isDarkMode } = darkModeContext;
  return (
    <div
      className={cslx(style.containerChat, "border-x-[1px] border-gray-500 ")}
    >
      <div className="flex justify-between  gap-3 p-5 border-b-[1px] border-gray-500">
        <div className="flex gap-3">
          <img
            className="rounded-full w-[25%]"
            src={"/public/avatar.jpg"}
            alt="BigCo Inc. logo"
          />
          <div className="items-center">
            <h2>Chi Thanh</h2>
            <p className="text-gray-400">Lorem item oc cho 123</p>
          </div>
        </div>
        <div className="flex justify-center items-center flex-row-reverse gap-5">
          <FcAbout size={30} />
          {isDarkMode ? <><IoIosVideocam size={30} /></> : <><IoIosVideocam size={30} /></>}
        </div>
      </div>
      <div className="flex-1 border-b-[1px] border-gray-500">home</div>
      <div className="flex gap-10 p-4 ">
        <div className="flex gap-5">
          <CiImageOn className="mt-2" size={30} />
          <CiCamera className="mt-2" size={30} />
          <CiMicrophoneOn className="mt-2" size={30} />
        </div>
        <input className={cslx('w-[420px] outline-none py-2 px-3 rounded-md', style.messageChat)} type="text" placeholder={"Type a message"} />
        <div className="flex gap-3">
          <CiFaceSmile className="mt-2" size={30} />
          <EmojiPicker />
          <button className="mt-2 text-white bg-blue-600 w-16 h-7 rounded-md">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;


