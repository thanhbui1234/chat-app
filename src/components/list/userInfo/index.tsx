
import { CiEdit } from "react-icons/ci";
import { IoIosVideocam } from "react-icons/io";
import { CiCircleMore } from "react-icons/ci";

const UserInfo = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex items-center  gap-3">
        <img className="rounded-full w-[15%]" src={'https://i.ibb.co/S5wwYvV/avatar.jpg'} alt="BigCo Inc. logo" />
        <h2>Chi thanh</h2>
      </div>
      <div className="flex gap-2 ">
        <CiCircleMore className="cursor-pointer" />
        <IoIosVideocam className="cursor-pointer" />
        <CiEdit className="cursor-pointer" />
      </div>
    </div>
  )
}

export default UserInfo