import cslx from 'clsx'
import style from './userChat.module.scss'
const fakeData = [
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hello" },
]

interface Data {
  name: string;
  msg: string
}
const UserChat = () => {
  return (
    <div className={cslx('flex flex-col gap-5', style.userlistContainer)}>
      {fakeData.map((user: Data, index: number) => {
        return <div className="flex gap-5 border-b-[1px] border-gray-500 pb-3" key={index}>
          <img className="rounded-full w-[15%]" src={'/public/avatar.jpg'} alt="BigCo Inc. logo" />
          <div className="flex-col gap-5">
            <h2>{user.name}</h2>
            <p>{user.msg}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default UserChat