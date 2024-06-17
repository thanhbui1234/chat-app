import style from "./chat.module.scss";
import cslx from "clsx";
import { useContext } from "react";
import { FcAbout } from "react-icons/fc";
import { DarkModeContext } from "../../contexts/DarkmodeContext";
import { BsTelephone } from "react-icons/bs";
import { BsTelephoneFill } from "react-icons/bs";

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
          {isDarkMode ? <><BsTelephoneFill size={30}/></> : <><BsTelephone size={30}/></> }
        </div>
      </div>
      <div className="flex-1 border-b-[1px] border-gray-500">home</div>
      <div className="bottom">
        <div className="icons">
          <label htmlFor="file">
            <img src="./img.png" alt="" />
          </label>
          <input type="file" id="file" style={{ display: "none" }} />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input type="text" placeholder={"hello"} />
        <div className="emoji">
          <button className="sendButton">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
