import { useContext } from "react";
import ChatList from "./chatlists"
import UserInfo from "./userInfo"
import { DarkModeContext } from "../../contexts/DarkmodeContext";
import { IoFlashlight } from "react-icons/io5";
import { IoFlashlightOutline } from "react-icons/io5";

const DarkModeToggle: React.FC = () => {
  const darkModeContext = useContext(DarkModeContext);

  if (!darkModeContext) {
    throw new Error('DarkModeToggle must be used within a DarkModeProvider');
  }

  const { isDarkMode, setIsDarkMode } = darkModeContext;

  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2  rounded"
    >
      {isDarkMode ? <IoFlashlightOutline /> : <IoFlashlight /> }
    </button>
  );
};

const List = () => {
  return (
    <div className="flex-1 p-5  border-gray-500">
      <DarkModeToggle></DarkModeToggle>
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  )
}

export default List