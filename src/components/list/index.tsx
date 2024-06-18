import { useContext } from "react";
import ChatList from "./chatlists"
import UserInfo from "./userInfo"
import { DarkModeContext } from "../../contexts/DarkmodeContext";
import { AiFillSun } from "react-icons/ai";
import { AiOutlineSun } from "react-icons/ai";


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
      {isDarkMode ? <AiFillSun size={30} /> : <AiOutlineSun size={30} /> }
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