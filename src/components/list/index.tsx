import ChatList from "./chatlists"
import UserInfo from "./userInfo"


const List = () => {
  return (
    <div className="flex-1 p-5  border-gray-500">
      <UserInfo></UserInfo>
      <ChatList></ChatList>
    </div>
  )
}

export default List