import cslx from 'clsx'
import style from './userChat.module.scss'
const fakeData = [
  { name: "Chi Thanh", msg: "sadsa" ,img:'https://i.ibb.co/S5wwYvV/avatar.jpg'},
  { name: "Trinh Tuyen", msg: "gay" ,img:'https://i.ibb.co/5r8brGK/z5553475737458-e5443d92be3f289fdd521b1b72666e30.jpg'},
  { name: "Chi Thanh", msg: "sadsa" ,img:'https://i.ibb.co/S5wwYvV/avatar.jpg'},
  { name: "Trinh Tuyen12", msg: "gay q" ,img:'https://i.ibb.co/5r8brGK/z5553475737458-e5443d92be3f289fdd521b1b72666e30.jpg'},



]

interface Data {
  name: string;
  msg: string;
  img?: string;
}
const UserChat = () => {
  return (
    <div className={cslx('flex flex-col gap-5', style.userlistContainer)}>
      {fakeData.map((user: Data, index: number) => {
        return <div className="flex gap-5 border-b-[1px] border-gray-500 pb-3" key={index}>
          <img className="rounded-full w-[15%]" src={user.img} alt={user.name} />
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