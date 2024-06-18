import style from "./chat.module.scss";
import cslx from "clsx";
import { useContext, useState } from "react";
import { FcAbout } from "react-icons/fc";
import { DarkModeContext } from "../../contexts/DarkmodeContext";
import { IoIosVideocam } from "react-icons/io";
import { CiImageOn } from "react-icons/ci";
import { CiCamera } from "react-icons/ci";
import { CiMicrophoneOn } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import Picker, { EmojiClickData } from "emoji-picker-react";
import WebcamComponent from "../audio/webcam";

const Chat = () => {
  const darkModeContext = useContext(DarkModeContext);
  const [inputStr, setInputStr] = useState<string>("");
  const [isScreenShot,setisScreenShot] = useState<boolean>(false)
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  if (!darkModeContext) {
    throw new Error("DarkModeToggle must be used within a DarkModeProvider");
  }

  const onEmojiClick = (emojiObject: EmojiClickData) => {
    setInputStr((prevInput) => prevInput + emojiObject?.emoji);
    setShowEmoji(false);
  };

  
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
          {isDarkMode ? (
            <>
              <IoIosVideocam size={30} />
            </>
          ) : (
            <>
              <IoIosVideocam size={30} />
            </>
          )}
        </div>
      </div>
      <div className="flex-1 border-b-[1px] border-gray-500">home</div>
      <div className="flex gap-10 p-4 ">
        <div className="flex gap-5">
          <CiImageOn className="mt-2" size={30} />
          <CiCamera  onClick={()=>setisScreenShot(!isScreenShot)} className="mt-2 cursor-pointer" size={30} />
          <CiMicrophoneOn className="mt-2" size={30} />
        </div>
        <input
          value={inputStr}
          onChange={(e) => setInputStr(e.target.value)}
          className={cslx(
            "w-[420px] outline-none py-2 px-3 rounded-md",
            style.messageChat
          )}
          type="text"
          placeholder={"Type a message"}
        />

      <WebcamComponent isScreenShot={isScreenShot}  />
        <div className="flex gap-3">
          <CiFaceSmile
            onClick={() => setShowEmoji(!showEmoji)}
            className="mt-2 cursor-pointer"
            size={30}
          />
        
          <Picker
            style={{ position: "absolute", bottom: "50px" }}
            onEmojiClick={onEmojiClick}
            open={showEmoji}
          />
          <button className="mt-2 text-white bg-blue-600 w-16 h-7 rounded-md">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
