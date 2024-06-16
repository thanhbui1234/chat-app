
import style from './chat.module.scss'
import cslx from 'clsx'
const Chat = () => {
  return (
    <div className={cslx(style.containerChat, 'border-x-[1px] border-gray-500 ')}>
      <div className='flex gap-3 p-5 border-b-[1px] border-gray-500'>
        <img className="rounded-full w-[8%]" src={'/public/avatar.jpg'} alt="BigCo Inc. logo" />
        <div>
          <h2>Chi Thanh</h2>
          <p className='text-gray-400'>Lorem item oc cho 123</p>
        </div>
      </div>

    </div>
  )
}

export default Chat