import cslx from 'clsx'
import style from './userChat.module.scss'
const fakeData = [
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "sadsa" },
  { name: "Chi Thanh", msg: "sadsa" },
  { name: "Chi Thanh", msg: "ád" },
  { name: "Chi Thanh", msg: "ádasdasdsads" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "ádsa" },
  { name: "Chi Thanh", msg: "heállo" },
  { name: "Chi Thanh", msg: "sdasd" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "sadas" },
  { name: "Chi Thanh", msg: "heádsallo" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "ád" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "hesllo" },
  { name: "Chi Thanh", msg: "heladaslo" },
  { name: "Chi Thanh", msg: "sadhello" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "ád" },
  { name: "Chi Thanh", msg: "hesaállo" },
  { name: "Chi Thanh", msg: "hesadllo" },
  { name: "Chi Thanh", msg: "heádllo" },
  { name: "Chi Thanh", msg: "heádllo" },
  { name: "Chi Thanh", msg: "heádllo" },
  { name: "Chi Thanh", msg: "hello" },
  { name: "Chi Thanh", msg: "sad" },
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